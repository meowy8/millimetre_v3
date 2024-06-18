import React from "react";

const AISearch = ({ placeholder }: { placeholder: string }) => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <input
      className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
      type="text"
      placeholder={placeholder}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default AISearch;
