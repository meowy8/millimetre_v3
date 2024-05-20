import React from "react";
import Image from "next/image";

const SmallFilmPoster = ({ poster_path }) => {
  return (
    <div className="flex justify-center w-[120px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="film poster"
        width={120}
        height={160}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default SmallFilmPoster;
