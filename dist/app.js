import express from 'express';
import { config } from 'dotenv';
config();
const app = express(); //express var
// middlewares
app.use(express.json());
export default app; // export app 
//# sourceMappingURL=app.js.map