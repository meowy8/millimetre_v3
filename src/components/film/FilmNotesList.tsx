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
    <section className="flex flex-col items-center gap-4 z-10 max-w-[700px] w-full mt-10">
      {filmNotes && filmNotes.length > 0 ? (
        filmNotes.map((note) => {
          return <FilmNote key={note._id} note={note} />;
        })
      ) : (
        <span className="karla mt-10 text-center">
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
