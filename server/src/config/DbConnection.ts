import mongoose from 'mongoose';
import 'dotenv/config';

const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_URL = process.env.DB_URL;

const connectToMongo = async () => {
    try {
        await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch(error) {
        console.log(error);
    }
}

export default connectToMongo;
