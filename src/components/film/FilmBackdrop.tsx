import Image from "next/image";
import React from "react";

const FilmBackdrop = ({ backdropImage }: { backdropImage: string }) => {
  return (
    <div className="relative max-w-[1000px] mx-auto -z-10">
      <div className="bg-[#0B0618] w-[10%] h-[700px] absolute bottom-0 -left-10 blur-lg"></div>
      <div className="bg-[#0B0618] w-[10%] h-[700px] absolute bottom-0 -right-10 blur-lg"></div>
      <Image
        src={backdropImage}
        alt="film backdrop"
        width={1920}
        height={1080}
        priority
      />
      <div className="flex w-full justify-center">
        <div className="bg-[#0B0618] w-screen lg:w-[1000px] h-[20%] absolute -bottom-10 blur-lg"></div>
      </div>
    </div>
  );
};

export default FilmBackdrop;
