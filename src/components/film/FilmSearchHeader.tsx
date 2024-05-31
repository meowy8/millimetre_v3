import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import SearchInput from "../SearchInput";

const FilmSearchHeader = ({ searchValue }: { searchValue: string }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col mb-8">
        <SearchInput placeholder={"Search for a film"} />
      </div>
      <div className="flex flex-col w-full">
        <span className="karla">Results for...</span>
        <span className="outfit text-3xl">
          {searchValue.replace(/-/g, " ")}
        </span>
      </div>
      {/* <div className="w-full">
        <GeneralBtn text={"Show archived"} />
      </div> */}
    </div>
  );
};

export default FilmSearchHeader;
