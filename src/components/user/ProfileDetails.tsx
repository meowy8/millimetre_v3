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
      <div className="flex flex-col items-center gap-4 lg:items-start md:min-w-96 z-10">
        {user.profileImage && <LargeUserAvatar user={user} />}
        <span className="outfit text-xl font-bold">{user.username}</span>
        <p className="karla text-center px-6 mb-4 lg:text-left lg:p-0 max-w-96 ml-2">
          {user.bio}
        </p>
        <div className="my-4 flex flex-col gap-2 w-full min-h-32">
          <span className="karla font-semibold ml-2">Favourite Films</span>
          <FavFilmsDisplay user={user} />
        </div>
        <div className="my-4 flex flex-col gap-2 lg:my-0 w-full min-h-32">
          <span className="karla font-semibold ml-2">Recently Watched</span>
          <RecentFilmsDisplay recentlyWatched={recentlyWatched} />
        </div>
        <div className="w-full flex flex-col gap-2 mt-4">
          <Link
            href={`/user/profile/${user.username}/watchlist`}
            className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-sm hover:bg-[#184249] w-full"
          >
            Watchlist
          </Link>
          <Link
            href={`/user/profile/${user.username}/recentlyWatched`}
            className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-sm hover:bg-[#184249] w-full"
          >
            Recently Watched
          </Link>
          <Link
            href={`/user/notes/${user.username}`}
            className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-sm hover:bg-[#184249] w-full"
          >
            Notes
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
