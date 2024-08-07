"use client";
import React from "react";
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from "next/navigation";

const SearchInput = ({
  placeholder,
  setPage,
}: {
  placeholder: string;
  setPage: Function;
}) => {
  const [searchValue, setSearchValue] = React.useState("");

  const router = useRouter();

  // redirects to search page with search value
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue) return;

    setPage(1);

    router.push(`/search?searchValue=${searchValue.replace(/\s/g, "-")}`);
  };

  return (
    <form
      id="searchForm"
      onSubmit={handleSubmit}
      action="submit"
      className="relative w-full"
    >
      <input
        placeholder={placeholder}
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-1 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchInput;
