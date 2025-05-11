import UrlsT from '../models/urls.ts';
import  { Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';
const redirectLongUrl=async ( req:Request,res:Response):Promise<void>=>{
const shortId= req.params.shortId;

if(!shortId){
    res.status(StatusCodes.BAD_REQUEST).json({error:'shortID missing'});
    return
}
const record= await UrlsT.get(shortId);
if(!record){
    res.status(StatusCodes.NOT_FOUND).json({error:'record not found'});
    return 
}
await UrlsT.update({shortId,clickCount:record.clickCount+1});
res.redirect(StatusCodes.MOVED_PERMANENTLY,record.originalUrl);
}

export default redirectLongUrl