"use client";
import FullFilmNote from "@/components/film/FullFilmNote";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchUserNoteData } from "@/utils/noteData";
import { FilmNotes } from "@/types/filmTypes";

const Note = () => {
  const [noteData, setNoteData] = React.useState({} as FilmNotes);

  const params = useParams();
  const { username, noteId } = params;

  const router = useRouter();

  // fetch single note with id
  useEffect(() => {
    (async () => {
      const data = await fetchUserNoteData(username, noteId, null);

      if (!data) {
        return router.push("/not-found");
      }

      setNoteData(data);
    })();
  }, [username, noteId, router]);

  useEffect(() => {
    console.log("noteData", noteData);
  }, [noteData]);

  return (
    <section className="m-4">
      <FullFilmNote noteData={noteData} />
    </section>
  );
};

export default Note;
