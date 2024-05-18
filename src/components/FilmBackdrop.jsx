import Image from "next/image";
import React from "react";

const FilmBackdrop = ({ backdropImage }) => {
  return (
    <div>
      <div className="bg-[#0B0618] w-[10%] h-full absolute -left-4 blur-md"></div>
      <div className="bg-[#0B0618] w-[10%] h-full absolute -right-4 blur-md"></div>
      <div className="bg-[#0B0618] w-full h-16 absolute -bottom-8 blur-md"></div>
      <Image
        src={backdropImage}
        alt="film backdrop"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default FilmBackdrop;
