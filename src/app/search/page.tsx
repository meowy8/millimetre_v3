"use client";
import React, { Suspense, useEffect } from "react";
import FilmSearchHeader from "@/components/film/FilmSearchHeader";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import FilmSearchResultsList from "@/components/film/FilmSearchResultsList";
import { fetchFilmSearch } from "@/utils/dataFetching/filmData";
import { FilmSearchResults, TMDBFilmDetails } from "@/types/filmTypes";
import Loading from "@/components/Loading";

const FilmSearch = () => {
  const [searchResults, setSearchResults] = React.useState<TMDBFilmDetails[]>(
    []
  );
  const [aiResults, setAIResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // get search value from url
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("searchValue");

  // fetch search results
  useEffect(() => {
    if (!searchValue) return;

    (async () => {
      try {
        setLoading(true);
        setAIResults([]);
        setSearchResults([]);

        const data = await fetchFilmSearch(searchValue);
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchValue]);

  const handleAISearch = async (results: any) => {
    setLoading(true);
    setSearchResults([]);
    setAIResults(results);
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log("searchResults", searchResults);
  // }, [searchResults]);

  return (
    <section className="relative m-4 mt-24 flex justify-center">
      <div>
        <FilmSearchHeader
          searchValue={searchValue || ""}
          handleAISearch={handleAISearch}
          aiResults={aiResults}
          setLoading={setLoading}
        />
        {loading ? (
          <Loading />
        ) : (
          <FilmSearchResultsList
            searchResults={searchResults}
            aiResults={aiResults}
            loading={loading}
          />
        )}
      </div>
    </section>
  );
};

export default FilmSearch;
