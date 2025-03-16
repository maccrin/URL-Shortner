import express, { Application, Request, Response, NextFunction } from "express";
// 1) Import your config so it sets up Dynamoose
import './config.ts';
const app: Application = express();
export default app;