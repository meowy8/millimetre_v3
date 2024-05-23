import Link from "next/link";
import React from "react";
import FilmNotesList from "../film/FilmNotesList";

const FilmNotesContainer = ({
  filmNotes,
  toggleModal,
  toggleNotesModal,
  filmId,
}) => {
  return (
    <div className="flex flex-col gap-2 my-8 w-full">
      <div className="flex justify-end">
        {filmNotes.length > 0 && (
          <Link
            href={`/film/notes/${filmId}`}
            className="karla font-bold text-lg"
          >
            View All Notes
          </Link>
        )}
      </div>
      <div className="flex justify-center w-full">
        <FilmNotesList
          filmNotes={filmNotes}
          toggleNotesModal={toggleNotesModal}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default FilmNotesContainer;
