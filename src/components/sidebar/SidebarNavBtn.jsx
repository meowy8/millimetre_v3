import Link from "next/link";
import React from "react";

const SidebarNavBtn = ({ icon, name, closeSidebar, urlPath }) => {
  const handleClick = () => {
    closeSidebar();
  };
  return (
    <Link
      href={urlPath}
      className="flex items-center gap-4 bg-[#001F24] border border-[#184249] rounded-sm px-4 py-2 hover:bg-[#184249]"
      onClick={handleClick}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default SidebarNavBtn;
