import React from "react";
import MediumUserAvatar from "./MediumUserAvatar";
import Link from "next/link";

const UserSearchResult = () => {
  return (
    <Link href={"/profile"} className="flex flex-col gap-2 justify-center">
      <MediumUserAvatar />
      <span className="outfit text-sm">cadaverinbloom</span>
    </Link>
  );
};

export default UserSearchResult;
