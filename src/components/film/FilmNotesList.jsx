import React from "react";
import Link from "next/link";
import FilmNote from "./FilmNote";

const FilmNotesList = () => {
  return (
    <section className="flex flex-col gap-4">
      <FilmNote />
      <FilmNote />
      <FilmNote />
    </section>
  );
};

export default FilmNotesList;
