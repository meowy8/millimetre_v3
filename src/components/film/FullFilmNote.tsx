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
import CloseModalBtn from "../buttons/CloseModalBtn";
import { useRouter } from "next/navigation";

const FullFilmNote = ({ noteData }: { noteData: FilmNotes }) => {
  const [deleteNoteBtn, setDeleteNoteBtn] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const handleDelete = async () => {
    if (!session) {
      return;
    }
    if (!noteData) return;

    // delete note
    await deleteNote(noteData._id, session?.user?.id);

    setShowModal(false);

    router.back();
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
        <div className="flex flex-col gap-4 bg-[#001F24] p-8 rounded-md border border-[#137150]">
          <div className="flex gap-4">
            <p className=" flex items-end text-lg">
              Are you sure you want to delete this note?
            </p>
            <div className="p-1 flex">
              <CloseModalBtn handleClick={() => setShowModal(false)} />
            </div>
          </div>
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
      {/* {noteData.backdropPath ? (
        <FilmBackdrop
          backdropImage={`https://image.tmdb.org/t/p/original${noteData.backdropPath}`}
        />
      ) : (
        <EmptyBackdrop />
      )} */}
      <div className="mt-10 flex justify-between z-10">
        <div className="flex flex-col rounded-t-lg border-t-2 border-x-2 border-[#3a1c42]">
          <div className="flex flex-col lg:flex-row lg:items-center bg-[#3a1c42] p-4 gap-4">
            <div className="flex lg:flex-col gap-4 justify-between">
              <Link href={`/user/profile/${noteData.username}`}>
                <MediumUserAvatar profileImage={noteData.profileImage} />
              </Link>
              <span className="italic font-light text-sm mt-2">
                {new Date(noteData.createdAt as string).toDateString()}
              </span>
            </div>
            <span className="mr-8">
              Note by{" "}
              <Link
                href={"/user/profile/cadaverinbloom"}
                className="font-bold text-lg text-[#9081ff] hover:text-white"
              >
                {noteData.username}
              </Link>{" "}
              for{" "}
              <Link
                href={`/film/${noteData.filmId}`}
                className="outfit text-2xl text-[#9081ff] hover:text-white"
              >
                {noteData.title}
              </Link>
            </span>
          </div>
          <p className="text-lg p-4 karla font-light bg-[#3a1c42]/10 h-full">
            {noteData.content}
          </p>
        </div>
        <div className="hidden md:flex flex-col">
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
          {deleteNoteBtn && (
            <button
              onClick={handleClick}
              className="bg-red-700 p-2 rounded mt-10 hover:bg-red-800"
            >
              Delete Note
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullFilmNote;
