import Link from "next/link";
import React from "react";
import MediumFilmPoster from "./MediumFilmPoster";
import EmptyFilmPoster from "./EmptyFilmPoster";
import { TMDBFilmDetails } from "@/types/filmTypes";
import AIResultBtn from "../buttons/AIResultBtn";
import Loading from "../Loading";

const FilmSearchResultsList = ({
  searchResults,
  aiResults,
  loading,
}: {
  searchResults: TMDBFilmDetails[];
  aiResults: any;
  loading: boolean;
}) => {
  // useEffect(() => {
  //   console.log("aiResults", aiResults);
  // }, [aiResults]);

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 karla w-full ${
        !loading ? "opacity-100" : "opacity-0"
      } transition-all duration-500`}
    >
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
      {aiResults?.films?.length > 0 && (
        <div className="w-full flex flex-col rounded-md border border-[#FBF7F4] overflow-hidden">
          {aiResults.films.map((film: any, index: number) => (
            <AIResultBtn film={film} index={index} key={index} />
          ))}
        </div>
      )}
      {(searchResults?.length === 0 || aiResults?.films?.length === 0) && (
        <p className="text-center">No results found</p>
      )}
    </div>
  );
};

export default FilmSearchResultsList;
