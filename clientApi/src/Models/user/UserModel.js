import UserSchema from "./UserSchema.js";

export const crateNewUser = (obj) => {
    return UserSchema(obj).save();
  };