import React from "react";

const EmptyBackdrop = () => {
  return (
    <div className="relative max-w-[1000px] -z-10 w-full h-[300px] rounded-lg bg-[#121021]">
      <div className="flex justify-center">
        <div className="bg-[#0B0618] w-screen lg:w-[1000px] h-[30%] absolute top-[90%] blur-md"></div>
      </div>
    </div>
  );
};

export default EmptyBackdrop;
