import express from "express"
import redirectLongUrl from '../controllers/redirectToLongUrl'
import getShortUrl from '../controllers/getShortUrl'

const urlRouter=express.Router({mergeParams:true});
urlRouter.route('/:shortId').get(redirectLongUrl);
urlRouter.route('/getShort').post(getShortUrl);
export default urlRouter;