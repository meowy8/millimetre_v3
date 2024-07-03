import React from "react";
import { FilmNotes } from "@/types/filmTypes";
import FilmNote from "../film/FilmNote";

const UserNotesList = ({ userNotes }: { userNotes: FilmNotes[] }) => {
  return (
    <section className="flex flex-col gap-4 justify-center h-full w-full">
      {userNotes && userNotes.length > 0 ? (
        <FilmNote note={userNotes[0]} />
      ) : (
        <div className="w-full flex justify-center">
          <span className="karla ml-2 font-extralight text-sm">
            User has no notes
          </span>
        </div>
      )}
    </section>
  );
};

export default UserNotesList;
