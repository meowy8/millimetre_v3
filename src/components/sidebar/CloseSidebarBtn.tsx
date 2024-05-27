import React from "react";
import CloseSidebarIcon from "../icons/CloseSidebarIcon";

const CloseSidebarBtn = ({
  openSidebar,
  closeSidebar,
  showSidebar,
}: {
  openSidebar: () => void;
  closeSidebar: () => void;
  showSidebar: boolean;
}) => {
  const handleClick = () => {
    if (showSidebar) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };
  return (
    <button
      onClick={handleClick}
      className="border border-[#137150] rounded-md px-5 py-1 m-4 w-20 flex justify-center hover:bg-white/10"
    >
      <CloseSidebarIcon />
    </button>
  );
};

export default CloseSidebarBtn;
