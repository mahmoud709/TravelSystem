import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import route from "./routes/routes.js";
dotenv.config({ path: "./config.env" });
// Connect to DB
mongoose.connect(process.env.DBCONNECTIONURL);

const app=express();
// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/',route);

app.all('*', (req, res) => {
    res.send('This route Not found in server')
})
app.listen(process.env.PORT,()=>{
    console.log(`App is running on https://localhost${process.env.PORT}`);
})