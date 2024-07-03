import React from "react";
import SmallUserAvatar from "../user/SmallUserAvatar";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";

const FilmNote = ({ note }: { note: FilmNotes }) => {
  return (
    <div className=" w-full rounded-lg border-2 border-x-2 border-[#184249] karla flex flex-col overflow-hidden shadow-md shadow-black">
      <div className="flex justify-between bg-[#184249] p-4">
        <div className="flex gap-4 items-end">
          <Link href={`/user/profile/${note.username}`}>
            <SmallUserAvatar profileImage={note.profileImage} />
          </Link>
          <div>
            <Link
              href={`/user/profile/${note.username}`}
              className="text-white outfit font-semibold hover:opacity-80"
            >
              {note.username}
            </Link>
            <Link href={`/film/${note.filmId}`}>
              <p className="text-white font-light outfit hover:opacity-80">
                {note.title}
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="italic font-light text-sm text-right">
            {new Date(note.createdAt as string).toDateString()}
          </span>
        </div>
      </div>
      <Link
        href={`/user/notes/${note.username}/${note._id}`}
        className="hover:opacity-80 h-full p-4 bg-[#001F24] break-all"
      >
        <p className=" line-clamp-4">{note.content}</p>
      </Link>
    </div>
  );
};

export default FilmNote;
