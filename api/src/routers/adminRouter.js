import express from "express";
import { token } from "morgan";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { profileUpdateNotification } from "../helpers/emailHelper.js";
import { signAccessJWT, verifyRefreshJWT } from "../helpers/jwtHelper.js";
import { adminAuth } from "../middlewares/authMiddleware.js";
import {
  updateAdminProfileValidation,
  updatePasswordValidation,
} from "../middlewares/validationMiddleware.js";
import {
  getOneAdmin,
  updateAdmin,
} from "../models/adminUser/AdminUserModel.js";
const router = express.Router();

// get admin info TODO
router.get("/", adminAuth, (req, res, next) => {
  try {
    const user = req.adminInfo;
    user.password = undefined;
    user.accessJWT = undefined;
    res.json({
      status: "success",
      message: "todo get method",
      user,
    });
  } catch (error) {
    next(error);
  }
});

// update admin profile info
router.put(
  "/",
  adminAuth,
  updateAdminProfileValidation,
  async (req, res, next) => {
    try {
      const { currentPassword, email, ...rest } = req.body;

      //check if user exit for the give email
      const user = await getOneAdmin({ email });
      if (user?._id) {
        // if so, check if the password sotred in the db matches the password sent
        const isMatched = comparePassword(currentPassword, user.password);

        console.log(isMatched);
        if (isMatched) {
          // update password in the database
          const filter = { _id: user._id };

          const updatedAdmin = await updateAdmin(filter, rest);
          if (updatedAdmin?._id) {
            user.password = undefined;
            res.json({
              status: "success",
              message: "Your profile has been updated successfully",
              user,
            });

            // finally, send the email notification
            profileUpdateNotification(user);
            return;
          }
        }
      }

      res.json({
        status: "error",
        message: "Unable to update your profile, try again later",
      });
    } catch (error) {
      next(error);
    }
  }
);

//update admin password as loggined in user
router.patch(
  "/",
  adminAuth,
  updatePasswordValidation,
  async (req, res, next) => {
    try {
      const { currentPassword, password, email } = req.body;
      //check if user exit for the give email
      const user = await getOneAdmin({ email });
      if (user?._id) {
        // if so, check if the password sotred in the db matches the password sent
        const isMatched = comparePassword(currentPassword, user.password);
        if (isMatched) {
          // encrypt the new password
          const hashsPass = hashPassword(password);

          // update password in the database
          const filter = { _id: user._id };
          const obj = {
            password: hashsPass,
          };
          const updatedAdmin = await updateAdmin(filter, obj);
          if (updatedAdmin?._id) {
            res.json({
              status: "success",
              message: "New password has been updated",
            });

            // finally, send the email notification
            profileUpdateNotification(user);
            return;
          }
        }
      }

      res.json({
        status: "error",
        message: "Invalid current password",
      });
    } catch (error) {
      next(error);
    }
  }
);

//return new accessJWT based on the accessJWT given
router.get("/accessjwt", async (req, res, next) => {
  try {
    //receive authorization token, refreshJWT
    const { authorization } = req.headers;
    if (authorization) {
      const decoded = await verifyRefreshJWT(authorization);

      if (decoded?.email) {
        const user = await getOneAdmin({
          email: decoded.email,
          refreshJWT: authorization,
        });

        if (user?._id) {
          const accessJWT = await signAccessJWT({ email: decoded.email });
          return res.json({
            status: "success",
            accessJWT,
          });
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "unauthorized",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
