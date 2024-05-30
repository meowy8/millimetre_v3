import Link from "next/link";
import React from "react";
import MediumFilmPoster from "./MediumFilmPoster";
import EmptyFilmPoster from "./EmptyFilmPoster";
import { TMDBFilmDetails } from "@/types/filmTypes";

const FilmSearchResultsList = ({
  searchResults,
}: {
  searchResults: TMDBFilmDetails[];
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {searchResults?.length > 0 &&
        searchResults.map((film) => (
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
