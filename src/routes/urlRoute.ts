import express from "express"
import redirectLongUrl from '../controllers/redirectToLongUrl.ts'
import getShortUrl from '../controllers/getShortUrl.ts'

const urlRouter=express.Router({mergeParams:true});
urlRouter.route('/:shortId').get(redirectLongUrl);
urlRouter.route('/getShort').post(getShortUrl);
export default urlRouter;