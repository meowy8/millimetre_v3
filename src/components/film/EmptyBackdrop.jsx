import React from "react";

const EmptyBackdrop = () => {
  return (
    <div className="relative max-w-[900px] -z-0 w-full h-[400px] rounded-lg bg-[#121021] mt-16">
      <div className="flex justify-center">
        <div className="bg-[#0B0618] w-screen lg:w-[1000px] h-[30%] absolute top-[90%] blur-md"></div>
      </div>
    </div>
  );
};

export default EmptyBackdrop;
