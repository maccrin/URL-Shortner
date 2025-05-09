import express from "express"
import getshort from '../controllers/redirectToLongUrl.ts'
import createShort from '../controllers/getShortUrl.ts'

const urlRouter=express.Router({mergeParams:true});
urlRouter.route('/shortUrl').get(getshort);
urlRouter.route('/long').post(createShort);
export default urlRouter;