import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";

export async function GET(req: Request) {
  const db = await connectDB();
  const username = new URL(req.url).searchParams.get("username");
  const noteId = new URL(req.url).searchParams.get("noteId");
  const limit = new URL(req.url).searchParams.get("limit");
  // check if request requires note to have content
  // or if its for fetching general logs
  const includeContent =
    new URL(req.url).searchParams.get("includeContent") === "true";
  console.log("includeContent", includeContent);

  // fetch first 3 notes without displaying empty content
  if (limit && includeContent) {
    const result = (
      await Note.find({ username: username }).limit(parseInt(limit)).sort({
        createdAt: -1,
      })
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch first LIMIT number of notes for displaying recently watched
  if (limit && !includeContent) {
    const result = await Note.find({ username: username })
      .limit(parseInt(limit))
      .sort({
        createdAt: -1,
      });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch all notes without display empty content
  if (includeContent) {
    const result = (
      await Note.find({ username: username }).sort({ createdAt: -1 })
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch single note
  if (noteId) {
    const result = await Note.findOne({ username: username, _id: noteId });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch all notes for displaying film logs
  const result = await Note.find({ username: username }).sort({
    createdAt: -1,
  });
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
