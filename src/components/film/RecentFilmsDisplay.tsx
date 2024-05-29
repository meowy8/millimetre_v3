import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";
import { FilmNotes } from "@/types/filmTypes";

const RecentFilmsDisplay = ({
  recentlyWatched,
}: {
  recentlyWatched: FilmNotes[];
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {recentlyWatched && recentlyWatched.length > 0 ? (
        recentlyWatched.map((film) => (
          <Link
            href={`/film/${film.filmId}`}
            key={film._id}
            className="w-full h-full"
          >
            <MediumFilmPoster posterPath={film.posterPath} title={film.title} />
          </Link>
        ))
      ) : (
        <span className="karla ml-2">No films added</span>
      )}
    </div>
  );
};

export default RecentFilmsDisplay;
