import React, { useEffect } from "react";
import { aiSearch } from "@/utils/aiSearch";

const AISearch = ({ handleAISearch }: { handleAISearch: Function }) => {
  const [searchValue1, setSearchValue1] = React.useState("");
  const [searchValue2, setSearchValue2] = React.useState("");
  const [searchValue3, setSearchValue3] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await aiSearch(
        searchValue1 + " " + searchValue2 + " " + searchValue3
      );

      handleAISearch(response);
    } catch (error) {
      console.log(error);
    }

    setSearchValue1("");
    setSearchValue2("");
    setSearchValue3("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex flex-col gap-4"
    >
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 "
        type="text"
        placeholder={"noir..."}
        value={searchValue1}
        onChange={(e) => setSearchValue1(e.target.value)}
      />
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20"
        type="text"
        placeholder={"ambiguous..."}
        value={searchValue2}
        onChange={(e) => setSearchValue2(e.target.value)}
      />
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20"
        type="text"
        placeholder={"surreal..."}
        value={searchValue3}
        onChange={(e) => setSearchValue3(e.target.value)}
      />

      <button
        type="submit"
        className="flex gap-2 items-center karla text-sm py-2 px-4 border-2 border-[#184249] bg-[#001F24] rounded-md hover:bg-[#184249] hover:text-white"
      >
        Go
      </button>
    </form>
  );
};

export default AISearch;
