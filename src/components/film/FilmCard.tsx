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
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white outfit flex flex-col items-start gap-2">
        <span className="text-2xl font-light line-clamp-1">{title}</span>
        <span className="text-lg">{releaseDate.split("-")[0]}</span>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
        alt="film poster"
        layout="responsive"
        width={500}
        height={281}
        className="w-full h-full object-cover rounded-lg"
      />
    </Link>
  );
};

export default FilmCard;
