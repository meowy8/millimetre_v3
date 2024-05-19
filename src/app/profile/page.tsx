import FilmBackdrop from "@/components/film/FilmBackdrop";
import React from "react";
import LargeUserAvatar from "@/components/user/LargeUserAvatar";
import Link from "next/link";
import FilmNotesList from "@/components/film/FilmNotesList";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";

const Profile = () => {
  return (
    <section className="w-full">
      <FilmBackdrop backdropImage={"/images/filmDetailBackdrop.jpeg"} />
      <div className="relative bottom-24 m-6 flex flex-col items-center gap-4">
        <LargeUserAvatar />
        <span className="outfit text-xl font-bold">cadaverinbloom</span>
        <p className="karla text-center px-6 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="my-4 flex flex-col gap-2">
          <span className="karla font-semibold ml-2">Favourite Films</span>
          <div className="grid grid-cols-3 gap-4">
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <span className="karla font-semibold ml-2">Recently Watched</span>
          <div className="grid grid-cols-3 gap-4">
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
            <Link href={"/filmdetail"} className="hover:opacity-80">
              <SmallFilmPoster />
            </Link>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <span className="karla ml-2">
            Notes by{" "}
            <span className="outfit font-semibold">cadaverinbloom</span>
          </span>
          <FilmNotesList />
        </div>
      </div>
    </section>
  );
};

export default Profile;
