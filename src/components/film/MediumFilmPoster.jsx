import React from "react";
import Image from "next/image";

const MediumFilmPoster = ({ posterPath, title }) => {
  return (
    <div className="flex justify-center w-[150px] h-[200px]">
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
