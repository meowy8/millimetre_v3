"use client";
import React, { useEffect } from "react";
import MembersSearchList from "@/components/members/MembersSearchList";
import MembersSearchHeader from "@/components/members/MembersSearchHeader";
import { useParams } from "next/navigation";
import { fetchUserSearch } from "@/utils/dataFetching/userData";

const Members = () => {
  const [userListResults, setUserListResults] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [noUsersFound, setNoUsersFound] = React.useState("");

  const params = useParams();

  useEffect(() => {
    (async () => setUserListResults(await fetchUserSearch(inputValue)))();
  }, [inputValue]);

  // fetch user search results on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch user search results
    (async () => setUserListResults(await fetchUserSearch(inputValue)))();

    // if no users found
    if (userListResults.length === 0) {
      setNoUsersFound("No users found");
    }
  };

  return (
    <section className="m-4">
      <MembersSearchHeader
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <MembersSearchList
        userListResults={userListResults}
        noUsersFound={noUsersFound}
      />
    </section>
  );
};

export default Members;
