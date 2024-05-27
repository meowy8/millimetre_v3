import React from "react";
import LargeUserAvatar from "./LargeUserAvatar";
import FavFilmsDisplay from "../film/FavFilmsDisplay";
import RecentFilmsDisplay from "../film/RecentFilmsDisplay";
import { User } from "@/types/userTypes";

const ProfileDetails = ({ user }: { user: User }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 lg:items-start w-full">
        <LargeUserAvatar />
        <span className="outfit text-xl font-bold">{user.username}</span>
        <p className="karla text-center px-6 mb-4 lg:text-left lg:p-0 max-w-96 ml-2">
          {user.bio}
        </p>
        <div className="my-4 flex flex-col gap-2">
          <span className="karla font-semibold ml-2">Favourite Films</span>
          <FavFilmsDisplay user={user} />
        </div>
        <div className="my-4 flex flex-col gap-2 lg:my-0">
          <span className="karla font-semibold ml-2">Recently Watched</span>
          <RecentFilmsDisplay user={user} />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
