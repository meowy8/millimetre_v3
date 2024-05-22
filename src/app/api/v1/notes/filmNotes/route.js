import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Note from "@/models/Note";

export async function GET(req) {
  await connectDB();
  const filmId = new URL(req.url).searchParams.get("filmId");
  const limit = new URL(req.url).searchParams.get("limit");

  if (limit) {
    const result = await Note.find({ filmId: filmId }).limit(parseInt(limit));
    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }

  const result = await Note.find({ filmId: filmId });

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const result = await Note.create(data);
  return NextResponse.json({ message: "Success", result }, { status: 201 });
}
