import React from "react";
import Image from "next/image";

const SmallUserAvatar = ({ profileImage }) => {
  return (
    <div className="w-[50px] h-[50px]">
      <Image
        src={profileImage}
        alt="note"
        width={50}
        height={50}
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

export default SmallUserAvatar;
