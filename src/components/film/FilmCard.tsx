import { TMDBFilmDetails } from "@/types/filmTypes";
import { FilmCardProps } from "@/types/propTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilmCard = ({
  posterPath,
  title,
  releaseDate,
  filmId,
}: FilmCardProps) => {
  return (
    <Link href={`/film/${filmId}`}>
      <div className="relative w-[390px] h-[224px] rounded-lg shadow-lg -z-10">
        <div className="bg-black w-full h-[20%] absolute bottom-0 blur-lg"></div>
        <div className="absolute bottom-5 left-5 flex items-end gap-4 outfit">
          <span className="text-2xl">{title}</span>
          <span className="text-lg">{releaseDate.split("-")[0]}</span>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
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
