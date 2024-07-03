import React from "react";
import SearchInput from "../SearchInput";

const SidebarInputContainer = ({ closeSidebar }) => {
  return (
    <div
      onSubmit={closeSidebar}
      className="flex items-center justify-center mx-4"
    >
      <SearchInput placeholder={"Search for a film"} />
    </div>
  );
};

export default SidebarInputContainer;
