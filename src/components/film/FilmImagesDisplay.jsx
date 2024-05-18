import FilmImage from "./FilmImage";
import React from "react";

const FilmImagesDisplay = () => {
  return (
    <div className="flex gap-4 mx-4">
      <FilmImage />
      <FilmImage />
      <FilmImage />
      <FilmImage />
    </div>
  );
};

export default FilmImagesDisplay;
