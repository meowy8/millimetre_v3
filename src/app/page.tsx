"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import CreateAccountBtn from "@/components/buttons/CreateAccountBtn";
import HomeFilmDisplay from "@/components/film/HomeFilmDisplay";
import HomeInfoSection from "@/components/HomeInfoSection";
import { useSession } from "next-auth/react";
import { Suspense, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const { data: session } = useSession();

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

  return (
    <section>
      <section className="flex flex-col items-center">
        <FilmBackdrop
          blurredBackdrop={"/images/homePageBackdrop.jpeg"}
          backdropImage={"/images/homePageBackdrop.jpeg"}
        />
        <div className="flex flex-col justify-between items-center lg:flex-row relative bottom-10 lg:bottom-24 w-full max-w-[800px] mx-auto mt-10">
          <h1 className="oranienbaumRegular mx-4 text-2xl lg:static bottom-24 drop-shadow-lg lg:w-1/2 ">
            <span className="block">
              Welcome to <span className="text-5xl">millimetre</span>,
            </span>{" "}
            <span className="block">
              a place to share and expand your love of film.
            </span>
          </h1>
          {!session && (
            <section className="flex flex-col items-center gap-2 md:right-10 mt-10">
              <span className="oranienbaumRegular text-xl">
                Click here to create an account!
              </span>
              <CreateAccountBtn />
            </section>
          )}
        </div>
        <div className="relative flex justify-center z-10 mt-8 lg:mt-0">
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
