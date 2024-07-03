import React from "react";
import SearchInput from "../SearchInput";
import NavSearch from "../NavSearch";

const SidebarInputContainer = ({ closeSidebar }) => {
  return (
    <div
      onSubmit={closeSidebar}
      className="flex items-center justify-center mx-4"
    >
      <NavSearch placeholder={"Search for a film"} />
    </div>
  );
};

export default SidebarInputContainer;
