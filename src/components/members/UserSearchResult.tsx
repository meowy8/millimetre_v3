import React from "react";
import MediumUserAvatar from "../user/MediumUserAvatar";
import Link from "next/link";

const UserSearchResult = ({ username }: { username: string }) => {
  return (
    <Link
      href={`/user/profile/${username}`}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <MediumUserAvatar />
      <span className="outfit text-sm">{username}</span>
    </Link>
  );
};

export default UserSearchResult;
