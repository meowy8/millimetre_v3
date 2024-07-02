import React from "react";
import UserNotesContainer from "./UserNotesContainer";
import ProfileDetails from "../user/ProfileDetails";
import { User } from "@/types/userTypes";
import { FilmNotes } from "@/types/filmTypes";

const ProfileDetailsContainer = ({
  user,
  userNotes,
  recentlyWatched,
}: {
  user: User;
  userNotes: FilmNotes[];
  recentlyWatched: FilmNotes[];
}) => {
  return (
    <div className="relative bottom-24 md:bottom-44 m-6 flex flex-col justify-between gap-24 lg:bottom-44 lg:flex-row max-w-[900px] w-full">
      <ProfileDetails user={user} recentlyWatched={recentlyWatched} />
      <UserNotesContainer userNotes={userNotes} user={user} />
    </div>
  );
};

export default ProfileDetailsContainer;
