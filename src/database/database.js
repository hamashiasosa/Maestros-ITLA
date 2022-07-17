import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://hama:Blindspot00@cluster0.mxsa5p6.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Mongodb is connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
