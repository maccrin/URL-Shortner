import express from "express"
import getshort from '../controllers/shorten.ts'
import createShort from '../controllers/redirect.ts'

const urlRouter=express.Router({mergeParams:true});
urlRouter.route('/shortUrl').get(getshort);
urlRouter.route('/long').post(createShort);
export default urlRouter;