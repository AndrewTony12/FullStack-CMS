import UserSchema from "./UserSchema.js";

export const createNewUser = (obj) => {
    return UserSchema(obj).save();
  };