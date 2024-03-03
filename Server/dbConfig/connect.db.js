import mongoose from "mongoose";

const dbUserName = "sahilkhatiwada";
const dbPassword = "sahilkhatiwada12";
const databaseName = "Job-portal";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.nawyyok.mongodb.net/${databaseName}?retryWrites=true&w=majority`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
  }
};

export default connectDB;
