"use client";
import FilmNotesList from "@/components/film/FilmNotesList";
import GeneralBtn from "@/components/buttons/GeneralBtn";
import FilmNoteHeader from "@/components/film/FilmNoteHeader";
import React, { useEffect } from "react";
import { FilmDetails } from "@/types/filmTypes";
import { fetchFilmDetails } from "@/utils/fetchFilmData";
import { useParams } from "next/navigation";

const FilmNotes = () => {
  const [filmData, setFilmData] = React.useState({} as FilmDetails);
  const [filmNotes, setFilmNotes] = React.useState([]);

  const params = useParams();
  const { filmId } = params;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `/api/v1/notes/filmNotes?filmId=${filmId}`
        );
        const data = await response.json();
        // console.log(data);

        if (data.message === "Success") {
          setFilmNotes(data.result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, [filmId]);

  useEffect(() => {
    setFilmData({} as FilmDetails);
    (async () => setFilmData(await fetchFilmDetails(filmId as string)))();
  }, [filmId]);

  return (
    <section className="m-4 flex flex-col gap-8">
      <FilmNoteHeader filmData={filmData} filmId={filmId} />
      <div className="flex gap-4">
        <div>
          <GeneralBtn text={"Best"} />
        </div>
        <div>
          <GeneralBtn text={"Recent"} />
        </div>
      </div>
      <div>
        <FilmNotesList filmNotes={filmNotes} />
      </div>
    </section>
  );
};

export default FilmNotes;
