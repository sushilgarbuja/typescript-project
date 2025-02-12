import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase=async()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Connected to database")
        })
        await mongoose.connect(envConfig.mongodbString as string)
        
    } catch (error) {
        console.log("Failed to connect to database");
        process.exit(1);
    }
}
export default connectToDatabase;