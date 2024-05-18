"use client";
import React from "react";
import GeneralInput from "@/components/GeneralInput";
import { useParams } from "next/navigation";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
import Link from "next/link";

const FilmSearch = () => {
  const params = useParams();
  const { searchValue } = params;

  return (
    <section className="relative top-32 m-4 flex flex-col items-center gap-8">
      <div className="w-full mx-4 flex flex-col">
        <GeneralInput placeholder={"Search for a film"} />
      </div>
      <div className="flex flex-col w-full">
        <span className="karla">Results for...</span>
        <span className="outfit text-3xl">{searchValue}</span>
      </div>
      <div className="w-full">
        <button className="karla border border-[#184249] px-4 py-2 bg-[#001F24] rounded-md hover:bg-[#184249]">
          Show Archived
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
        <Link href={`/filmdetail`} className="hover:opacity-80">
          <MediumFilmPoster />
        </Link>
      </div>
    </section>
  );
};

export default FilmSearch;
