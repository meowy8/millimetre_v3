import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";

const FavFilmsDisplay = ({ user }: { user: User }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {user.favouriteFilms && user.favouriteFilms.length > 0 ? (
        user.favouriteFilms.map((film) => {
          return (
            <Link
              href={`/film/${film.filmId}`}
              key={film.filmId}
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
