import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { FavouriteFilms } from "@/types/userTypes";
import { hashPassword } from "@/utils/auth";

export async function GET(req: Request) {
  await connectDB();

  const username = new URL(req.url).searchParams.get("username");
  const result = await User.findOne({ username });

  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function POST(req: Request) {
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
    } else if (!username && !accountName) {
      return NextResponse.json(
        { message: "Email is available" },
        { status: 200 }
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
    const hashedPassword = await hashPassword(password);

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
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const { username, favouriteFilms, bio } = await req.json();
  const userId = new URL(req.url).searchParams.get("userId");

  console.log("userId", userId);

  const filteredFavouriteFilms = favouriteFilms.filter(
    (film: FavouriteFilms) => {
      return film.filmId !== undefined;
    }
  );

  const db = await connectDB();
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { username, favouriteFilms: filteredFavouriteFilms, bio },
    { new: true }
  );

  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  console.log(result);
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
