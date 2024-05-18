import React from "react";
import Link from "next/link";
import FilmNote from "./FilmNote";

const FilmNotesList = () => {
  return (
    <section className="my-8">
      <div className="flex justify-end m-4">
        <Link href={"#"} className="karla font-bold text-lg">
          View All Notes
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <FilmNote />
        <FilmNote />
        <FilmNote />
      </div>
    </section>
  );
};

export default FilmNotesList;
