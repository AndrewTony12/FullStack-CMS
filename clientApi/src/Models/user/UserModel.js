import UserSchema from "./UserSchema.js";

export const createNewUser = (obj) => {
    return UserSchema(obj).save();
  };

//filter in a object {email: "abc@abc.com"}
export const getUserEmail = (filter)=>{
  return UserSchema.findOne(filter);
} 

export const updateUser = (filter,obj)=>{
  return UserSchema.findOneAndUpdate(filter,obj, {new:true})
}