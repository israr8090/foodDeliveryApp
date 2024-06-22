import mongoose from "mongoose";

const connectDB = async () => {
   try {
    await mongoose.connect ('mongodb://localhost:27017/foodEcommerce');
    console.log('server is connected with Database Successfully')
   } catch (error) {
        console.log(error)
   }
};

export default connectDB;