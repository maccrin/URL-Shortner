import express, { Application, Request, Response, NextFunction } from "express";
import createShort from './controllers/getShortUrl'
import getShort from './controllers/redirectToLongUrl'
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import urlRouter from './routes/urlRoute'
import {StatusCodes} from 'http-status-codes';

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
    res.status(200).json({message:'Hello from Server'});
});

app.get('/search',( req:Request,res:Response)=>{
    console.log(req.query);
res.send(`here is req queries ${req.query.page}, ${req.query.q}`)
})
app.use(`/${process.env.API_PATH}`, urlRouter);

export default app;