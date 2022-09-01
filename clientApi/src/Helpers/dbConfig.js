import mongoose from "mongoose";

export const mongoConnect = () => {
  try {
    const conStr = process.env.MONGO_URL
    const con = mongoose.connect(conStr);
    console.log(conStr);
    con && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
