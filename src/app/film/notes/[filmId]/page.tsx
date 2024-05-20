"use client";
import FilmNotesList from "@/components/film/FilmNotesList";
import GeneralBtn from "@/components/buttons/GeneralBtn";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";
import React, { useEffect } from "react";
import Link from "next/link";
import { FilmDetails } from "@/types/filmTypes";
import { fetchFilmDetails } from "@/utils/fetchFilmData";
import { useParams } from "next/navigation";

const FilmNotes = () => {
  const [filmData, setFilmData] = React.useState({} as FilmDetails);
  const params = useParams();
  const { filmId } = params;
  useEffect(() => {
    setFilmData({} as FilmDetails);
    (async () => setFilmData(await fetchFilmDetails(filmId as string)))();
  }, [filmId]);

  return (
    <section className="m-4 mt-20 flex flex-col gap-8">
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
      <div className="flex gap-4">
        <div>
          <GeneralBtn text={"Best"} />
        </div>
        <div>
          <GeneralBtn text={"Recent"} />
        </div>
      </div>
      <div>
        <FilmNotesList />
      </div>
    </section>
  );
};

export default FilmNotes;
