import React from "react";

const GeneralBtn = ({ text }: { text: string }) => {
  return (
    <button className="karla border border-[#184249] px-4 py-2 bg-[#001F24] rounded-md hover:bg-[#184249] w-full">
      {text}
    </button>
  );
};

export default GeneralBtn;
