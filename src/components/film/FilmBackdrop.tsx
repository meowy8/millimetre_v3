import Image from "next/image";
import React from "react";

const FilmBackdrop = ({ backdropImage }: { backdropImage: string }) => {
  return (
    <div className="relative max-w-[1000px] -z-0 w-full">
      {/* <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -left-10 blur-md"></div>
      <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -right-5 lg:-right-10 blur-md"></div> */}
      <Image
        src={backdropImage}
        alt="film backdrop"
        width={1920}
        height={1080}
        priority={true}
        className="w-full h-full object-cover rounded-t-2xl rounded-b-[10%]"
      />
      <div className="absolute bottom-0 w-full h-24 md:h-56 bg-gradient-to-t from-[#0B0618] via-[#0b0618a5] to-transparent "></div>
      <div className="flex justify-center">
        {/* <div className="bg-[#0B0618] w-screen lg:w-[1000px] h-[30%] absolute top-[90%] blur-md"></div> */}
      </div>
    </div>
  );
};

export default FilmBackdrop;
