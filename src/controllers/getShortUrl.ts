import UrlsT from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";
import { randomBytes } from 'crypto';
import {StatusCodes} from 'http-status-codes'
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

const getShortUrl= async (req:Request,res:Response):Promise<void>=>{
  try{
const{url:originalUrl}=req.body;

const shortId=randomBytes(3).toString('base64url');
if(!originalUrl || !isValidUrl(originalUrl)){
    res.status(StatusCodes.BAD_REQUEST).json({error:'A valid url is required'});
}

const shortUrl=`${BASE_URL}/${shortId}`;

 await UrlsT.create({
  shortId,
  originalUrl,
   clickCount: 0,
});
res.status(StatusCodes.CREATED).setHeader("Content-Type","application/json").json({
  shortUrl,
  shortId
});
}

catch(error){
console.error('Error' , error);
res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:'Internal server error'})
}
}


export default getShortUrl;


