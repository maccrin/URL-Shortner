import UrlsT from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";
import { randomBytes } from 'crypto';

const BASE_URL=process.env.BASE_URL??'http://localhost:3000'
//validate longUrl
const isValidUrl=(url:string):boolean=>{
try{
  new URL(url);
return true;
}
catch(error){
return false;
}
}

const createShort= async (req:Request,res:Response):Promise<void>=>{
  try{
const{url:originalUrl}=req.body;

const shortId=randomBytes(3).toString('base64url');
if(!originalUrl || !isValidUrl(originalUrl)){
    res.status(400).json({error:'A valid url is required'});
}

const shortUrl=`${BASE_URL}/${shortId}`;

const data = await UrlsT.create({
  shortId,
  originalUrl,
   clickCount: 0,
});
res.status(201).setHeader("Content-Type","application/json").json({
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


