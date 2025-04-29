import {urlTable } from '../config.ts'
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
const data = await Urls.create({
    originalUrl,
    shortUrl: shortId,
    clickCount: 0,
  });
const shortUrl=`${BASE_URL}/${shortId}`;
res.status(200).json({
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


