import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import urlRouter from './routes/urlRoute.ts'
// 1) Import your config so it sets up Dynamoose
import './config.ts';
const app: Application = express();
//app.use(helmet());
app.use(express.json());
app.use(cookieParser());
if(process.env.API_PATH){
    console.log('hi env path')
    app.use(process.env.API_PATH,urlRouter);
}
else{
   
}
app.get('/', (req:Request,res:Response)=>{
    console.log(req.url);
    console.log(req.originalUrl);
    res.json({message:'Hello from Server'});
});
export default app;