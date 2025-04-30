import Urls from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";
import { randomBytes } from 'crypto';

const BASE_URL=process.env.BASE_URL??'http://localhost:3000'

const createShort= async (req:Request,res:Response):Promise<void>=>{
  try{
const{url:originalUrl}=JSON.parse(req.body);

const shortId=randomBytes(3).toString('base64url');
if(!originalUrl){
    res.status(400).json({error:'url is not provided'});
}

const shortUrl=`${BASE_URL}/${shortId}`;

const data = await Urls.create({
  originalUrl,
  shortUrl,
  clickCount: 0,
});
res.status(200).setHeader("Content-Type","application/json").json({
  shortUrl,
  shortId
});
}

catch(error){
console.error('Error' , error);
res.status(500).json({error:'Internal server error'})
}
}


export default createShort;


