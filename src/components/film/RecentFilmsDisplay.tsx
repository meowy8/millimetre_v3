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
        <div className="grid grid-cols-3 gap-2 justify-center">
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
        <div className="flex justify-center items-center h-[150px]">
          <span className="text-sm font-extralight ml-2 karla">
            No recently watched films
          </span>
        </div>
      )}
    </>
  );
};

export default RecentFilmsDisplay;
