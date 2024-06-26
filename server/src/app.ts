import express from "express";
import bodyParser from "body-parser";
import connectToDB from "./db";
import route from "./api/person";
import cors from "cors";
import path from "path";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use("/api",route);


connectToDB();
const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}`);
}) 