import React from "react";
import UserNotesContainer from "./UserNotesContainer";
import ProfileDetails from "../user/ProfileDetails";

const ProfileDetailsContainer = ({ user, userNotes }) => {
  return (
    <div className="relative bottom-24 m-6 flex flex-col justify-between  gap-4 lg:bottom-44 lg:flex-row">
      <div className="bg-black/30 blur-lg w-full h-full absolute -z-10 mt-10"></div>
      <ProfileDetails user={user} />
      <UserNotesContainer userNotes={userNotes} user={user} />
    </div>
  );
};

export default ProfileDetailsContainer;
