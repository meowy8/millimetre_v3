"use client";
import React, { useEffect } from "react";
import UserSearchResult from "@/components/user/UserSearchResult";
import SearchInput from "@/components/SearchInput";
import { useParams } from "next/navigation";

const Members = () => {
  const [userListResults, setUserListResults] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [noUsersFound, setNoUsersFound] = React.useState("");

  const params = useParams();

  const fetchUsers = async (inputValue) => {
    try {
      const response = await fetch(
        `/api/v1/users/usersList?searchValue=${inputValue}`
      );
      const data = await response.json();
      // console.log(data);

      if (data.message === "Success") {
        setUserListResults(data.result);
      }

      if (data.result.length === 0) {
        setNoUsersFound("No users found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers(inputValue);
  };

  return (
    <section className="m-4">
      <div className="flex flex-col gap-4">
        <select
          name="filter"
          id="filter"
          className="bg-white/20 p-2 rounded-md hover:bg-white/30 border-[#FBF7F4] border w-32 text-sm"
        >
          <option value="search-by">Search by --</option>
          <option value="name">Name</option>
          <option value="fav-film">Favourite Film</option>
        </select>
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {userListResults && userListResults.length > 0 ? (
          userListResults.map((user: any) => (
            <UserSearchResult key={user._id} username={user.username} />
          ))
        ) : (
          <p>{noUsersFound}</p>
        )}
      </div>
    </section>
  );
};

export default Members;
