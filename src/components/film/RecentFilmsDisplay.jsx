import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";

const RecentFilmsDisplay = ({ user }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {user.recentlyWatchedFilms && user.recentlyWatchedFilms.length > 0 ? (
        user.recentlyWatchedFilms.map((film) => (
          <Link
            href={`/film/${film.id}`}
            key={film.id}
            className="w-full h-full"
          >
            <MediumFilmPoster film={film} />
          </Link>
        ))
      ) : (
        <span className="karla ml-2">No films added</span>
      )}
    </div>
  );
};

export default RecentFilmsDisplay;
