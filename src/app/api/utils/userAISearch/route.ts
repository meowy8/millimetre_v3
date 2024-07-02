import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { username } = await req.json();

  // connect to db
  await connectDB();

  //check user aiSearchCount
  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (user.aiSearchCount >= 5) {
    return NextResponse.json({ message: "Max search count reached" });
  }

  // increment AISearchCount
  const updateSearchCount = await User.updateOne(
    { username },
    { $inc: { aiSearchCount: 1 } }
  );

  // check if increment was successful
  if (!updateSearchCount) {
    return NextResponse.json({ message: "Failed to increment AISearchCount" });
  }

  return NextResponse.json({ message: "Success", result: user.aiSearchCount });
}

export async function GET(req: Request) {
  const username = new URL(req.url).searchParams.get("username");

  await connectDB();
  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const aiSearchCount = user?.aiSearchCount;

  return NextResponse.json({ aiSearchCount });
}
