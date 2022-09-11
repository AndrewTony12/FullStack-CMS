import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { mongoConnect } from "./src/config/dbConfig.js";
const PORT = process.env.PORT || 8000;
import registerRouter from "./src/Routers/registerRouter.js"
import loginRouter from "./src/Routers/loginRouter.js"

//use middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// connect to db
mongoConnect();

// api
app.use("/api/v1/register",registerRouter)
app.use("/api/v1/login", loginRouter)

app.get("/", (req, res) => {
    res.json({
      message: "You reached e commerce api",
    });
  });
  
  app.use((error, req, res, next) => {
    console.log(error);
    const status = error.status || 404;
    res.status(status).json({
      status: "error",
      message: error.message,
    });
  });
  
  app.listen(PORT, (error) => {
    error
      ? console.log(error)
      : console.log(`server running at http://localhost:${PORT}`);
  });
  