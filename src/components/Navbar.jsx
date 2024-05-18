import Link from "next/link";
import React from "react";
import ProfileIcon from "./icons/ProfileIcon";
import BurgerBars from "./icons/BurgerBars";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="bg-[#0B0618] flex justify-between items-center px-6 py-4 rounded-b-md shadow-xl fixed top-0 left-0 right-0">
      <Link href={"/"} className="oranienbaumRegular text-4xl">
        mm
      </Link>
      <div className="flex gap-4">
        <Link href={"#"}>
          <ProfileIcon />
        </Link>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
