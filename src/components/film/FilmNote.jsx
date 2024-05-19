import React from "react";
import SmallUserAvatar from "../SmallUserAvatar";
import Link from "next/link";

const FilmNote = () => {
  return (
    <div className="bg-[#001F24] w-full h-48 rounded-md border border-[#184249] karla p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-end">
          <Link href={"#"}>
            <SmallUserAvatar />
          </Link>
          <Link href={"#"} className="text-white outfit font-semibold">
            cadaverinbloom
          </Link>
        </div>
        <div>
          <span className="italic font-light text-sm">12 May 2024</span>
        </div>
      </div>
      <Link href={"#"}>
        <p className=" line-clamp-4 hover:opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Link>
    </div>
  );
};

export default FilmNote;
