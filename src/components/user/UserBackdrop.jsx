import Image from "next/image";
import React, { useEffect } from "react";
import ColorThief from "colorthief";

const UserBackdrop = ({ userBackdrop }) => {
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
    <div className="-z-0 rounded-xl overflow-hidden max-w-[900px] w-full">
      <Image
        ref={imageRef}
        src={userBackdrop}
        alt="user backdrop"
        width={700}
        height={700}
        priority
        className="object-cover w-full h-full"
        onLoad={handleImageLoad}
      />
      <div
        className="opacity-0 translate-y-[-100%] md:opacity-100 md:translate-y-0 absolute top-0 w-full h-96 -z-10 transition-all duration-[2s] ease-in-out left-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, ${dominantColor} 160%)`,
        }}
      ></div>
    </div>
  );
};

export default UserBackdrop;
