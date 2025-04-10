import dynamoose from "dynamoose";

const userSchema= new dynamoose.Schema({
id:{
type:String,
hashKey:true,
required:true
},
name:{
    type:String,
    required:true
},
email: {
    type: String,
    required: true,
    index: {
      name: 'EmailIndex',
    },
  },
passwordHash:{
    type:String,
    required:true
},
createdAt:{
type:Date,
default:()=> new Date()
},
}
)
 const Users= dynamoose.model('Users' ,userSchema,{ create:true, waitForActive: true});
 export default Users;