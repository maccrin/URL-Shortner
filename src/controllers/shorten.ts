import UrlsT from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";

const getShort=async ( req:Request,res:Response):Promise<void>=>{
const {shortId}= req.params;
if(!shortId){
    res.status(400).json({error:'shortID missing'});
    return
}
const record= await UrlsT.get(shortId);
if(!record){
    res.status(400).json({error:'record not found'});
    return 
}
await UrlsT.update({shortUrl:shortId,clickCount:record.clickCount+1});
res.redirect(301,record.originalUrl);
}

export default getShort