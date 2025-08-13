import mongoose from "mongoose"

export  const connectDB= async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose connected");
    } catch (error) {
        console.error("error ",error);
        process.exit(1);
    }
}