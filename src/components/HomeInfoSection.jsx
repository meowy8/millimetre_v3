import Image from "next/image";
import React from "react";

const HomeInfoSection = () => {
  return (
    <div className="bg-[#560A38]/25 rounded-2xl flex p-4 gap-4 items-center">
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/images/cigarette.jpg"
          alt="cigarette"
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>
      <p className="flex flex-col gap-2 karlaRegular">
        <span className="block">
          The focus of Millimetre is to discover new and lesser seen films.
        </span>
        <span className="block">
          When a film becomes popular enough, it becomes archived but you can
          still view it and add notes and lists.
        </span>
      </p>
    </div>
  );
};

export default HomeInfoSection;
