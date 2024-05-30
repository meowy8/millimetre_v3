"use client";
import { useState } from "react";
import React from "react";
import { fetchFilmSearch } from "@/utils/dataFetching/filmData";
import { TMDBFilmDetails } from "@/types/filmTypes";
import { FavouriteFilms } from "@/types/userTypes";

const FilmSearchModal = ({
  addNewFavFilm,
  closeModal,
  favFilms,
}: {
  addNewFavFilm: (film: TMDBFilmDetails) => void;
  favFilms: FavouriteFilms[];
  closeModal: () => void;
}) => {
  const [searchResults, setSearchResults] = useState([] as TMDBFilmDetails[]);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch search results
  const fetchFilmTitles = async (searchTerm: string) => {
    const data = await fetchFilmSearch(searchTerm);
    setSearchResults(data.results);
    // console.log("searchResults", searchResults);
  };

  // submit search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    fetchFilmTitles(searchTerm);
  };

  // add film to favourites
  const handleClick = (film: TMDBFilmDetails) => {
    setSearchTerm("");
    addNewFavFilm(film as TMDBFilmDetails);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#001F24] border border-[#184249] w-[500px] max-h-[300px] flex flex-col rounded-lg p-4 overflow-hidden"
    >
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="text-white text-3xl"
          onClick={closeModal}
        >
          x
        </button>
      </div>
      <div>
        <input
          type="text"
          className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          value={searchTerm}
        />
      </div>
      <div className="overflow-scroll overflow-x-auto">
        {searchResults &&
          searchResults.length > 0 &&
          searchResults.map((film: TMDBFilmDetails) => (
            <button
              key={film.id}
              type="button"
              onClick={() => handleClick(film as TMDBFilmDetails)}
              className="flex w-full justify-between gap-4 hover:bg-white/10 p-2 rounded-lg"
            >
              <span className="text-start">{film.title}</span>
              <span>{film.release_date.split("-")[0]}</span>
            </button>
          ))}
      </div>
    </form>
  );
};

export default FilmSearchModal;
