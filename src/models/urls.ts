import dynamoose from "dynamoose";

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
},
{
    timestamps:true
}
)

export const Urls= dynamoose.model('Urls' ,urlSchema,{ create:true, waitForActive: true});