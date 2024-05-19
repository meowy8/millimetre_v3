import React from "react";
import Image from "next/image";

const SmallFilmPoster = () => {
  return (
    <div className="flex justify-center w-[120px]">
      <Image
        src={"/images/filmDetailPoster.jpg"}
        alt="film poster"
        width={120}
        height={160}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default SmallFilmPoster;
