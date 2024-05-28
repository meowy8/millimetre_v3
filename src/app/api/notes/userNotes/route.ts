import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";

export async function GET(req: Request) {
  const db = await connectDB();
  const username = new URL(req.url).searchParams.get("username");
  const noteId = new URL(req.url).searchParams.get("noteId");
  const limit = new URL(req.url).searchParams.get("limit");

  if (limit) {
    const result = await Note.find({ username: username })
      .limit(parseInt(limit))
      .sort({
        createdAt: -1,
      });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  if (noteId) {
    const result = await Note.findOne({ username: username, _id: noteId });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  const result = await Note.find({ username: username }).sort({
    createdAt: -1,
  });
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
