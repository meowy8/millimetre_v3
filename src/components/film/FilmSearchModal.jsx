"use client";
import { useState } from "react";
import React from "react";
import { fetchFilmSearch } from "@/utils/fetchFilmData";

const FilmSearchModal = ({ setShowModal, addNewFavFilm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [chosenFilm, setChosenFilm] = useState({});

  const fetchFilmTitles = async (searchTerm) => {
    const data = await fetchFilmSearch(searchTerm);
    setSearchResults(data);
    console.log("searchResults", searchResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setShowModal(true);
    fetchFilmTitles(searchTerm);
  };

  // const handleClick = () => {
  //   await setChosenFilm(searchResults.results[0]);
  //   console.log("chosenFilm", chosenFilm);
  //   addNewFavFilm(chosenFilm);
  //   setShowModal(false);
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#001F24] border border-[#184249] w-[500px] max-h-[300px] flex flex-col rounded-lg p-4 overflow-hidden"
    >
      <div className="flex w-full justify-end">
        <button
          className="text-white text-3xl"
          onClick={() => setShowModal(false)}
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
          searchResults.results?.length > 0 &&
          searchResults.results.map((film) => (
            <button
              key={film.id}
              onClick={() => handleClick(film.id)}
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
