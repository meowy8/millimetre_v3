import Image from "next/image";
import React, { useEffect } from "react";
import ColorThief from "colorthief";

const FilmBackdrop = ({ backdropImage, blurredBackdrop }) => {
  const [dominantColor, setDominantColor] = React.useState < string > "";
  const imageRef = React.useRef < HTMLImageElement > null;

  function darkenColor(color, percent) {
    const [red, green, blue] = color;
    return [
      Math.round(red * (1 - percent)),
      Math.round(green * (1 - percent)),
      Math.round(blue * (1 - percent)),
    ];
  }

  const handleImageLoad = () => {
    const colorThief = new ColorThief();
    const color = colorThief.getColor(imageRef.current);
    const darkenedColor = darkenColor(color, 0.5);

    setDominantColor(`rgb(${darkenedColor})`);
  };

  useEffect(() => {
    if (!backdropImage) return;
    const currentImage = imageRef.current;

    if (imageRef.current && imageRef.current.complete) {
      handleImageLoad();
    } else {
      imageRef.current?.addEventListener("load", handleImageLoad);
    }

    // Clean up event listener on unmount
    return () => {
      if (currentImage) {
        // Check if image element still exists
        currentImage.removeEventListener("load", handleImageLoad);
      }
    };
  }, [backdropImage]);

  return (
    <div className="relative -z-0 w-full ">
      {/* <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -left-10 blur-md"></div>
      <div className="bg-[#0B0618] w-[10%] h-[750px] absolute bottom-0 -right-5 lg:-right-10 blur-md"></div> */}
      <div className="relative lg:max-w-[900px] md:max-w-[90%] w-full mx-auto">
        <Image
          ref={imageRef}
          id="filmBackdrop"
          src={backdropImage}
          alt="film backdrop"
          width={1920}
          height={1080}
          priority={true}
          className="w-full h-full object-cover rounded-xl mt-16"
          placeholder="blur"
          blurDataURL={blurredBackdrop || backdropImage}
        />
        {/* <div
          className="absolute bottom-0 w-full h-24 md:h-56 rounded-b-3xl opacity-100 transition-all duration-[2s] ease-in-out"
          style={{
            backgroundImage: `linear-gradient(0deg, ${dominantColor} 0%, rgba(0, 0, 0, 0) 100%)`,
          }}
        ></div> */}
        <div className="bg-gradient-to-t from-[#0B0618] to-transparent w-full h-1/3 absolute bottom-0 rounded-lg"></div>
      </div>
      <div
        className="opacity-0 translate-y-[-100%] md:opacity-100 md:translate-y-0 absolute top-0 w-full h-96 -z-10 transition-all duration-[2s] ease-in-out"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, ${dominantColor} 160%)`,
        }}
      >
        {/* <div className="absolute w-full h-[20%] bottom-0 -z-10 opacity-100 transition-all duration-[2s] ease-in-out bg-gradient-to-t from-[#0B0618] to-transparent"></div> */}
      </div>
    </div>
  );
};

export default FilmBackdrop;
