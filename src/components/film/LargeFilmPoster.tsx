import React from "react";
import Image from "next/image";

const LargeFilmPoster = ({ posterPath }: { posterPath: string }) => {
  return (
    <div className="flex justify-center w-[200px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="film poster"
        width={200}
        height={320}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default LargeFilmPoster;
