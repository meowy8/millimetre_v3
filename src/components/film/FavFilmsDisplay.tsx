import React from "react";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import { User } from "@/types/userTypes";
import EmptyFilmPoster from "./EmptyFilmPoster";

const FavFilmsDisplay = ({ user }: { user: User }) => {
  return (
    <>
      {user.favouriteFilms && user.favouriteFilms.length > 0 ? (
        <div className="grid grid-cols-3 gap-2">
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
        <div className="flex justify-center items-center h-[150px]">
          <span className="text-sm font-extralight ml-2 karla">
            No favourite films yet
          </span>
        </div>
      )}
    </>
  );
};

export default FavFilmsDisplay;
