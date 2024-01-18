import app from './app.js';
import  connectToDatabase  from "./db/connections.js";


const PORT = process.env.PORT || 5000;
connectToDatabase()
.then(() => {
app.listen(3000, ()=> 
console.log("server Open connected to databasehand ")); // server port listening

})
.catch((err) => console.log(err)); // server

// connect to listner





