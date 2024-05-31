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
    <>
      <div className="my-4 flex flex-col lg:items-end gap-2 mt-8 lg:mt-32 w-full z-10">
        <Link
          href={`/user/notes/${user.username}`}
          className="karla ml-2 hover:underline"
        >
          Notes by{" "}
          <span className="outfit font-semibold ">{user.username}</span>
        </Link>
        <UserNotesList userNotes={userNotes} />
      </div>
    </>
  );
};

export default UserNotesContainer;
