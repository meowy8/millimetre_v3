import React from "react";
import SmallUserAvatar from "../user/SmallUserAvatar";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";

const FilmNote = ({ note }: { note: FilmNotes }) => {
  return (
    <div className=" w-full max-w-[400px] h-48 rounded-t-lg border-t-2 border-x-2 border-[#3a1c42] karla flex flex-col">
      <div className="flex justify-between bg-[#3a1c42] p-4">
        <div className="flex gap-4 items-end">
          <Link href={`/user/profile/${note.username}`}>
            <SmallUserAvatar profileImage={note.profileImage} />
          </Link>
          <Link
            href={`/user/profile/${note.username}`}
            className="text-white outfit font-semibold"
          >
            {note.username}
          </Link>
        </div>
        <div className="flex justify-end">
          <span className="italic font-light text-sm text-right">
            {new Date(note.createdAt as string).toDateString()}
          </span>
        </div>
      </div>
      <Link
        href={`/user/notes/${note.username}/${note._id}`}
        className="hover:opacity-80 h-full p-4 bg-[#3a1c42]/10"
      >
        <p className=" line-clamp-4">{note.content}</p>
      </Link>
    </div>
  );
};

export default FilmNote;
