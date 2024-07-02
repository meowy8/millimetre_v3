import React from "react";
import Image from "next/image";

const MediumFilmPoster = ({
  posterPath,
  title,
}: {
  posterPath: string;
  title: string;
}) => {
  return (
    <div className="flex justify-center w-full h-full max-w-[150px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={`${title} poster`}
        width={150}
        height={200}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default MediumFilmPoster;
