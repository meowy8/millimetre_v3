import React from "react";
import Link from "next/link";
import SmallFilmPoster from "../film/SmallFilmPoster";

const FilmNoteHeader = ({ filmData, filmId }) => {
  return (
    <div className="flex justify-between">
      <p className="flex flex-col gap-2">
        <span className="karla">Notes for </span>
        <span className="outfit text-3xl">{filmData.title}</span>
      </p>
      {filmData.poster_path && (
        <Link href={`/film/${filmId}`} className="hover:opacity-80">
          <SmallFilmPoster poster_path={filmData.poster_path} />
        </Link>
      )}
    </div>
  );
};

export default FilmNoteHeader;
