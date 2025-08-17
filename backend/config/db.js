import mongoose from "mongoose";
//function to connect to the database
const connectDB = async () => {

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');

})
await mongoose.connect(`${process.env.MONGO_URI}/smart-biller`)

}

export default connectDB;