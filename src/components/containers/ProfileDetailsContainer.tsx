import React from "react";
import UserNotesContainer from "./UserNotesContainer";
import ProfileDetails from "../user/ProfileDetails";
import { User } from "@/types/userTypes";
import { FilmNotes } from "@/types/filmTypes";
import Link from "next/link";
import ProfileHeader from "../user/ProfileHeader";

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
    <div className="relative mx-6 mt-4 flex flex-col max-w-[900px] w-full">
      <ProfileHeader user={user} />
      <ProfileDetails
        user={user}
        recentlyWatched={recentlyWatched}
        userNotes={userNotes}
      />
    </div>
  );
};

export default ProfileDetailsContainer;
