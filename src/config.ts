import  dynamoose from "dynamoose";
import 'dotenv/config';
import  Users from './models/users';
import Urls from './models/urls';
import UrlsTest from './models/urlsTest';
const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
  region: process.env.AWS_REGION || 'eu-north-1',
});

// Tell Dynamoose to use this DynamoDB instance
dynamoose.aws.ddb.set(ddb);

// Define a table that uses this model
const userTable = new dynamoose.Table("Users", [Users], {
  create: true, 
  waitForActive: { enabled: true }, 
});

const urlTable = new dynamoose.Table("UrlsT", [Urls], {
  create: true, 
  waitForActive: { enabled: true }, 
});

const urlsTestTable= new dynamoose.Table("UrlsTest",[UrlsTest],{
  create:true,
  waitForActive:{enabled:true},
});
export {userTable,urlTable,urlsTestTable}

