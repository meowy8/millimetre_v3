import User from "@/models/User";
import { NextResponse } from "next/server";
import connectDB from "@/utils/db";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const result = await User.findOneAndUpdate(
    { username: data.username },
    { $push: { favouriteFilms: data } },
    { new: true }
  );
  return NextResponse.json({ message: "Success", result }, { status: 201 });
}
