import FilmBackdrop from "@/components/film/FilmBackdrop";
import React from "react";
import LargeUserAvatar from "@/components/user/LargeUserAvatar";
import Link from "next/link";
import FilmNotesList from "@/components/film/FilmNotesList";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";
import EmptyFilmPoster from "@/components/film/EmptyFilmPoster";

const Profile = () => {
  return (
    <section className="w-full">
      <FilmBackdrop backdropImage={"/images/filmDetailBackdrop.jpeg"} />
      <div className="relative bottom-24 m-6 flex flex-col justify-between items-center gap-4 lg:bottom-44 lg:flex-row">
        <div className="flex flex-col items-center gap-4 lg:items-start w-full">
          <LargeUserAvatar />
          <span className="outfit text-xl font-bold">cadaverinbloom</span>
          <p className="karla text-center px-6 mb-4 lg:text-left lg:p-0 max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="my-4 flex flex-col gap-2">
            <span className="karla font-semibold ml-2">Favourite Films</span>
            <div className="grid grid-cols-3 gap-4">
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
            </div>
          </div>
          <div className="my-4 flex flex-col gap-2 lg:my-0">
            <span className="karla font-semibold ml-2">Recently Watched</span>
            <div className="grid grid-cols-3 gap-4">
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <EmptyFilmPoster />
              </Link>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-2 lg:mt-44 w-full">
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
