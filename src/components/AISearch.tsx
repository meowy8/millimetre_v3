import React, { useEffect } from "react";
import { aiSearch } from "@/utils/aiSearch";
import { useSession } from "next-auth/react";
import { getUserAISearchCount } from "@/utils/dataFetching/userData";

const AISearch = ({
  handleAISearch,
  setLoading,
}: {
  handleAISearch: Function;
  setLoading: Function;
}) => {
  const [searchValue1, setSearchValue1] = React.useState("");
  const [searchValue2, setSearchValue2] = React.useState("");
  const [searchValue3, setSearchValue3] = React.useState("");
  const [searchesLeft, setSearchesLeft] = React.useState(0);

  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await aiSearch(
        searchValue1 + " " + searchValue2 + " " + searchValue3,
        session?.user?.name
      );

      handleAISearch(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchesLeft((prev) => prev - 1);
      setLoading(false);
    }

    setSearchValue1("");
    setSearchValue2("");
    setSearchValue3("");
  };

  useEffect(() => {
    (async () => {
      const response = await getUserAISearchCount(
        session?.user?.name as string
      );

      const sum = 3 - parseInt(response.aiSearchCount);
      setSearchesLeft(sum);
    })();
  }, [session?.user?.name, searchesLeft]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex flex-col gap-4 karla"
    >
      <h1>Search for a film by colour, texture, mood, etc. </h1>
      <span className="text-xs">(AI search uses left {searchesLeft})</span>
      <div className="flex flex-wrap md:flex-col gap-4 md:mr-8 w-full">
        <input
          className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
          type="text"
          placeholder={"noir..."}
          value={searchValue1}
          onChange={(e) => setSearchValue1(e.target.value)}
        />
        <input
          className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
          type="text"
          placeholder={"ambiguous..."}
          value={searchValue2}
          onChange={(e) => setSearchValue2(e.target.value)}
        />
        <input
          className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
          type="text"
          placeholder={"surreal..."}
          value={searchValue3}
          onChange={(e) => setSearchValue3(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="items-center karla text-sm py-2 px-4 border-2 border-[#184249] bg-[#001F24] rounded-md hover:bg-[#184249] hover:text-white md:w-32 w-full"
      >
        Go
      </button>
    </form>
  );
};

export default AISearch;
