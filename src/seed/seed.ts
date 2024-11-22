import Room from "../models/room";
import mongoose from "mongoose";
import { rooms } from "./data";

const seedRooms = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/stay-hub");
    await mongoose.connect(
      "mongodb+srv://manukyansirarpi1:Iw4VXgkJvlRmAcNP@cluster0.mx4zzsp.mongodb.net/stay-hub?retryWrites=true&w=majority&appName=Cluster0"
    );
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added.");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();
