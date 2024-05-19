import React from "react";

const GeneralInput = ({ placeholder, type }) => {
  return (
    <div className="relative w-full">
      <input
        className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default GeneralInput;
