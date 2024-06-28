import React from "react";
import Image from "next/image";

const SmallFilmPoster = ({
  posterPath,
  title,
}: {
  posterPath: string;
  title: string;
}) => {
  return (
    <div className="flex justify-center max-w-[120px] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="film poster"
        width={120}
        height={160}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default SmallFilmPoster;
