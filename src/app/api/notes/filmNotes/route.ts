import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";
import User from "@/models/User";

export async function GET(req: Request) {
  await connectDB();
  const filmId = new URL(req.url).searchParams.get("filmId");
  const limit = new URL(req.url).searchParams.get("limit");
  const includeContent =
    new URL(req.url).searchParams.get("includeContent") === "true";
  console.log("includeContent", includeContent);

  if (limit && includeContent) {
    const result = (
      await Note.find({ filmId: filmId }).limit(parseInt(limit))
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  if (includeContent) {
    const result = (
      await Note.find({ filmId: filmId }).sort({ createdAt: -1 })
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  const result = await Note.find({ filmId: filmId });

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const userId = new URL(req.url).searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ message: "Requires user id" }, { status: 500 });
  }

  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 500 });
  }

  const result = await Note.create(data);

  await User.findOneAndUpdate(
    { _id: userId },
    { $push: { notes: result._id } },
    { new: true }
  );

  if (!result) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 201 });
}
