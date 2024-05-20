import Link from "next/link";
import React from "react";
import ProfileIcon from "./icons/ProfileIcon";
import Sidebar from "./sidebar/Sidebar";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-[#0B0618] rounded-b-md shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-end px-6 py-4 max-w-[1440px] mx-auto">
        <Link href={"/"} className="oranienbaumRegular text-4xl">
          mm
        </Link>
        <div className="flex gap-4 lg:hidden">
          <Link href={"#"}>
            <ProfileIcon />
          </Link>
          <Sidebar />
        </div>
        <div className="hidden lg:flex items-center gap-8 karla">
          <div className="flex gap-4  font-semibold">
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/members"}>Members</Link>
            <Link href={"/settings"}>Settings</Link>
          </div>
          <SearchInput placeholder={"Search for a film..."} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
