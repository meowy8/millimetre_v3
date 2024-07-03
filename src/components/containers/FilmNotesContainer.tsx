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
    <div className="flex flex-col my-20 mx-4 lg:my-14 w-full max-w-[900px] z-10">
      <div className="flex justify-end gap-4 items-center m-2">
        <button
          onClick={handleClick}
          className="karla border border-[#184249] bg-[#001F24] rounded-md hover:bg-[#184249] px-4 py-2 text-sm"
        >
          +
        </button>
        {true && (
          <Link
            href={`/film/notes/${filmId}`}
            className="karla bg-[#001F24] rounded-md hover:bg-[#184249] px-4 py-2 border border-[#184249] text-sm"
          >
            View All Notes
          </Link>
        )}
      </div>
      <hr className="w-full opacity-50 mt-1 mb-4" />
      <div className="flex justify-center w-full ">
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
