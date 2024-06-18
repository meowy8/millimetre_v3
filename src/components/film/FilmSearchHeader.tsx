import React from "react";
import SearchInput from "../SearchInput";
import SparkleIcon from "../icons/SparkleIcon";
import AISearchInput from "../AISearch";

const FilmSearchHeader = ({ searchValue }: { searchValue: string }) => {
  const [smartSearch, setSmartSearch] = React.useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-start mb-8 gap-4">
        {!smartSearch ? (
          <SearchInput placeholder={"Search for a film"} />
        ) : (
          <AISearchInput placeholder={"dark, noir, ambiguous, ..."} />
        )}
        <button
          onClick={() => setSmartSearch(!smartSearch)}
          className="flex gap-2 items-center karla text-sm p-2 border-2 border-[#184249] bg-[#001F24] rounded-md hover:bg-[#184249] hover:text-white"
        >
          Search with AI
          <SparkleIcon />
        </button>
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
