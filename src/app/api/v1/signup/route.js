import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectDB();
    if (email === "") {
      return NextResponse.json(
        { message: "Email cannot be empty" },
        { status: 400 }
      );
    }

    if (password === "") {
      return NextResponse.json(
        { message: "Password cannot be empty" },
        { status: 400 }
      );
    }

    const existingUserEmail = await User.findOne({ email });

    if (existingUserEmail) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Success", email }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
