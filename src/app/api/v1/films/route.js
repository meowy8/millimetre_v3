import { NextResponse } from "next/server";

////// NOT IN USE //////

export async function GET(req) {
  const { filmId } = req.query;
  const apiKey = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?language=en-US&api_key=${apiKey}`
    );
    const filmDetails = await response.json();

    if (response.status !== 200) {
      return NextResponse.json(
        { message: "Film not found" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Success", filmDetails },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
