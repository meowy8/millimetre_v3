import bcrypt from "bcrypt";
import connectDB from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, username, password, accountName, bio } = await req.json();

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

    if (accountName === "") {
      return NextResponse.json(
        { message: "Account name cannot be empty" },
        { status: 400 }
      );
    }

    if (username === "") {
      return NextResponse.json(
        { message: "Username cannot be empty" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Check if email already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json(
        { message: "Username already in use" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const user = new User({
      email,
      username,
      password: hashedPassword,
      accountName,
      bio,
    });

    // Save the user to the database
    const newUser = await user.save();

    return NextResponse.json({ message: "Success", newUser }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
