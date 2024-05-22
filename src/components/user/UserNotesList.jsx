import React from "react";
import FilmNote from "../film/FilmNote";

const UserNotesList = ({ userNotes }) => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row flex-wrap lg:justify-end items-center">
      {userNotes && userNotes.length > 0 ? (
        userNotes.map((note) => {
          return <FilmNote key={note._id} note={note} />;
        })
      ) : (
        <span className="karla ml-2">User has no notes</span>
      )}
    </section>
  );
};

export default UserNotesList;
