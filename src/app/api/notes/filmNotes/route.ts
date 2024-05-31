import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";
import User from "@/models/User";

export async function GET(req: Request) {
  await connectDB();
  const filmId = new URL(req.url).searchParams.get("filmId");
  const limit = new URL(req.url).searchParams.get("limit");
  // check if request requires note to have content
  // or if its for fetching general logs
  const includeContent =
    new URL(req.url).searchParams.get("includeContent") === "true";
  console.log("includeContent", includeContent);

  // fetch first 3 notes without displaying empty content
  if (limit && includeContent) {
    const result = (
      await Note.find({ filmId: filmId }).limit(parseInt(limit))
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch all notes without display empty content
  if (includeContent) {
    const result = (
      await Note.find({ filmId: filmId }).sort({ createdAt: -1 })
    ).filter((note) => {
      return note.content !== "";
    });
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  // fetch all notes for displaying film logs
  const result = await Note.find({ filmId: filmId });

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const username = new URL(req.url).searchParams.get("username");
  // console.log("data", data);

  if (username === "demouser") {
    return NextResponse.json(
      { message: "Demo users cannot create notes" },
      { status: 500 }
    );
  }

  // check if session exists
  if (!username) {
    return NextResponse.json(
      { message: "You need to be logged in" },
      { status: 500 }
    );
  }

  // check if user exists
  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 500 });
  }

  // create note
  const result = await Note.create(data);

  // add note reference to user
  await User.findOneAndUpdate(
    { username },
    { $push: { notes: result._id } },
    { new: true }
  );

  // check if note was created
  if (!result) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 201 });
}

export async function DELETE(req: Request) {
  await connectDB();
  const noteId = new URL(req.url).searchParams.get("noteId");
  const username = new URL(req.url).searchParams.get("username");
  const result = await Note.findByIdAndDelete(noteId);
  if (!result) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  if (username === "demouser") {
    return NextResponse.json(
      { message: "Demo users cannot delete notes" },
      { status: 400 }
    );
  }

  // remove note reference from user
  await User.findOneAndUpdate(
    { username },
    { $pull: { notes: noteId } },
    { new: true }
  );
  return NextResponse.json({ message: "Success" }, { status: 200 });
}
