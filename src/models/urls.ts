import dynamoose from "dynamoose";

const urlSchema= new dynamoose.Schema({
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
 const Urls= dynamoose.model('UrlsT' ,urlSchema,{ create:true, waitForActive: true})
 export default Urls;