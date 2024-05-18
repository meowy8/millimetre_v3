import React from "react";
import SearchIcon from "../icons/SearchIcon";
import GeneralInput from "../GeneralInput";

const SidebarInputContainer = () => {
  return (
    <div className="flex items-center justify-center">
      <GeneralInput placeholder={"Search for a film"} />
    </div>
  );
};

export default SidebarInputContainer;
