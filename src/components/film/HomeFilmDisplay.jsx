"use client";
import React, { useEffect } from "react";
import FilmCard from "./FilmCard";
import { fetchFilmsByPopularityRange } from "@/utils/fetchFilmData";

const HomeFilmDisplay = () => {
  const [displayedFilms, setDisplayedFilms] = React.useState([]);

  useEffect(() => {
    setDisplayedFilms([]);
    fetchFilmsByPopularityRange(100, 200).then((films) => {
      setDisplayedFilms(films);
    });
  }, []);

  return (
    <section className="flex flex-wrap max-w-[1000px] mx-auto justify-center mt-8 gap-4">
      {displayedFilms &&
        displayedFilms.map((film) => (
          <div key={film.id} className="rounded-lg overflow-hidden">
            <FilmCard
              filmId={film.id}
              poster_path={film.poster_path}
              title={film.title}
              release_date={film.release_date}
            />
          </div>
        ))}
    </section>
  );
};

export default HomeFilmDisplay;
