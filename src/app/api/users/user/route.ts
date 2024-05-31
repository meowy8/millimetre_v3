import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import { FavouriteFilms } from "@/types/userTypes";
import { hashPassword } from "@/utils/auth";

export async function GET(req: Request) {
  const username = new URL(req.url).searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { message: "Username not provided" },
      { status: 401 }
    );
  }

  await connectDB();

  // check if user exists
  const result = await User.findOne({ username });
  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // return user
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const { email, username, password, accountName, bio, profileImage } =
      await req.json();

    // check if required fields are not empty
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

    if (profileImage === "") {
      return NextResponse.json(
        { message: "Profile image cannot be empty" },
        { status: 400 }
      );
    }

    if (
      (password && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) ||
      !/\d/.test(password) ||
      password.length < 8
    ) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 8 characters long, contain at least one special character, and contain at least one number",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Email is not valid" },
        { status: 400 }
      );
    }

    if (
      !/^[a-zA-Z0-9]+$/.test(username) ||
      username?.length < 3 ||
      username?.length > 20
    ) {
      return NextResponse.json(
        {
          message:
            "Username must be between 3 and 20 characters long and contain only letters and numbers",
        },
        { status: 400 }
      );
    }

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
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      accountName,
      bio,
      profileImage,
    });

    console.log("newUser", newUser);

    // Save the user to the database
    await newUser.save();

    return NextResponse.json({ message: "Success", newUser }, { status: 200 });
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const { username, favouriteFilms, bio, profileImage } = await req.json();
  const usernameParam = new URL(req.url).searchParams.get("username");

  // check if session exists
  if (!usernameParam) {
    return NextResponse.json(
      { message: "You need to be logged in" },
      { status: 500 }
    );
  }

  // filter out null values from favouriteFilms
  const filteredFavouriteFilms = favouriteFilms.filter(
    (film: FavouriteFilms) => {
      return film.filmId !== undefined;
    }
  );

  const db = await connectDB();

  // check if user exists
  const user = await User.findOne({ username: usernameParam });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // update user with favourite films
  const result = await User.findOneAndUpdate(
    { username: usernameParam },
    { username, favouriteFilms: filteredFavouriteFilms, bio, profileImage },
    { new: true }
  );

  // check if user was updated
  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // console.log(result);
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
