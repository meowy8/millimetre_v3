import { FilmDescriptionType } from "@/types/filmTypes";
import React from "react";

const FilmDescription = ({
  runtime,
  overview,
  title,
  release_date,
}: FilmDescriptionType) => {
  return (
    <div className="flex flex-col gap-2 my-8 lg:w-96">
      <h1 className="outfit text-3xl">{title}</h1>
      <div className="flex justify-between karla">
        <span>{release_date}</span>
        <span>{runtime}mins</span>
      </div>
      <hr />
      <p className="karla">{overview}</p>
    </div>
  );
};

export default FilmDescription;
