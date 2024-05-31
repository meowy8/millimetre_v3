"use client";
import FilmNotesList from "@/components/film/FilmNotesList";
import FilmNoteHeader from "@/components/film/FilmNoteHeader";
import React, { useEffect } from "react";
import { TMDBFilmDetails } from "@/types/filmTypes";
import {
  fetchFilmDetails,
  fetchFilmNotes,
} from "@/utils/dataFetching/filmData";
import { useParams } from "next/navigation";
import Modal from "@/components/Modal";
import AddFilmNote from "@/components/film/AddFilmNote";

const FilmNotes = () => {
  const [filmData, setFilmData] = React.useState({} as TMDBFilmDetails);
  const [filmNotes, setFilmNotes] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [showNotesModal, setShowNotesModal] = React.useState(false);

  const params = useParams();
  const param = params.filmId;
  const filmId = parseInt(param as string);

  // fetch film notes
  useEffect(() => {
    (async () => setFilmNotes(await fetchFilmNotes(filmId, null)))();
  }, [filmId]);

  // fetch film details
  useEffect(() => {
    // setFilmData({} as FilmDetails);
    (async () => setFilmData(await fetchFilmDetails(filmId)))();
  }, [filmId]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleNotesModal = () => {
    setShowNotesModal(!showNotesModal);
  };

  return (
    <section className="m-4 flex flex-col gap-8">
      <Modal showModal={showModal}>
        {showNotesModal && (
          <AddFilmNote
            posterPath={filmData.poster_path}
            backdropPath={filmData.backdrop_path}
            toggleModal={toggleModal}
            toggleNotesModal={toggleNotesModal}
            title={filmData.title}
            filmId={filmId}
            setWatchedButton={() => null}
          />
        )}
      </Modal>
      <FilmNoteHeader filmData={filmData} filmId={filmId} />
      {/* <div className="flex gap-4">
        <div>
          <GeneralBtn text={"Best"} />
        </div>
        <div>
          <GeneralBtn text={"Recent"} />
        </div>
      </div> */}
      <div>
        <FilmNotesList
          filmNotes={filmNotes}
          toggleModal={toggleModal}
          toggleNotesModal={toggleNotesModal}
        />
      </div>
    </section>
  );
};

export default FilmNotes;
