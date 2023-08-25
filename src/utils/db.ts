import mongoose from "mongoose";

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("Connected to Database")
    }catch(err){
        throw new Error("Connection failed")
    }
}

export default connectDb