import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo DB database connected");
    } catch (error) {
        console.log("unable to connect :: ",error)
    }
}