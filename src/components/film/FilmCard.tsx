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
    <Link href={`/film/${filmId}`} className="relative rounded-lg shadow-lg">
      <div className="bg-black w-full h-[20%] absolute bottom-0 blur-lg"></div>
      <div className="absolute bottom-5 flex items-end gap-4 outfit mx-4">
        <span className="text-2xl line-clamp-1">{title}</span>
        <span className="text-lg">{releaseDate.split("-")[0]}</span>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
        alt="film poster"
        width={390}
        height={224}
        className="w-full h-full object-cover rounded-lg"
      />
    </Link>
  );
};

export default FilmCard;
