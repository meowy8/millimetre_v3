import React from "react";
import UserNotesList from "../user/UserNotesList";

const UserNotesContainer = ({ user, userNotes }) => {
  return (
    <>
      <div className="my-4 flex flex-col lg:items-end gap-2 mt-32 w-full">
        <span className="karla ml-2">
          Notes by <span className="outfit font-semibold">{user.username}</span>
        </span>
        <UserNotesList userNotes={userNotes} />
      </div>
    </>
  );
};

export default UserNotesContainer;
