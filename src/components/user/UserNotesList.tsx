import React from "react";
import { FilmNotes } from "@/types/filmTypes";
import FilmNote from "../film/FilmNote";

const UserNotesList = ({ userNotes }: { userNotes: FilmNotes[] }) => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row flex-wrap lg:justify-end items-center">
      {userNotes && userNotes.length > 0 ? (
        userNotes.map((note) => {
          return <FilmNote key={note._id} note={note} />;
        })
      ) : (
        <span className="karla ml-2 w-full font-extralight text-sm">
          User has no notes
        </span>
      )}
    </section>
  );
};

export default UserNotesList;
