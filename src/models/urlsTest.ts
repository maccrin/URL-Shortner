import dynamoose from "dynamoose";

const urlTestSchema= new dynamoose.Schema({
    shortId: {
        type: String,
        hashKey: true,
        required: true,
      },
originalUrl:{
    type:String,
    required:true
},
clickCount:{
    type:Number,
    default:0
},
createdAt:{
type:Date,
default:()=> new Date()
},
}
)
 const UrlsTest= dynamoose.model('UrlsTest' ,urlTestSchema,{ create:true, waitForActive: true})
 export default UrlsTest;