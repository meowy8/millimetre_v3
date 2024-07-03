"use client";
import React, { useEffect } from "react";
import FilmCard from "./FilmCard";
import { fetchFilmsByPopularityRange } from "@/utils/dataFetching/filmData";
import { TMDBFilmDetails } from "@/types/filmTypes";
import Loading from "../Loading";

const HomeFilmDisplay = () => {
  const [displayedFilms, setDisplayedFilms] = React.useState([]);

  // fetch films by popularity range
  useEffect(() => {
    setDisplayedFilms([]);
    fetchFilmsByPopularityRange(100, 200).then((films) => {
      setDisplayedFilms(films);
    });
  }, []);

  return (
    <section className="relative flex flex-wrap max-w-[1000px] mx-auto justify-center mt-8 gap-4 z-10">
      {displayedFilms?.length > 0 ? (
        displayedFilms.map((film: TMDBFilmDetails) => (
          <div
            key={film.id}
            className="rounded-lg overflow-hidden hover:opacity-80 w-[390px] h-[224px] cursor-pointer"
          >
            <FilmCard
              filmId={film.id}
              backdropPath={film.backdrop_path}
              title={film.title}
              releaseDate={film.release_date}
            />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default HomeFilmDisplay;
