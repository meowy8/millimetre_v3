import React from "react";
import Image from "next/image";

const MediumUserAvatar = ({ profileImage }) => {
  return (
    <div className="w-24 h-24">
      <Image
        src={profileImage}
        alt="profile image"
        width={100}
        height={200}
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

export default MediumUserAvatar;
