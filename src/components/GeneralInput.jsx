import React from "react";
import SearchIcon from "./icons/SearchIcon";

const GeneralInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        className="border bg-transparent rounded-lg px-4 py-2 outline-none karlaRegular hover:bg-white/10 focus:bg-white/20 w-full"
        placeholder={placeholder}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default GeneralInput;
