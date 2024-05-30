import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";

export async function GET(req: Request) {
  const searchValue = new URL(req.url).searchParams.get("searchValue");

  await connectDB();

  // search all users if search value is empty
  if (searchValue === "") {
    const result = await User.find();
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // search users by username
  const result = await User.find({ username: { $regex: searchValue } });
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
