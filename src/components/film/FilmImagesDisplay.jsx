import FilmImage from "./FilmImage";
import React from "react";

const FilmImagesDisplay = ({
  toggleImageModal,
  toggleModal,
  setModalImageData,
  images,
}) => {
  return (
    <div className="flex gap-4 mx-4 overflow-x-auto whitespace-nowrap">
      {images &&
        images.map((image) => (
          <FilmImage
            key={image.file_path}
            toggleImageModal={toggleImageModal}
            toggleModal={toggleModal}
            setModalImageData={setModalImageData}
            image={image}
          />
        ))}
    </div>
  );
};

export default FilmImagesDisplay;
