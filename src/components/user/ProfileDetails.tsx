import React from "react";
import LargeUserAvatar from "./LargeUserAvatar";
import FavFilmsDisplay from "../film/FavFilmsDisplay";
import RecentFilmsDisplay from "../film/RecentFilmsDisplay";
import { User } from "@/types/userTypes";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";

const ProfileDetails = ({
  user,
  recentlyWatched,
}: {
  user: User;
  recentlyWatched: FilmNotes[];
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 lg:items-start w-full z-10">
        {user.profileImage && <LargeUserAvatar user={user} />}
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
          <RecentFilmsDisplay recentlyWatched={recentlyWatched} />
        </div>
        <Link
          href={`/user/profile/${user.username}/watchlist`}
          className="karla border border-[#184249] px-4 py-2 mt-4 bg-[#001F24] rounded-md hover:bg-[#184249] w-full"
        >
          Watchlist
        </Link>
      </div>
    </>
  );
};

export default ProfileDetails;
