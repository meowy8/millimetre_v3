"use client";
import Link from "next/link";
import React from "react";
import ProfileIcon from "./icons/ProfileIcon";
import Sidebar from "./sidebar/Sidebar";
import SearchInput from "./SearchInput";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <nav className="bg-[#0B0618] rounded-b-md shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-2">
        <Link href={"/"} className="oranienbaumRegular text-red-700 text-4xl">
          mm
        </Link>
        <div className="flex gap-4 lg:hidden ">
          {session?.user ? (
            <Link href={`/user/profile/${session?.user.username}`}>
              <div className="w-10 h-10">
                <Image
                  src={session?.user.profileImage}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </Link>
          ) : (
            <Link href={"/signin"} className="karla font-semibold">
              Sign In
            </Link>
          )}
          <Sidebar />
        </div>
        <div className="hidden lg:flex items-center gap-8 karla">
          <div className="flex gap-4 font-semibold">
            {session && (
              <Link href={`/user/profile/${session?.user.username}`}>
                Profile
              </Link>
            )}
            <Link href={"/"}>Home</Link>
            <Link href={"/members/memberSearch"}>Members</Link>
            {session && <Link href={"/settings"}>Settings</Link>}
            {session && <button onClick={() => signOut()}>Sign Out</button>}
            {!session && <Link href={"/signin"}>Sign In</Link>}
          </div>
          <SearchInput placeholder={"Search for a film..."} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
