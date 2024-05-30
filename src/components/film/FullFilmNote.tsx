"use client";
import React, { useEffect } from "react";
import MediumUserAvatar from "../user/MediumUserAvatar";
import FilmBackdrop from "./FilmBackdrop";
import Link from "next/link";
import MediumFilmPoster from "./MediumFilmPoster";
import EmptyFilmPoster from "./EmptyFilmPoster";
import { FilmNotes } from "@/types/filmTypes";
import EmptyBackdrop from "./EmptyBackdrop";
import { useSession } from "next-auth/react";
import Modal from "../Modal";
import { deleteNote } from "@/utils/dataFetching/noteData";

const FullFilmNote = ({ noteData }: { noteData: FilmNotes }) => {
  const [deleteNoteBtn, setDeleteNoteBtn] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const { data: session } = useSession();

  const handleDelete = async () => {
    if (!session) {
      return;
    }
    if (!noteData) return;

    // delete note
    await deleteNote(noteData._id, session?.user?.id);
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (session?.user?.username === noteData.username) {
      setDeleteNoteBtn(true);
    }
  }, [session, noteData.username]);

  return (
    <div className="relative max-w-[1000px] mx-auto karla flex flex-col gap-4">
      <Modal showModal={showModal}>
        <div className="flex flex-col gap-4 bg-[#001F24] p-8 rounded-md">
          <p>Are you sure you want to delete this note?</p>
          {/* <button className=" bg-red-700 p-2 rounded-sm hover:bg-red-800">
            Delete note content
          </button> */}
          <button
            onClick={handleDelete}
            className=" bg-red-700 p-2 rounded-sm hover:bg-red-800"
          >
            Delete film log
          </button>
        </div>
      </Modal>
      <div className="relative -top-24 md:-top-44">
        {noteData.backdropPath ? (
          <FilmBackdrop
            backdropImage={`https://image.tmdb.org/t/p/original${noteData.backdropPath}`}
          />
        ) : (
          <EmptyBackdrop />
        )}
      </div>
      <div className="relative bottom-44 md:bottom-64 lg:bottom-80 flex justify-between z-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
            <Link href={`/user/profile/${noteData.username}`}>
              <MediumUserAvatar />
            </Link>
            <span>
              Note by{" "}
              <Link
                href={"/user/profile/cadaverinbloom"}
                className="font-bold text-lg"
              >
                {noteData.username}
              </Link>{" "}
              for{" "}
              <Link
                href={`/film/${noteData.filmId}`}
                className="outfit text-2xl"
              >
                {noteData.title}
              </Link>
            </span>
          </div>
          <hr />
          <span className="italic font-light text-sm">
            {new Date(noteData.createdAt as string).toDateString()}
          </span>
          <p className="mt-4 text-lg">{noteData.content}</p>
          <button onClick={handleClick}>Delete Note</button>
        </div>
        <div className="hidden md:block">
          <Link href={`/film/${noteData.filmId}`}>
            {noteData.posterPath ? (
              <MediumFilmPoster
                posterPath={noteData.posterPath}
                title={noteData.title}
              />
            ) : (
              <EmptyFilmPoster />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullFilmNote;
