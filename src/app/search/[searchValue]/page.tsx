"use client";
import React, { useEffect } from "react";
import FilmSearchHeader from "@/components/film/FilmSearchHeader";
import { useParams } from "next/navigation";
import FilmSearchResultsList from "@/components/film/FilmSearchResultsList";
import { fetchFilmSearch } from "@/utils/dataFetching/filmData";
import { FilmSearchResults, TMDBFilmDetails } from "@/types/filmTypes";

const FilmSearch = () => {
  const [searchResults, setSearchResults] = React.useState<TMDBFilmDetails[]>(
    []
  );

  // get search value from url
  const params = useParams();
  const { searchValue } = params as { searchValue: string };

  // fetch search results
  useEffect(() => {
    (async () => {
      const data = await fetchFilmSearch(searchValue);
      setSearchResults(data.results);
    })();
  }, [searchValue]);

  // useEffect(() => {
  //   console.log("searchResults", searchResults);
  // }, [searchResults]);

  return (
    <section className="relative m-4 flex flex-col items-center gap-8">
      <FilmSearchHeader searchValue={searchValue} />
      <FilmSearchResultsList searchResults={searchResults} />
    </section>
  );
};

export default FilmSearch;
