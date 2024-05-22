"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import React, { useEffect, useState } from "react";
import MainFilmInfo from "@/components/film/MainFilmInfo";
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
import { useParams, useRouter } from "next/navigation";
import { FilmDetails, FilmCredits, FilmImages } from "@/types/filmTypes";
import Loading from "@/components/loading";

const FilmDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageData, setModalImageData] = useState("");
  const [filmDetails, setFilmDetails] = useState({} as FilmDetails);
  const [filmCredits, setFilmCredits] = useState({} as FilmCredits);
  const [filmImages, setFilmImages] = useState({} as FilmImages);
  const [filmNotes, setFilmNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const { filmId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!filmId) {
      router.push("/not-found");
    }
  }, [filmId, router]);

  // fetch film data
  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        setLoading(true);
        const [details, credits, images] = await Promise.all([
          fetchFilmDetails(filmId as string),
          fetchFilmCredits(filmId as string),
          fetchFilmImages(filmId as string),
        ]);

        if (
          details.success === false ||
          credits.success === false ||
          images.success === false
        ) {
          router.push("/not-found");
          return;
        }

        setFilmDetails(details);
        setFilmCredits(credits);
        setFilmImages(images);
      } catch (error) {
        console.error(error);
        router.push("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchFilmData();
  }, [filmId, router]);

  // fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `/api/v1/notes/filmNotes?filmId=${filmId}&limit=4`
        );
        const data = await response.json();
        // console.log(data);

        if (data.message === "Success") {
          setFilmNotes(data.result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, [filmId]);

  useEffect(() => {
    if (!loading) {
      setIsVisible(true);
    }
  }, [loading]);

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

  if (loading) return <Loading />;

  return (
    <section
      className={`relative -top-24 overflow-x-hidden flex flex-col items-center w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      <Modal showModal={showModal}>
        {showNotesModal && (
          <AddFilmNote
            poster_path={filmDetails.poster_path}
            toggleModal={toggleModal}
            toggleNotesModal={toggleNotesModal}
            title={filmDetails.title}
            filmId={filmId}
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
      {filmCredits && filmDetails && (
        <MainFilmInfo
          filmDetails={filmDetails}
          handleClick={handleClick}
          filmCredits={filmCredits}
        />
      )}
      <div className="overflow-x-auto w-full lg:relative bottom-20 z-10">
        <FilmImagesDisplay
          toggleImageModal={toggleImageModal}
          toggleModal={toggleModal}
          setModalImageData={setModalImageData}
          images={filmImages.backdrops}
        />
      </div>
      <div className="flex flex-col gap-2 my-8 w-full">
        <div className="flex justify-end">
          {filmNotes.length > 0 && (
            <Link
              href={`/film/notes/${filmId}`}
              className="karla font-bold text-lg"
            >
              View All Notes
            </Link>
          )}
        </div>
        <div className="flex justify-center w-full">
          <FilmNotesList
            filmNotes={filmNotes}
            toggleNotesModal={toggleNotesModal}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </section>
  );
};

export default FilmDetail;
