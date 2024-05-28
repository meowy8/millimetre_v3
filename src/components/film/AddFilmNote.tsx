"use client";
import React, { useEffect } from "react";
import CloseModalBtn from "../buttons/CloseModalBtn";
import SmallFilmPoster from "./SmallFilmPoster";
import { AddFilmNoteProps } from "@/types/propTypes";
import { FilmNotes } from "@/types/filmTypes";
import { postNote } from "@/utils/dataFetching/noteData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddFilmNote = ({
  toggleModal,
  toggleNotesModal,
  posterPath,
  backdropPath,
  title,
  filmId,
}: AddFilmNoteProps) => {
  const [enableDate, setEnableDate] = React.useState(false);
  const [noteContent, setNoteContent] = React.useState("");

  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return router.push("/signin");
  }, [session, router]);

  const handleChange = () => {
    setEnableDate(!enableDate);
  };

  const handleClick = () => {
    toggleNotesModal();
    toggleModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const note = {
      title,
      content: noteContent,
      username: session?.user?.username,
      filmId,
      backdropPath,
      posterPath,
    };

    await postNote(note as FilmNotes, session?.user?.id);

    toggleNotesModal();
    toggleModal();
  };

  return (
    <div className="bg-[#001F24] p-4 m-2 border border-[#137150] rounded-lg flex flex-col justify-center items-center gap-4 md:w-[700px] w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 lg:w-4/5 justify-between">
          <div>
            <SmallFilmPoster posterPath={posterPath} title={title} />
          </div>
          <div className="flex flex-col gap-4 lg:w-full">
            <div className="flex justify-between">
              <span className="outfit text-2xl line-clamp-1">{title}</span>
              <CloseModalBtn handleClick={handleClick} />
            </div>
            <label htmlFor="note" className="flex flex-col karla">
              Note
              <textarea
                name="note"
                id="note"
                cols={30}
                rows={5}
                className="bg-white/10 p-2 rounded-lg border hover:bg-white/20 focus:bg-white/30"
                placeholder="Add a note"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end md:w-2/3 w-full px-4">
          {/* <div className="flex gap-2">
          <input
            type="checkbox"
            name="datecheck"
            id="datecheck"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            id="date"
            className={`rounded-md bg-white/20 border p-2 ${
              enableDate ? "opacity-100" : "opacity-30"
            }`}
            disabled={!enableDate}
          />
        </div> */}
          <div>
            <button
              type="submit"
              className="bg-[#01442C] rounded-md border border-[#137150] px-4 py-2 karla hover:bg-[#137150]"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFilmNote;
