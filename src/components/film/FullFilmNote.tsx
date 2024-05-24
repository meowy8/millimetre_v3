import React from "react";
import MediumUserAvatar from "../user/MediumUserAvatar";
import FilmBackdrop from "./FilmBackdrop";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import EmptyFilmPoster from "./EmptyFilmPoster";
import { FilmNotes } from "@/types/filmTypes";

const FullFilmNote = ({ noteData }: { noteData: FilmNotes }) => {
  return (
    <div className="relative max-w-[1000px] mx-auto karla flex flex-col gap-4">
      <div className="relative -top-24 md:-top-44">
        {noteData.backdropPath && (
          <FilmBackdrop
            backdropImage={`https://image.tmdb.org/t/p/original${noteData.backdropPath}`}
          />
        )}
      </div>
      <div className="relative bottom-44 md:bottom-64 lg:bottom-80 flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
            <Link href={`/user/profile/${noteData.username}`}>
              <MediumUserAvatar />
            </Link>
            <span>
              Note by{" "}
              <Link
                href={"/user/profile/cadaverinbloom"}
                className="font-bold text-lg"
              >
                {noteData.username}
              </Link>{" "}
              for{" "}
              <Link
                href={`/film/${noteData.filmId}`}
                className="outfit text-2xl"
              >
                {noteData.title}
              </Link>
            </span>
          </div>
          <hr />
          <p className="mt-4 text-lg">{noteData.content}</p>
        </div>
        <div className="hidden md:block">
          <Link href={`/film/${noteData.filmId}`}>
            {noteData.posterPath ? (
              <MediumFilmPoster
                posterPath={noteData.posterPath}
                title={noteData.title}
              />
            ) : (
              <EmptyFilmPoster />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullFilmNote;
