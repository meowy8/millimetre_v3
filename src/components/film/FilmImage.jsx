import React from "react";
import Image from "next/image";

const FilmImage = () => {
  return (
    <div className="w-[350px] h-[200px] flex-shrink-0">
      <Image
        src="/images/filmDetailBackdrop.jpeg"
        alt="film images display"
        width={350}
        height={200}
        className="rounded-md object-cover w-full h-full"
      />
    </div>
  );
};

export default FilmImage;
