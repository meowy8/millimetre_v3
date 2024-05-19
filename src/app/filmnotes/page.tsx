import FilmNotesList from "@/components/film/FilmNotesList";
import GeneralBtn from "@/components/buttons/GeneralBtn";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";
import React from "react";
import Link from "next/link";

const FilmNotes = () => {
  return (
    <section className="m-4 mt-20 flex flex-col gap-8">
      <div className="flex justify-between">
        <p className="flex flex-col gap-2">
          <span className="karla">Notes for </span>
          <span className="outfit text-3xl">Millennium Mambo</span>
        </p>
        <Link href={"/filmdetail"} className="hover:opacity-80">
          <SmallFilmPoster />
        </Link>
      </div>
      <div className="flex gap-4">
        <GeneralBtn text={"Best"} />
        <GeneralBtn text={"Recent"} />
      </div>
      <div>
        <FilmNotesList />
      </div>
    </section>
  );
};

export default FilmNotes;
