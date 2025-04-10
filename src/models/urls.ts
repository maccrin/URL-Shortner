import dynamoose from "dynamoose";


interface UrlItem {
    shortUrl: string;
  originalUrl: string;
  clickCount: number;
  createdAt: Date;
}
const urlSchema= new dynamoose.Schema({
shortUrl:{
type:String,
hashKey:true,
required:true
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

 const Urls= dynamoose.model('Urls' ,urlSchema,{ create:true, waitForActive: true})
 
 export default Urls;