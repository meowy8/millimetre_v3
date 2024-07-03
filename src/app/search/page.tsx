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
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  // get search value from url
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("searchValue");

  useEffect(() => {
    console.log("page", page);
  }, [page]);

  // fetch search results
  useEffect(() => {
    if (!searchValue) return;

    (async () => {
      try {
        setLoading(true);
        setAIResults([]);
        setSearchResults([]);

        const data = await fetchFilmSearch(searchValue, page);
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchValue, page]);

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
    <section className="relative mx-10 mt-28 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-[1280px] gap-8">
        <FilmSearchHeader
          searchValue={searchValue || ""}
          handleAISearch={handleAISearch}
          aiResults={aiResults}
          setLoading={setLoading}
          setPage={setPage}
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
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {page > 1 && (
            <button
              disabled={page === 1}
              onClick={() => setPage((prevPage) => prevPage - 1)}
              className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-white"
            >
              Prev
            </button>
          )}
          {page < totalPages && (
            <button
              className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-white"
              onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default FilmSearch;
