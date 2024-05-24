import React from "react";
import UserNotesList from "../user/UserNotesList";
import Link from "next/link";

const UserNotesContainer = ({ user, userNotes }) => {
  return (
    <>
      <div className="my-4 flex flex-col lg:items-end gap-2 mt-32 w-full">
        <Link href={`/user/notes/${user.username}`} className="karla ml-2">
          Notes by <span className="outfit font-semibold">{user.username}</span>
        </Link>
        <UserNotesList userNotes={userNotes} />
      </div>
    </>
  );
};

export default UserNotesContainer;
