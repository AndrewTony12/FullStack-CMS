import express from "express"

import { createNewUser, getUserEmail, updateUser } from "../../Models/user/UserModel.js"
import {v4 as uuidv4} from "uuid"
import { otpGenerator } from "../../Helpers/otpGenerator.js";
import { deleteSession, insertSession } from "../../Models/session/SessionModel.js";
import { sendEmailVerification } from "../../Helpers/emailHelper..js";

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

route.post("/reqOtp", async (req,res,next)=>{
    try {
       const { email } = req.body
       const result = await getUserEmail({email})
       if(result?._id){
        const otp = otpGenerator()
        const obj = {
            token:otp,
            associate:email,
            type:"updatePassword"
        }
        const result2 = await insertSession(obj)
        if (result2?._id){
            sendOTP(obj)
          return  res.json({
                status:"success",
                message:"We have send OTP",
                otp
            })
        }

    } res.json({
        status:"error",
        message:"Invalid request"
    })
        // console.log();
    } catch (error) {
        next(error)
    }
})

route.patch("/reqOtp", async (req,res,next)=>{
    try {
        let {email, password,otp} = req.body
        const result = await deleteSession({
            email,otp
        })
        if (result?._id) {
            password = hashPassword(password)
            const result2 = await updateUser({email},{password})
            console.log(result2);
        }



        

    } catch (error) {
        next(error)
    }
})

export default route;


