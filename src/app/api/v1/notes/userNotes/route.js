import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";

export async function GET(req) {
  const db = await connectDB();
  const username = new URL(req.url).searchParams.get("username");
  const limit = new URL(req.url).searchParams.get("limit");

  if (limit) {
    const result = await Note.find({ username: username }).limit(
      parseInt(limit)
    );
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  const result = await Note.find({ username: username });
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
