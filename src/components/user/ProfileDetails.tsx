import React from "react";
import LargeUserAvatar from "./LargeUserAvatar";
import FavFilmsDisplay from "../film/FavFilmsDisplay";
import RecentFilmsDisplay from "../film/RecentFilmsDisplay";
import { User } from "@/types/userTypes";
import Link from "next/link";
import { FilmNotes } from "@/types/filmTypes";
import UserNotesContainer from "../containers/UserNotesContainer";

const ProfileDetails = ({
  user,
  recentlyWatched,
  userNotes,
}: {
  user: User;
  recentlyWatched: FilmNotes[];
  userNotes: FilmNotes[];
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 lg:items-start md:min-w-96 z-10 w-full">
        {/* {user.profileImage && <LargeUserAvatar user={user} />} */}
        <div className="flex flex-col md:flex-row gap-4 lg:justify-between w-full items-center md:items-stretch">
          <div className="bg-[#001F24] rounded-md p-4 border-2 border-black flex flex-col gap-6 w-96 md:w-5/12 shadow-md">
            <div className=" flex flex-col w-full min-h-32">
              <span className="karla font-semibold ml-2">Favourite Films</span>
              <hr className="w-full opacity-30 mt-1 mb-4" />
              <FavFilmsDisplay user={user} />
            </div>
            <div className=" flex flex-col lg:my-0 w-full min-h-32">
              <span className="karla font-semibold ml-2">Recently Watched</span>
              <hr className="w-full opacity-30 mt-1 mb-4" />
              <RecentFilmsDisplay recentlyWatched={recentlyWatched} />
            </div>
          </div>
          <UserNotesContainer userNotes={userNotes} user={user} />
        </div>
        {/* <div className="w-full flex flex-col gap-2 mt-4">
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
        </div> */}
      </div>
    </>
  );
};

export default ProfileDetails;
