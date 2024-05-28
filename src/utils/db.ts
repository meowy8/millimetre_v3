import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MILLIMETRE_DATABASE_USERNAME}:${process.env.MILLIMETRE_DATABASE_PASSWORD}@millimetre.ekdx02k.mongodb.net/millimetre`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}
