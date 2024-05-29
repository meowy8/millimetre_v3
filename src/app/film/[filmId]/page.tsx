"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import React, { useEffect, useState } from "react";
import MainFilmInfo from "@/components/film/MainFilmInfo";
import FilmImagesDisplay from "@/components/film/FilmImagesDisplay";
import Modal from "@/components/Modal";
import FilmNotesContainer from "@/components/containers/FilmNotesContainer";
import AddFilmNote from "@/components/film/AddFilmNote";
import ImageModal from "@/components/ImageModal";
import {
  fetchFilmPageData,
  fetchFilmNotes,
} from "@/utils/dataFetching/filmData";
import { useParams, useRouter } from "next/navigation";
import {
  TMDBFilmDetails,
  FilmCredits,
  FilmImages,
  FilmNotes,
} from "@/types/filmTypes";
import Loading from "@/components/loading";
import { ModalImageDataType } from "@/types/propTypes";
import { useSession } from "next-auth/react";
import { fetchUserWatchlist } from "@/utils/dataFetching/userData";

const FilmDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageData, setModalImageData] = useState(
    {} as ModalImageDataType
  );
  const [filmDetails, setFilmDetails] = useState({} as TMDBFilmDetails);
  const [filmCredits, setFilmCredits] = useState({} as FilmCredits);
  const [filmImages, setFilmImages] = useState({} as FilmImages);
  const [filmNotes, setFilmNotes] = useState([] as FilmNotes[]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [watchlistButton, setWatchlistButton] = useState(false);

  let params = useParams<{ filmId: string }>();
  const filmId = parseInt(params.filmId);
  const router = useRouter();

  const { data: session } = useSession();

  const handleAddToWatchlist: () => Promise<void> = async () => {
    const film = {
      title: filmDetails.title,
      posterPath: filmDetails.poster_path,
      filmId: filmId,
    };

    const result = await fetch("/api/users/user/watchlist", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ film, userId: session?.user?.id }),
    });

    // console.log(result);
  };

  const handleRemoveFromWatchlist: () => Promise<void> = async () => {
    const result = await fetch("/api/users/user/watchlist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filmId: filmId, userId: session?.user?.id }),
    });

    // console.log(result);
  };

  useEffect(() => {
    if (!session?.user?.username) return;

    (async () => {
      const data = await fetchUserWatchlist(session?.user?.username);

      console.log("watchlist", data);
      if (data) {
        if (data.some((film) => film.filmId === filmId)) {
          setWatchlistButton(true);
        }
      }
    })();
  }, [session?.user?.username, filmId]);

  useEffect(() => {
    if (!filmId) {
      router.push("/not-found");
    }
  }, [filmId, router]);

  // fetch film details, credits and images
  useEffect(() => {
    (async () => {
      try {
        // display loading state
        setLoading(true);

        // fetch film data
        const data = await fetchFilmPageData(filmId);

        // check if film data is null
        if (!data) {
          return router.push("/not-found");
        } else {
          // set film data
          setFilmDetails(data.details);
          setFilmCredits(data.credits);
          setFilmImages(data.images);
        }

        // change loading state to false
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [filmId, router]);

  // fetch notes for film
  useEffect(() => {
    (async () => setFilmNotes(await fetchFilmNotes(filmId, 4)))();
  }, [filmId]);

  // wait for data to load before displaying page
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

  // open or close modal
  const closeModal = () => {
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
            posterPath={filmDetails.poster_path}
            backdropPath={filmDetails.backdrop_path}
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
          closeModal={closeModal}
          filmCredits={filmCredits}
          handleAddToWatchlist={handleAddToWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          watchlistButton={watchlistButton}
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
      <FilmNotesContainer
        filmNotes={filmNotes}
        toggleModal={toggleModal}
        toggleNotesModal={toggleNotesModal}
        filmId={filmId}
      />
    </section>
  );
};

export default FilmDetail;
