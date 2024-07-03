import React from "react";
import Link from "next/link";
import SmallFilmPoster from "./SmallFilmPoster";
import { TMDBFilmDetails } from "@/types/filmTypes";
import MediumFilmPoster from "./MediumFilmPoster";

const FilmNoteHeader = ({
  filmData,
  filmId,
}: {
  filmData: TMDBFilmDetails;
  filmId: number;
}) => {
  return (
    <div className="flex justify-between">
      <p className="flex flex-col gap-2">
        <span className="karla">Notes for </span>
        <Link href={`/film/${filmId}`} className="outfit text-3xl">
          {filmData.title}
        </Link>
      </p>
      {filmData.poster_path && (
        <Link href={`/film/${filmId}`} className="hover:opacity-80">
          <MediumFilmPoster
            posterPath={filmData.poster_path}
            title={filmData.title}
          />
        </Link>
      )}
    </div>
  );
};

export default FilmNoteHeader;
