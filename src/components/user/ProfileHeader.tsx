import { User } from "@/types/userTypes";
import Link from "next/link";
import React from "react";

const ProfileHeader = ({ user }: { user: User }) => {
  return (
    <div className="mx-4 mb-4 md:mb-8 flex flex-col md:flex-row">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full">
        <span className="outfit text-xl font-bold">{user.username}</span>
        <p className="karla max-w-96 mt-2 md:w-full">{user.bio}</p>
      </div>
      <div className="w-full flex gap-2 justify-center md:justify-end h-10 text-sm">
        <Link
          href={`/user/profile/${user.username}/watchlist`}
          className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-md hover:bg-[#184249] flex justify-center items-center"
        >
          Watchlist
        </Link>
        <Link
          href={`/user/profile/${user.username}/recentlyWatched`}
          className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-md hover:bg-[#184249] flex justify-center items-center"
        >
          Recently Watched
        </Link>
        <Link
          href={`/user/notes/${user.username}`}
          className="karla border border-[#184249] px-4 py-2 bg-[#001F24]/60 rounded-md hover:bg-[#184249] flex justify-center items-center"
        >
          Notes
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
