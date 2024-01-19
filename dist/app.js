import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express(); //express var
// middlewares
app.use(express.json());
//remove morgan in production 
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app; // export app 
//# sourceMappingURL=app.js.map