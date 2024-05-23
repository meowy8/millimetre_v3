import Link from "next/link";
import React from "react";
import MediumFilmPoster from "../film/MediumFilmPoster";
import EmptyFilmPoster from "../film/EmptyFilmPoster";

const FilmSearchResultsList = ({ searchResults }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {searchResults.results &&
        searchResults.results.map((film) => (
          <Link
            href={`/film/${film.id}`}
            className="hover:opacity-80"
            key={film.id}
          >
            {film.poster_path ? (
              <MediumFilmPoster
                title={film.title}
                posterPath={film.poster_path}
              />
            ) : (
              <EmptyFilmPoster />
            )}
          </Link>
        ))}
    </div>
  );
};

export default FilmSearchResultsList;
