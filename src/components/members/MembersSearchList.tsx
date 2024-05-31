import React from "react";
import UserSearchResult from "./UserSearchResult";
import { User } from "@/types/userTypes";

const MembersSearchList = ({
  userListResults,
  noUsersFound,
}: {
  userListResults: User[] | null;
  noUsersFound: string;
}) => {
  // console.log("userListResults", userListResults);
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {userListResults && userListResults.length > 0 ? (
        userListResults.map((user: User, index: number) => (
          <UserSearchResult
            key={index}
            username={user.username}
            profileImage={user.profileImage}
          />
        ))
      ) : (
        <p>{noUsersFound}</p>
      )}
    </div>
  );
};

export default MembersSearchList;
