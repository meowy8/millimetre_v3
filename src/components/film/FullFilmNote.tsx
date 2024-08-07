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
import BinIcon from "../icons/BinIcon";

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
    await deleteNote(noteData._id as string, session?.user?.name as string);

    setShowModal(false);

    router.back();
  };

  const handleClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (session?.user?.name === noteData.username) {
      setDeleteNoteBtn(true);
    }
  }, [session, noteData.username]);

  return (
    <div className="relative mx-auto karla flex flex-col gap-4">
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
      <div className="mt-10 flex gap-10 z-10">
        <div className="flex flex-col rounded-lg border-2 border-x-2 border-[#184249] bg-[#1c3b40] overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center p-4 gap-4 rounded-lg ">
            <div>
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
                  className="font-bold text-lg underline hover:text-white"
                >
                  {noteData.username}
                </Link>{" "}
                for{" "}
                <Link
                  href={`/film/${noteData.filmId}`}
                  className="outfit text-2xl underline hover:text-white"
                >
                  {noteData.title}
                </Link>
              </span>
            </div>
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
          <p className="text-lg p-4 karla font-light bg-[#001F24] h-full break-all">
            {noteData.content}
          </p>
        </div>
        <div className="hidden md:flex flex-col">
          {deleteNoteBtn && (
            <button
              onClick={handleClick}
              className="bg-red-700 p-2 rounded hover:bg-red-800 text-[40px]"
            >
              <BinIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullFilmNote;
