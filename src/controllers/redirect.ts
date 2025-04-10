import {urlTable } from '../config.ts'
import Urls from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";
import { randomBytes } from 'crypto';
const createShort= async (req:Request,res:Response):Promise<void>=>{
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

  res.status(200).json(data);
}


export default createShort;


