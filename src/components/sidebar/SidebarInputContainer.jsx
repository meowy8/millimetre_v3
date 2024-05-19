import React from "react";
import SearchInput from "../SearchInput";

const SidebarInputContainer = () => {
  return (
    <div className="flex items-center justify-center">
      <SearchInput placeholder={"Search for a film"} />
    </div>
  );
};

export default SidebarInputContainer;
