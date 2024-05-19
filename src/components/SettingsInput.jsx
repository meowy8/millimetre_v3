import React from "react";
import SearchIcon from "./icons/SearchIcon";

const SettingsInput = () => {
  return (
    <div className="relative">
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SettingsInput;
