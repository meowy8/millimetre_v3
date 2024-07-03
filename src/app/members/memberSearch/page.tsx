"use client";
import React, { useEffect } from "react";
import MembersSearchList from "@/components/members/MembersSearchList";
import MembersSearchHeader from "@/components/members/MembersSearchHeader";
import { useParams } from "next/navigation";
import { fetchUserSearch } from "@/utils/dataFetching/userData";
import Loading from "@/components/Loading";

const Members = () => {
  const [userListResults, setUserListResults] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [noUsersFound, setNoUsersFound] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const params = useParams();

  useEffect(() => {
    try {
      setLoading(true);
      // fetch user search results
      (async () => setUserListResults(await fetchUserSearch(inputValue)))();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
    <section className="m-4 mt-32 max-w-[900px] mx-auto px-4">
      <MembersSearchHeader
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <MembersSearchList
        userListResults={userListResults}
        noUsersFound={noUsersFound}
        loading={loading}
      />
    </section>
  );
};

export default Members;
