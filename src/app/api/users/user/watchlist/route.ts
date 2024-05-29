import Film from "@/models/Film";
import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const username = new URL(req.url).searchParams.get("username");
  console.log("username", username);

  if (!username) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const user = await User.findOne({ username }).populate("watchlist");
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  console.log("watchlist", user.watchlist);

  return NextResponse.json(
    { message: "Success", result: user.watchlist },
    { status: 200 }
  );
}

export async function PATCH(req: Request) {
  const { film, userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  if (!film) {
    return NextResponse.json({ message: "Film not found" }, { status: 404 });
  }

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (user.watchlist.includes(film.id)) {
    return NextResponse.json(
      { message: "Film already in watchlist" },
      { status: 400 }
    );
  }

  const addedFilm = await Film.create(film);

  const result = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { watchlist: addedFilm._id } },
    { new: true }
  );

  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  console.log("userId", userId);
  return NextResponse.json({ message: "Success", result }, { status: 200 });
}

export async function DELETE(req: Request) {
  const { filmId, userId } = await req.json();
  console.log("filmId", filmId);
  console.log("userId", userId);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  if (!filmId) {
    return NextResponse.json({ message: "Film not found" }, { status: 404 });
  }

  const user = await User.findOne({ _id: userId }).populate("watchlist");
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (!user.watchlist.some((film) => film.filmId === filmId)) {
    return NextResponse.json(
      { message: "Film not in watchlist" },
      { status: 400 }
    );
  }

  const filmToRemove = user.watchlist.find((film) => film.filmId === filmId);
  console.log("filmToRemove", filmToRemove);
  console.log("watchlist", user.watchlist);

  const result = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { watchlist: filmToRemove._id } },
    { new: true }
  );

  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Success", result }, { status: 200 });
}
