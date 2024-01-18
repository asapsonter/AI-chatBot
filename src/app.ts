import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';




config();
const app = express(); //express var


// middlewares
app.use(express.json());
//remove morgan in production 
app.use(morgan("dev"));

app.use("/api/v1");

export default app; // export app 