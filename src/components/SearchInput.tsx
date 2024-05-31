"use client";
import React from "react";
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from "next/navigation";

const SearchInput = ({
  placeholder,
  closeSidebar,
}: {
  placeholder: string;
  closeSidebar: () => void;
}) => {
  const [searchValue, setSearchValue] = React.useState("");

  const router = useRouter();

  // redirects to search page with search value
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue) return;

    closeSidebar();
    router.push(`/search/${searchValue.replace(/\s/g, "-")}`);
  };

  return (
    <form onSubmit={handleSubmit} action="submit" className="relative">
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
        placeholder={placeholder}
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
