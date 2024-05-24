"use client";
import React, { useEffect } from "react";
import FilmSearchHeader from "@/components/film/FilmSearchHeader";
import { useParams } from "next/navigation";
import FilmSearchResultsList from "@/components/film/FilmSearchResultsList";
import { fetchFilmSearch } from "@/utils/filmData";
import { FilmSearchResults } from "@/types/filmTypes";

const FilmSearch = () => {
  const [searchResults, setSearchResults] = React.useState(
    {} as FilmSearchResults
  );

  // get search value from url
  const params = useParams();
  const { searchValue } = params as { searchValue: string };

  // fetch search results
  useEffect(() => {
    (async () =>
      setSearchResults(await fetchFilmSearch(searchValue as string)))();
  }, [searchValue]);

  return (
    <section className="relative m-4 flex flex-col items-center gap-8">
      <FilmSearchHeader searchValue={searchValue} />
      <FilmSearchResultsList searchResults={searchResults} />
    </section>
  );
};

export default FilmSearch;
