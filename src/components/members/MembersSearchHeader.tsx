import React from "react";

const MembersSearchHeader = ({
  setInputValue,
  handleSubmit,
  inputValue,
}: {
  setInputValue: Function;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* <select
        name="filter"
        id="filter"
        className="bg-white/20 p-2 rounded-md hover:bg-white/30 border-[#FBF7F4] border w-32 text-sm"
      >
        <option value="search-by">Search by --</option>
        <option value="name">Name</option>
        <option value="fav-film">Favourite Film</option>
      </select> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a member..."
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white/20 p-2 rounded-md hover:bg-white/30 border-[#FBF7F4] border w-full"
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default MembersSearchHeader;
