import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";

const FavFilmsDisplay = ({ user }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {user.favouriteFilms && user.favouriteFilms.length > 0 ? (
        user.favouriteFilms.map((film) => {
          return (
            <Link
              href={`/film/${film.id}`}
              key={film.id}
              className="hover:opacity-80"
            >
              <MediumFilmPoster
                posterPath={film.posterPath}
                title={film.title}
              />
            </Link>
          );
        })
      ) : (
        <span className="karla ml-2">No films added</span>
      )}
    </div>
  );
};

export default FavFilmsDisplay;
