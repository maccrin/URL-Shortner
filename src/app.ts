import express, { Application, Request, Response, NextFunction } from "express";
import createShort from './controllers/getShortUrl'
import getShort from './controllers/redirectToLongUrl'
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import urlRouter from './routes/urlRoute'
// 1) Import your config so it sets up Dynamoose
import './config';
const app: Application = express();
app.use(express.json());
app.use(helmet());
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

app.use(`/${process.env.API_PATH}`, urlRouter);

export default app;