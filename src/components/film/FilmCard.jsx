import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilmCard = ({ poster_path, title, release_date, filmId }) => {
  return (
    <Link href={`/film/${filmId}`} className="hover:bg-black/20">
      <div className="relative w-[390px] h-[224px] rounded-lg shadow-lg -z-10 hover:opacity-90">
        <div className="bg-black w-full h-[20%] absolute bottom-0 blur-lg"></div>
        <div className="absolute bottom-5 left-5 flex items-end gap-4 outfit">
          <span className="text-2xl">{title}</span>
          <span className="text-lg">{release_date.split("-")[0]}</span>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="film poster"
          width={390}
          height={224}
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  );
};

export default FilmCard;
