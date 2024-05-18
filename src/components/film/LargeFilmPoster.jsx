import React from "react";
import Image from "next/image";

const LargeFilmPoster = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={"/images/filmDetailPoster.jpg"}
        alt="film poster"
        width={200}
        height={320}
        className="rounded-md border border-black"
      />
    </div>
  );
};

export default LargeFilmPoster;
