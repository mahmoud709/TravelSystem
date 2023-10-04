import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import route from "./routes/routes.js";
dotenv.config({ path: "./config.env" });
import compression from 'compression';
import multer from "multer";
// Connect to DB
const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.DBCONNECTIONURL}`);
        console.log('MongoDB connected')
    }
    catch(err){
        console.log(err)
    }
}
const app=express();
// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.json());
app.use(compression());

app.use('/uploads', express.static('uploads'));

app.use('/',route);

app.all('*', (req, res) => {
    res.send('This route Not found in server')
})
connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`App is running on https://localhost${process.env.PORT}`);
    })
})