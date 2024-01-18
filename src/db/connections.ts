import {connect, disconnect} from "mongoose"

export default async function connectToDatabase(){
    try {
    await connect(process.env.MONGODB_URL);
    } catch (err) {
      throw new Error("can't connect to MongoDB")
      console.error(err);
    }

}

async function disconnectFromDatabase(){
    try { 
        await disconnect();
    } catch (err) {
        console.error(err);
        throw new Error("can't disconnect from MongoD");
    }
} 