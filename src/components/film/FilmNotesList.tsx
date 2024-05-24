import React from "react";
import FilmNote from "./FilmNote";
import { FilmNotesListProps } from "@/types/propTypes";

const FilmNotesList = ({
  filmNotes,
  toggleModal,
  toggleNotesModal,
}: FilmNotesListProps) => {
  const handleClick = () => {
    toggleNotesModal();
    toggleModal();
  };

  return (
    <section className="flex flex-col gap-4 lg:flex-row flex-wrap">
      {filmNotes && filmNotes.length > 0 ? (
        filmNotes.map((note) => {
          return <FilmNote key={note._id} note={note} />;
        })
      ) : (
        <span className="karla ml-2">
          There are no notes for this film.{" "}
          <button onClick={handleClick} className="underline">
            Be the first to add a note
          </button>
        </span>
      )}
    </section>
  );
};

export default FilmNotesList;
