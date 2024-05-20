"use client";
import React, { useEffect } from "react";
import SearchInput from "@/components/SearchInput";
import { useParams } from "next/navigation";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
import Link from "next/link";
import GeneralBtn from "@/components/buttons/GeneralBtn";
import { fetchFilmSearch } from "@/utils/fetchFilmData";
import { FilmSearchResults } from "@/types/filmTypes";
import EmptyFilmPoster from "@/components/film/EmptyFilmPoster";

const FilmSearch = () => {
  const [searchResults, setSearchResults] = React.useState(
    {} as FilmSearchResults
  );

  const params = useParams();
  const { searchValue } = params;

  useEffect(() => {
    (async () =>
      setSearchResults(await fetchFilmSearch(searchValue as string)))();
  }, [searchValue]);

  return (
    <section className="relative top-32 m-4 flex flex-col items-center gap-8">
      <div className="w-full mx-4 flex flex-col">
        <SearchInput placeholder={"Search for a film"} />
      </div>
      <div className="flex flex-col w-full">
        <span className="karla">Results for...</span>
        <span className="outfit text-3xl">{searchValue}</span>
      </div>
      <div className="w-full">
        <GeneralBtn text={"Show archived"} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {searchResults.results &&
          searchResults.results.map((film) => (
            <Link
              href={`/film/${film.id}`}
              className="hover:opacity-80"
              key={film.id}
            >
              {film.poster_path ? (
                <MediumFilmPoster poster_path={film.poster_path} />
              ) : (
                <EmptyFilmPoster />
              )}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default FilmSearch;
