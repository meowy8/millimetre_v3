import Image from "next/image";
import React, { useEffect } from "react";
import ColorThief from "colorthief";

const FilmBackdrop = ({ backdropImage, blurredBackdrop }) => {
  const [dominantColor, setDominantColor] = React.useState("");
  const imageRef = React.useRef(null);

  function darkenColor(color, percent) {
    const [red, green, blue] = color;
    return [
      Math.round(red * (1 - percent)),
      Math.round(green * (1 - percent)),
      Math.round(blue * (1 - percent)),
    ];
  }

  const handleImageLoad = () => {
    if (!imageRef.current) return;

    try {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(imageRef.current);

      if (color) {
        const darkenedColor = darkenColor(color, 0.5);
        setDominantColor(`rgb(${darkenedColor.join(",")})`);
      } else {
        setDominantColor("#0B0618");
      }
    } catch (error) {
      console.error("Error getting dominant color:", error);
      setDominantColor("#0B0618");
    }
  };

  // useEffect(() => {
  //   const currentImage = imageRef.current;

  //   // Clean up event listener on unmount
  //   return () => {
  //     currentImage?.removeEventListener("load", handleImageLoad);
  //   };
  // }, []);

  return (
    <div className="relative -z-0 w-full ">
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
          onLoad={handleImageLoad}
        />
        <div className="bg-gradient-to-t from-[#0B0618] to-transparent w-full h-1/3 absolute bottom-0 rounded-lg"></div>
      </div>
      <div
        className="opacity-0 translate-y-[-100%] md:opacity-100 md:translate-y-0 absolute top-0 w-full h-96 -z-10 transition-all duration-[2s] ease-in-out"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, ${dominantColor} 160%)`,
        }}
      ></div>
    </div>
  );
};

export default FilmBackdrop;
