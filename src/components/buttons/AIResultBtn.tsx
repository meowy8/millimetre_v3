import React from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";

const AIResultBtn = ({ film, index }: { film: any; index: number }) => {
  const router = useRouter();

  const handleClick = async () => {
    return router.push(`/search?searchValue=${film.title.replace(/\s/g, "-")}`);
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-[#201235] w-full border-b border-[#FBF7F4] p-4 flex flex-col  gap-4"
      id={film.title}
    >
      <div className="flex gap-4 items-center">
        <h1 className="text-lg outfit">{film.title}</h1>
        <span>{film.release_date}</span>
      </div>
      <div className="w-full">
        <p className="text-left">{film.synopsis}</p>
      </div>
      <div className="flex gap-2 justify-between w-full">
        <div className="flex gap-2">
          {film?.colors?.map((color: string, index: number) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full"
            ></div>
          ))}
        </div>
        <div className="flex gap-2">
          {film?.themes?.map((theme: string, index: number) => (
            <p
              key={index}
              className="p-1 bg-[#201235] rounded-md border text-sm font-light"
            >
              {theme}
            </p>
          ))}
        </div>
      </div>
    </button>
  );
};

export default AIResultBtn;
