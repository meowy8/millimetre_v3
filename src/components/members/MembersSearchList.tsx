import React, { useEffect } from "react";
import UserSearchResult from "./UserSearchResult";
import { User } from "@/types/userTypes";
import Loading from "../Loading";

const MembersSearchList = ({
  userListResults,
  noUsersFound,
  loading,
}: {
  userListResults: User[] | null;
  noUsersFound: string;
  loading: boolean;
}) => {
  // console.log("userListResults", userListResults);
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {loading && <Loading />}
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
