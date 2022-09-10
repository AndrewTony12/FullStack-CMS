import express from "express"
import { hashPassword } from "../Helpers/bcryptHelper.js";
import { createNewUser } from "../Models/user/UserModel.js"

const route = express.Router()


route.post("/", async (req,res,next)=>{
    try {
        // console.log(req);
        console.log(req.body.password);
        // encrypt the password before sending it to database
        req.body.password = hashPassword(req.body.password)
console.log(req.body.password);
const result = 0
        // const result = await createNewUser(req.body)
       if (result?._id) {
        res.json({
            status:"success",
            message:"Register",
            result
        })}
        res.json({
            status:"error",
            message:"unsuccessful"
        })
        // console.log();
    } catch (error) {
        next(error)
    }
})



route.get("/", (req,res,next)=>{
    try {
        console.log("Ysys");
        // const result = await createNewUser(req.body)
        console.log();
    } catch (error) {
        next(error)
    }
})

export default route;
