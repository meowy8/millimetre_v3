import React from "react";
import MediumUserAvatar from "../user/MediumUserAvatar";
import FilmBackdrop from "./FilmBackdrop";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import EmptyFilmPoster from "./EmptyFilmPoster";

const FullFilmNote = () => {
  return (
    <div className="relative max-w-[1000px] mx-auto karla flex flex-col gap-4">
      <div className="relative -top-24 md:-top-44">
        <FilmBackdrop backdropImage="/images/homePageBackdrop.jpeg" />
      </div>
      <div className="relative bottom-44 md:bottom-64 lg:bottom-80 flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
            <Link href={"/user/profile"}>
              <MediumUserAvatar />
            </Link>
            <span>
              Note by{" "}
              <Link href={"/user/profile"} className="font-bold text-lg">
                cadaverinbloom
              </Link>{" "}
              for{" "}
              <Link href={"#"} className="outfit text-2xl">
                Millennium Mambo
              </Link>
            </span>
          </div>
          <hr />
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam.
          </p>
        </div>
        <div className="hidden md:block">
          <Link href={"#"}>
            <EmptyFilmPoster />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullFilmNote;
