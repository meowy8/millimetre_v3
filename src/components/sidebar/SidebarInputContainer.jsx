import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SidebarInputContainer = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="border bg-transparent rounded-lg px-4 py-2 outline-none karlaRegular hover:bg-white/10 focus:bg-white/20"
        placeholder="Search for a film..."
      />
      <div className="absolute right-10">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SidebarInputContainer;
