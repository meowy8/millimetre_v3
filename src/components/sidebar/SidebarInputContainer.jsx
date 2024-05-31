import React from "react";
import SearchInput from "../SearchInput";

const SidebarInputContainer = ({ closeSidebar }) => {
  return (
    <div className="flex items-center justify-center">
      <SearchInput
        placeholder={"Search for a film"}
        closeSidebar={closeSidebar}
      />
    </div>
  );
};

export default SidebarInputContainer;
