import React from "react";
import LargeUserAvatar from "./LargeUserAvatar";
import UserBackdrop from "./UserBackdrop";
import EmptyBackdrop from "../film/EmptyBackdrop";
import { User } from "@/types/userTypes";
import EmptyUserBackdrop from "./EmptyUserBackdrop";

const UserBanner = ({
  user,
  userBackdrop,
}: {
  user: User;
  userBackdrop: string;
}) => {
  return (
    <div className="flex mt-16 items-end mx-4 w-full max-w-[900px]">
      {user.profileImage && (
        <div className="absolute p-1 m-2 md:m-4 bg-[#0B0618] rounded-xl border-4 border-black z-10 shadow-sm shadow-black">
          <LargeUserAvatar user={user} />
        </div>
      )}
      {userBackdrop ? (
        <UserBackdrop userBackdrop={userBackdrop} />
      ) : (
        <EmptyUserBackdrop />
      )}
    </div>
  );
};

export default UserBanner;
