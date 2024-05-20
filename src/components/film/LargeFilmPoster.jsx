import React from "react";
import Image from "next/image";

const LargeFilmPoster = ({ poster_path }) => {
  return (
    <div className="flex justify-center w-[250px] h-[360px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="film poster"
        width={200}
        height={320}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default LargeFilmPoster;
