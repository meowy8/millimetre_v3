import Image from "next/image";
import React, { useEffect } from "react";
import ColorThief from "colorthief";

const FilmBackdrop = ({ backdropImage }: { backdropImage: string }) => {
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");

  useEffect(() => {
    const img = document.getElementById("filmBackdrop");
    if (!img || !backdropImage) return;

    const colorThief = new ColorThief();
    const color = colorThief.getColor(img);

    setBackgroundColor(`rgb(${color})`);
  }, [backdropImage]);

  return (
    <div className="relative -z-0 w-full">
      {/* <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -left-10 blur-md"></div>
      <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -right-5 lg:-right-10 blur-md"></div> */}
      <Image
        id="filmBackdrop"
        src={backdropImage}
        alt="film backdrop"
        width={1920}
        height={1080}
        priority={true}
        className="w-full h-full object-cover rounded-3xl max-w-[900px] mx-auto mt-10"
      />
      {/* <div
        className="absolute bottom-0 w-full h-24 md:h-56 "
        style={{
          backgroundImage: `linear-gradient(0deg, ${backgroundColor} 0%, rgba(0, 0, 0, 0) 100%)`,
        }}
      ></div> */}
      <div className="flex justify-center">
        {/* <div className="bg-[#0B0618] w-screen lg:w-[1000px] h-[30%] absolute top-[90%] blur-md"></div> */}
      </div>
      <div
        className="absolute top-0 w-full h-screen -z-10 blur-3xl opacity-10 scale-150 transition-all duration-[2s] ease-in-out"
        style={{ backgroundColor }}
      ></div>
    </div>
  );
};

export default FilmBackdrop;
