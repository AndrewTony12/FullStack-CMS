import express from "express"
import { crateNewUser } from "../Models/user/UserModel.js"

const route = express.Router()




// payload = data = req.body
// hash the password
// do the verification cycyle
// validate the data using joi
// JWT authentication
route.post("/",async (req,res,next)=>{
    try {
        console.log('I am here');
        const result = await crateNewUser(req.body)
        console.log(result);
    } catch (error) {
        next(error)
    }
})

export default route;
