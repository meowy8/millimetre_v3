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
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {userListResults && userListResults.length > 0 ? (
        userListResults.map((user: User) => (
          <UserSearchResult key={user._id} username={user.username} />
        ))
      ) : (
        <p>{noUsersFound}</p>
      )}
    </div>
  );
};

export default MembersSearchList;
