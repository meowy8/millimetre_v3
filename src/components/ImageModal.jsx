import Image from "next/image";
import React from "react";

const ImageModal = ({ toggleModal, toggleImageModal, modalImageData }) => {
  const handleClick = () => {
    toggleImageModal();
    toggleModal();
  };

  return (
    <div className="w-[1000px] h-[600px]">
      <Image
        src={modalImageData.src}
        alt="film images display"
        width={modalImageData.width}
        height={modalImageData.height}
        className="rounded-md object-cover cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageModal;
