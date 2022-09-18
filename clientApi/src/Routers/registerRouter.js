import express from "express"
import { hashPassword } from "../Helpers/bcryptHelper.js";
import { sendEmailVerification } from "../Helpers/emailHelper..js";
import { createNewUser, updateUser } from "../Models/user/UserModel.js"
import {v4 as uuidv4} from "uuid"

const route = express.Router()


route.post("/", async (req,res,next)=>{
    try {
        // console.log(req);
        console.log(req.body.password);
        // encrypt the password before sending it to database
        req.body.password = hashPassword(req.body.password);
// const result = 0
const verificationCode = uuidv4()
req.body.verificationCode = verificationCode
const result = await createNewUser(req.body)
if (result?._id) {
            sendEmailVerification(result)
         
            console.log(result);
        res.json({
            status:"success",
            message:"Register",
            result
        })}
       
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

route.patch("/", async (req,res,next)=>{
    try {
        const {email, verificationCode} = req.body
        const filter = {email, verificationCode}
        const update = {
            status:"active",
            verificationCode: "",
        }
        const result = await updateUser(filter,update)

        if(result?._id){
            res.json({
                status:"success",
                message:"verification complete",
                result
                
            })  
        }

        res.json({
            status:"error",
            message:"could not verify",
            
        })

        

    } catch (error) {
        next(error)
    }

})

export default route;


