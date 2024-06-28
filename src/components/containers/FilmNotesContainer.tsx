import Link from "next/link";
import React from "react";
import FilmNotesList from "../film/FilmNotesList";
import { FilmNotes } from "@/types/filmTypes";

const FilmNotesContainer = ({
  filmNotes,
  toggleModal,
  toggleNotesModal,
  filmId,
}: {
  filmNotes: FilmNotes[];
  toggleModal: () => void;
  toggleNotesModal: () => void;
  filmId: number;
}) => {
  const handleClick = () => {
    toggleNotesModal();
    toggleModal();
  };

  return (
    <div className="flex flex-col gap-8 my-20 lg:my-14 w-full max-w-[1000px] z-10">
      <div className="flex justify-end mx-10 gap-10 items-center">
        <button
          onClick={handleClick}
          className="karla border border-[#184249] bg-[#001F24] rounded-md hover:bg-[#184249] px-4 py-2"
        >
          + Add a new note
        </button>
        {true && (
          <Link
            href={`/film/notes/${filmId}`}
            className="karla font-bold text-lg hover:underline"
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
