import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";

export async function GET(req: Request) {
  const db = await connectDB();

  const username = new URL(req.url).searchParams.get("username");
  const result = await User.findOne({ username });

  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
