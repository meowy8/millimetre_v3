import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";
import { FilmNotes } from "@/types/filmTypes";
import EmptyFilmPoster from "./EmptyFilmPoster";

const RecentFilmsDisplay = ({
  recentlyWatched,
}: {
  recentlyWatched: FilmNotes[];
}) => {
  return (
    <>
      {recentlyWatched && recentlyWatched.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 justify-center">
          {recentlyWatched.map((film) => (
            <Link
              href={`/film/${film.filmId}`}
              key={film._id}
              className="w-full h-full hover:opacity-80"
            >
              {film.posterPath ? (
                <MediumFilmPoster
                  posterPath={film.posterPath}
                  title={film.title}
                />
              ) : (
                <EmptyFilmPoster />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <span className="text-sm font-extralight">
          No recently watched films
        </span>
      )}
    </>
  );
};

export default RecentFilmsDisplay;
