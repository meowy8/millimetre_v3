import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";
import EmptyFilmPoster from "./EmptyFilmPoster";

const FavFilmsDisplay = ({ user }: { user: User }) => {
  return (
    <>
      {user.favouriteFilms && user.favouriteFilms.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {user.favouriteFilms.map((film) => {
            return (
              <Link
                href={`/film/${film.filmId}`}
                key={film.filmId}
                className="hover:opacity-80"
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
            );
          })}
        </div>
      ) : (
        <span className="text-sm font-extralight">No favourite films yet</span>
      )}
    </>
  );
};

export default FavFilmsDisplay;
