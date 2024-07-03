import React from "react";
import UserNotesList from "../user/UserNotesList";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";
import { User } from "@/types/userTypes";

const UserNotesContainer = ({
  user,
  userNotes,
}: {
  user: User;
  userNotes: FilmNotes[];
}) => {
  return (
    <div className="flex flex-col p-4 items-end md:w-7/12 z-10 bg-[#001F24] rounded-md border-2 border-black w-96 shadow-md">
      <Link
        href={`/user/notes/${user.username}`}
        className="karla ml-2 hover:underline"
      >
        Notes by <span className="outfit font-semibold ">{user.username}</span>
      </Link>
      <hr className="w-full opacity-30 mt-1 mb-4" />
      <UserNotesList userNotes={userNotes} />
    </div>
  );
};

export default UserNotesContainer;
