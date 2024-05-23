import React from "react";
import UserSearchResult from "./UserSearchResult";

const MembersSearchList = ({ userListResults, noUsersFound }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {userListResults && userListResults.length > 0 ? (
        userListResults.map((user) => (
          <UserSearchResult key={user._id} username={user.username} />
        ))
      ) : (
        <p>{noUsersFound}</p>
      )}
    </div>
  );
};

export default MembersSearchList;
