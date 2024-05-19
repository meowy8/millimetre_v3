import React from "react";
import UserSearchResult from "@/components/user/UserSearchResult";
import SearchInput from "@/components/SearchInput";

const Members = () => {
  return (
    <section className="m-4 mt-24">
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
        <SearchInput placeholder={"Search for members..."} />
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        <UserSearchResult />
        <UserSearchResult />
        <UserSearchResult />
        <UserSearchResult />
        <UserSearchResult />
        <UserSearchResult />
        <UserSearchResult />
      </div>
    </section>
  );
};

export default Members;
