import express from 'express';
const app = express(); //express var

app.use(express.json());

app.listen(3000, () => console.log("server Open now ")); // server port listening
