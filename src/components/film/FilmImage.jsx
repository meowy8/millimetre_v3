import React from "react";
import Image from "next/image";

const FilmImage = ({
  toggleImageModal,
  toggleModal,
  setModalImageData,
  image,
}) => {
  const handleClick = () => {
    toggleModal();
    toggleImageModal();
    setModalImageData({
      src: `https://image.tmdb.org/t/p/original${image.file_path}`,
      height: image.height,
      width: image.width,
    });
  };

  return (
    <button onClick={handleClick} className="w-[350px] h-[200px] flex-shrink-0">
      <Image
        src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
        alt="film backdrop"
        width={350}
        height={200}
        className="rounded-md object-cover w-full h-full"
        loading="lazy"
      />
    </button>
  );
};

export default FilmImage;
