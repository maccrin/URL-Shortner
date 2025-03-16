import  dynamoose from "dynamoose";
import 'dotenv/config';
import  Users from './models/users.ts';
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
const myTable = new dynamoose.Table("UsersTable", [Users], {
  create: true, // Auto-create the table if it doesn’t exist
  waitForActive: { enabled: true }, // Wait until the table is fully ready
  // other configuration options
});

// Then you can create (or ensure) the table exists
await myTable.create();  // Creates the table if it doesn't exist


