import FilmBackdrop from "@/components/FilmBackdrop";
import CreateAccountButton from "@/components/CreateAccount";
import FilmCard from "@/components/FilmCard";
import HomeInfoSection from "@/components/HomeInfoSection";

export default function Home() {
  return (
    <section>
      <section className="relative top-0 left-0 z-[-1]">
        <FilmBackdrop backdropImage={"/images/homePageBackdrop.jpg"} />
        <h1 className="oranienbaumRegular text-3xl absolute -bottom-14 mx-10">
          <span className="block">
            Welcome to <span className="text-5xl">millimetre</span>,
          </span>{" "}
          <span className="block">
            a place to share and expand your love of film.
          </span>
        </h1>
      </section>
      <section className="flex flex-col items-center mt-32 gap-14">
        <CreateAccountButton />
        <span className="oranienbaumRegular text-xl text-center">
          or discover something new...
        </span>
      </section>
      <section className="flex flex-col items-center mt-8 gap-4">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </section>
      <section className="flex my-14">
        <HomeInfoSection />
      </section>
    </section>
  );
}
