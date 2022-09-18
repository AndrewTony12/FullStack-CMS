import express from "express";
import { createNewUser, getUserEmail } from "../Models/user/UserModel.js";
import { comparePassword } from "../Helpers/bcryptHelper.js";


const route = express.Router();

route.post("/", async (req,res,next)=> {
    try {
        const {email,password} = req.body
        const result = await getUserEmail({email})

        if (result?._id) {
            //check if the password matches
            const isMatched = comparePassword(password, result.password)

            if(isMatched) {
                return res.json({
                    status: "success",
                    message: "Login Success",
                    result
                    })
                } else {
                    return res.json({
                        status:"error",
                        message: "invalid login credentials"
                    })
                }
            }
        } catch (error){
            next(error)
    }
})

export default route;