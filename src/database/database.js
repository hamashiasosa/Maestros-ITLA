import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(
     "mongodb+srv://proyecto:hamashia00@cluster1.lfjlz6f.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Mongodb is connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
