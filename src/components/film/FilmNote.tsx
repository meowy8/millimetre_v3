import React from "react";
import SmallUserAvatar from "../user/SmallUserAvatar";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";

const FilmNote = ({ note }: { note: FilmNotes }) => {
  return (
    <div className="bg-[#001F24] w-full max-w-[400px] h-48 rounded-md border border-[#184249] karla p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-end">
          <Link href={`/user/profile/${note.username}`}>
            <SmallUserAvatar />
          </Link>
          <Link
            href={`/user/profile/${note.username}`}
            className="text-white outfit font-semibold"
          >
            {note.username}
          </Link>
        </div>
        <div>
          <span className="italic font-light text-sm">
            {new Date(note.createdAt as string).toDateString()}
          </span>
        </div>
      </div>
      <Link href={`/user/notes/${note.username}/${note._id}`}>
        <p className=" line-clamp-4 hover:opacity-80">{note.content}</p>
      </Link>
    </div>
  );
};

export default FilmNote;
