import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";

export async function GET(req) {
  await connectDB();

  const searchValue = new URL(req.url).searchParams.get("searchValue");

  if (searchValue === "") {
    const result = await User.find();
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  const result = await User.find({ username: { $regex: searchValue } });
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
