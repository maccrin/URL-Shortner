import * as dynamoose from "dynamoose";
import 'dotenv/config';

// Create a new DynamoDB instance using credentials from environment variables
const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
  region: process.env.AWS_REGION || 'us-east-1',
});

// Tell Dynamoose to use this DynamoDB instance
dynamoose.aws.ddb.set(ddb);

// (Optional) Export table names or other config
export const TABLE_USERS = process.env.TABLE_USERS || 'Users';
export const TABLE_URLS = process.env.TABLE_URLS || 'Urls';
