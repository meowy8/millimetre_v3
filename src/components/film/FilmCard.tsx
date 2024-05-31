import { FilmCardProps } from "@/types/propTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilmCard = ({
  backdropPath,
  title,
  releaseDate,
  filmId,
}: FilmCardProps) => {
  return (
    <Link
      href={`/film/${filmId}`}
      className="relative rounded-lg shadow-lg overflow-hidden"
    >
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 right-2 text-white outfit flex flex-col items-start gap-1 p-2 pointer-events-none">
        <span className="text-base sm:text-2xl font-bold line-clamp-1">
          {title}
        </span>
        <span className="text-sm sm:text-lg">{releaseDate.split("-")[0]}</span>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
        alt="film poster"
        layout="responsive"
        width={500}
        height={281}
        className="w-full h-full object-cover"
      />
    </Link>
  );
};

export default FilmCard;
