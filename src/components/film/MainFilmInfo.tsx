import React from "react";
import LargeFilmPoster from "./LargeFilmPoster";
import FilmDescription from "./FilmDescription";
import WatchedButton from "@/components/buttons/WatchedButton";
import AddToWatchlistBtn from "@/components/buttons/AddToWatchlistBtn";
import FilmProductionDetails from "./FilmProductionDetails";
import { Credits, FilmCredits, TMDBFilmDetails } from "@/types/filmTypes";
import EmptyFilmPoster from "./EmptyFilmPoster";
import CreditsList from "./CreditsList";
import LargeEmptyFilmPoster from "./LargeEmptyFilmPoster";

const MainFilmInfo = ({
  filmDetails,
  filmCredits,
  closeModal,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlistButton,
  watchedButton,
}: {
  filmDetails: TMDBFilmDetails;
  filmCredits: FilmCredits;
  closeModal: () => void;
  handleAddToWatchlist: () => void;
  handleRemoveFromWatchlist: () => void;
  watchlistButton: boolean;
  watchedButton: boolean;
}) => {
  return (
    <section className="m-6 max-w-[900px]">
      <div className="relative z-10 flex flex-col lg:flex-row lg:gap-20">
        <div className="lg:flex-row flex flex-col items-center lg:items-start lg:gap-10">
          {filmDetails.poster_path ? (
            <LargeFilmPoster posterPath={filmDetails.poster_path} />
          ) : (
            <LargeEmptyFilmPoster />
          )}
          <FilmDescription
            title={filmDetails.title}
            overview={filmDetails.overview}
            release_date={filmDetails.release_date}
            runtime={filmDetails.runtime}
          />
        </div>
        <div className="lg:flex flex-col w-full lg:w-auto">
          <div className="flex justify-between my-8 lg:gap-4">
            <WatchedButton
              closeModal={closeModal}
              watchedButton={watchedButton}
            />
            <AddToWatchlistBtn
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlistButton={watchlistButton}
            />
          </div>
          {/* <div className="flex flex-col gap-4">
          <FilmProductionDetails
            sectionName="Cast"
            credits={filmCredits.cast}
          />
          <FilmProductionDetails
            sectionName="Crew"
            credits={filmCredits.crew}
          />
        </div> */}
        </div>
      </div>
      <FilmProductionDetails filmCredits={filmCredits} />
    </section>
  );
};

export default MainFilmInfo;
