import express from 'express';
import { config } from 'dotenv';



config();
const app = express(); //express var


// middlewares
app.use(express.json());

// connect to listner
app.listen(3000, ()=> console.log("server Open now ")); // server port listening





