import React from "react";
import Image from "next/image";

const MediumFilmPoster = () => {
  return (
    <div className="flex justify-center w-[150px]">
      <Image
        src={"/images/filmDetailPoster.jpg"}
        alt="film poster"
        width={150}
        height={200}
        className="rounded-md border border-black object-cover w-full h-full"
      />
    </div>
  );
};

export default MediumFilmPoster;
