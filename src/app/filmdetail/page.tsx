"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import LargeFilmPoster from "@/components/film/LargeFilmPoster";
import React from "react";
import FilmDescription from "@/components/film/FilmDescription";
import WatchedButton from "@/components/WatchedButton";
import AddToWatchlistBtn from "@/components/AddToWatchlistBtn";
import FilmProductionDetails from "@/components/film/FilmProductionDetails";
import FilmImagesDisplay from "@/components/film/FilmImagesDisplay";
import FilmNotesList from "@/components/film/FilmNotesList";
import Modal from "@/components/Modal";
import Link from "next/link";
import AddFilmNote from "@/components/film/AddFilmNote";

const FilmDetail = () => {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="overflow-x-hidden">
      <Modal showModal={showModal}>
        <AddFilmNote toggleModal={toggleModal} />
      </Modal>
      <FilmBackdrop backdropImage={"/images/filmDetailBackdrop.jpeg"} />
      <div className="relative bottom-20 m-6">
        <LargeFilmPoster />
        <FilmDescription />
        <div className="flex justify-between my-8">
          <WatchedButton toggleModal={toggleModal} />
          <AddToWatchlistBtn />
        </div>
        <div className="flex flex-col gap-4">
          <FilmProductionDetails sectionName="Cast" />
          <FilmProductionDetails sectionName="Crew" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <FilmImagesDisplay />
      </div>
      <div className="flex flex-col gap-2 my-8">
        <div className="flex justify-end">
          <Link href={"/filmnotes"} className="karla font-bold text-lg">
            View All Notes
          </Link>
        </div>
        <FilmNotesList />
      </div>
    </section>
  );
};

export default FilmDetail;
