import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";

const RecentFilmsDisplay = ({ user }: { user: User }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {user.recentlyWatched && user.recentlyWatched.length > 0 ? (
        user.recentlyWatched.map((film) => (
          <Link
            href={`/film/${film.filmId}`}
            key={film.filmId}
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
