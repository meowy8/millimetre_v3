import React from "react";
import LargeFilmPoster from "./LargeFilmPoster";
import FilmDescription from "./FilmDescription";
import WatchedButton from "@/components/buttons/WatchedButton";
import AddToWatchlistBtn from "@/components/buttons/AddToWatchlistBtn";
import FilmProductionDetails from "./FilmProductionDetails";
import { Credits, FilmCredits, TMDBFilmDetails } from "@/types/filmTypes";

const MainFilmInfo = ({
  filmDetails,
  filmCredits,
  closeModal,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlistButton,
}: {
  filmDetails: TMDBFilmDetails;
  filmCredits: FilmCredits;
  closeModal: () => void;
  handleAddToWatchlist: () => void;
  handleRemoveFromWatchlist: () => void;
  watchlistButton: boolean;
}) => {
  return (
    <div className="relative bottom-20 md:bottom-32 lg:bottom-44 m-6 z-10 flex flex-col lg:flex-row lg:gap-20">
      <div className="bg-black/40 rounded-lg w-full h-[700px] absolute blur-lg -z-10"></div>
      <div className="lg:flex-row flex flex-col items-center lg:items-start gap-10">
        {filmDetails.poster_path && (
          <LargeFilmPoster posterPath={filmDetails.poster_path} />
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
          <WatchedButton closeModal={closeModal} />
          <AddToWatchlistBtn
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            watchlistButton={watchlistButton}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FilmProductionDetails
            sectionName="Cast"
            credits={filmCredits.cast}
          />
          <FilmProductionDetails
            sectionName="Crew"
            credits={filmCredits.crew}
          />
        </div>
      </div>
    </div>
  );
};

export default MainFilmInfo;
