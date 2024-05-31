import Film from "@/models/Film";
import User from "@/models/User";
import { FilmType } from "@/types/filmTypes";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const username = new URL(req.url).searchParams.get("username");
  // console.log("username", username);

  // check if username has been provided
  if (!username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  // check if user exists and populate watchlist data
  const user = await User.findOne({ username }).populate("watchlist");
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // console.log("watchlist", user.watchlist);

  // return user's watchlist
  return NextResponse.json(
    { message: "Success", result: user.watchlist },
    { status: 200 }
  );
}

export async function PATCH(req: Request) {
  const { film, username } = await req.json();

  // check if session exists
  if (!username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  // check if film has been provided
  if (!film) {
    return NextResponse.json({ message: "Film not found" }, { status: 404 });
  }

  // check if user exists
  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // check if film is already in watchlist
  if (user.watchlist.includes(film.id)) {
    return NextResponse.json(
      { message: "Film already in watchlist" },
      { status: 400 }
    );
  }

  // check if film exists in database
  const existingFilmData = await Film.findById(film.id);
  if (!existingFilmData) {
    // if the film does not exist in the database, create it
    const addedFilm = await Film.create(film);

    // add film reference to user
    const result = await User.findOneAndUpdate(
      { username },
      { $push: { watchlist: addedFilm._id } },
      { new: true }
    );

    if (!result) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", result }, { status: 200 });
  } else {
    // if the film exists in the database, add a reference to the user's watchlist
    const result = await User.findOneAndUpdate(
      { username },
      { $push: { watchlist: existingFilmData._id } },
      { new: true }
    );

    if (!result) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", result }, { status: 200 });
  }
}

export async function DELETE(req: Request) {
  const { filmId, username } = await req.json();
  // console.log("filmId", filmId);
  // console.log("userId", userId);

  // check if session exists
  if (!username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  // check if film has been provided
  if (!filmId) {
    return NextResponse.json({ message: "Film not found" }, { status: 404 });
  }

  // check if user exists and populate watchlist data
  const user = await User.findOne({ username }).populate("watchlist");
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // check if film is in watchlist
  if (!user.watchlist.some((film: FilmType) => film.filmId === filmId)) {
    return NextResponse.json(
      { message: "Film not in watchlist" },
      { status: 400 }
    );
  }

  // remove film from watchlist
  const filmToRemove = user.watchlist.find(
    (film: FilmType) => film.filmId === filmId
  );
  // console.log("filmToRemove", filmToRemove);
  // console.log("watchlist", user.watchlist);

  // remove film reference from user
  const result = await User.findOneAndUpdate(
    { username },
    { $pull: { watchlist: filmToRemove._id } },
    { new: true }
  );

  // check if user was updated
  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
