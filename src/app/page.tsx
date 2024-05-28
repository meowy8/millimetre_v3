"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import CreateAccountBtn from "@/components/buttons/CreateAccountBtn";
import HomeFilmDisplay from "@/components/film/HomeFilmDisplay";
import HomeInfoSection from "@/components/HomeInfoSection";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <section>
      <section className="relative top-0 left-0">
        <FilmBackdrop backdropImage={"/images/homePageBackdrop.jpeg"} />
        <div className="flex flex-col justify-between lg:flex-row lg:relative bottom-24">
          <div className="bg-[#0B0618]/30 h-[100px] bottom-56 md:bottom-64 absolute blur-lg lg:bottom-0"></div>
          <h1 className="oranienbaumRegular text-3xl relative lg:static bottom-24 md:bottom-44 md:left-10 mx-10 drop-shadow-lg w-96 lg:w-1/2 ">
            <span className="block">
              Welcome to <span className="text-5xl">millimetre</span>,
            </span>{" "}
            <span className="block">
              a place to share and expand your love of film.
            </span>
          </h1>
          {!session && (
            <section className="flex flex-col items-center gap-2 relative bottom-10 md:bottom-20 lg:bottom-0 md:right-10">
              <span className="oranienbaumRegular text-xl">
                Click here to create an account!
              </span>
              <CreateAccountBtn />
            </section>
          )}
        </div>
        <div className="flex justify-center">
          <span className="oranienbaumRegular text-xl text-center">
            {session
              ? "Discover something new!"
              : "or discover something new..."}
          </span>
        </div>
      </section>
      <HomeFilmDisplay />
      <section className="flex my-14 justify-center">
        <HomeInfoSection />
      </section>
    </section>
  );
}
