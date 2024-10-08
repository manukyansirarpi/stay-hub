import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected.");
    return;
  }

  let DB_URI: string = "";

  if (process.env.NODE_ENV === "development") {
    DB_URI = process.env.DB_URI_LOCAl!;
  }
  if (process.env.NODE_ENV === "production") {
    DB_URI = process.env.DB_URI_PROD!;
  }

  await mongoose.connect(DB_URI).then((connection) => {
    console.log("Connected to MongoDB");
  });
};

export default connectDB;
