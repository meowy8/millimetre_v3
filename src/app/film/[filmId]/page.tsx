"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import LargeFilmPoster from "@/components/film/LargeFilmPoster";
import React, { useEffect } from "react";
import FilmDescription from "@/components/film/FilmDescription";
import WatchedButton from "@/components/buttons/WatchedButton";
import AddToWatchlistBtn from "@/components/buttons/AddToWatchlistBtn";
import FilmProductionDetails from "@/components/film/FilmProductionDetails";
import FilmImagesDisplay from "@/components/film/FilmImagesDisplay";
import FilmNotesList from "@/components/film/FilmNotesList";
import Modal from "@/components/Modal";
import Link from "next/link";
import AddFilmNote from "@/components/film/AddFilmNote";
import ImageModal from "@/components/ImageModal";
import {
  fetchFilmCredits,
  fetchFilmDetails,
  fetchFilmImages,
} from "@/utils/fetchFilmData";
import { useParams } from "next/navigation";
import { FilmDetails, FilmCredits, FilmImages } from "@/types/filmTypes";

const FilmDetail = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showNotesModal, setShowNotesModal] = React.useState(false);
  const [showImageModal, setShowImageModal] = React.useState(false);
  const [modalImageData, setModalImageData] = React.useState("");
  const [filmDetails, setFilmDetails] = React.useState({} as FilmDetails);
  const [filmCredits, setFilmCredits] = React.useState({} as FilmCredits);
  const [filmImages, setFilmImages] = React.useState({} as FilmImages);

  const params = useParams();
  const { filmId } = params;

  useEffect(() => {
    setFilmDetails({} as FilmDetails);
    (async () => setFilmDetails(await fetchFilmDetails(filmId as string)))();
  }, [filmId]);

  useEffect(() => {
    setFilmCredits({} as FilmCredits);
    (async () => setFilmCredits(await fetchFilmCredits(filmId as string)))();
  }, [filmId]);

  useEffect(() => {
    setFilmImages({} as FilmImages);
    (async () => setFilmImages(await fetchFilmImages(filmId as string)))();
  }, [filmId]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleNotesModal = () => {
    setShowNotesModal(!showNotesModal);
  };

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  const handleClick = () => {
    toggleModal();
    toggleNotesModal();
  };

  return (
    <section className="overflow-x-hidden flex flex-col items-center w-full mt-20">
      <Modal showModal={showModal}>
        {showNotesModal && (
          <AddFilmNote
            poster_path={filmDetails.poster_path}
            toggleModal={toggleModal}
            toggleNotesModal={toggleNotesModal}
            title={filmDetails.title}
          />
        )}
        {showImageModal && (
          <ImageModal
            toggleModal={toggleModal}
            toggleImageModal={toggleImageModal}
            modalImageData={modalImageData}
          />
        )}
      </Modal>
      {filmDetails.backdrop_path && (
        <FilmBackdrop
          backdropImage={`https://image.tmdb.org/t/p/original${filmDetails.backdrop_path}`}
        />
      )}
      <div className="relative bottom-20 md:bottom-32 lg:bottom-44 m-6 z-10 flex flex-col lg:flex-row lg:gap-20">
        <div className="lg:flex-row flex flex-col  gap-10">
          {filmDetails.poster_path && (
            <LargeFilmPoster poster_path={filmDetails.poster_path} />
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
            <WatchedButton handleClick={handleClick} />
            <AddToWatchlistBtn />
          </div>
          <div className="flex flex-col gap-4">
            <FilmProductionDetails
              sectionName="Cast"
              creditsType={filmCredits.cast}
            />
            <FilmProductionDetails
              sectionName="Crew"
              creditsType={filmCredits.crew}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full lg:relative bottom-20">
        <FilmImagesDisplay
          toggleImageModal={toggleImageModal}
          toggleModal={toggleModal}
          setModalImageData={setModalImageData}
          images={filmImages.backdrops}
        />
      </div>
      <div className="flex flex-col gap-2 my-8">
        <div className="flex justify-end">
          <Link
            href={`/film/notes/${filmId}`}
            className="karla font-bold text-lg"
          >
            View All Notes
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <FilmNotesList />
        </div>
      </div>
    </section>
  );
};

export default FilmDetail;
