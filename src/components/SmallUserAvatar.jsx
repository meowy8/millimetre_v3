import React from "react";
import Image from "next/image";

const SmallUserAvatar = () => {
  return (
    <Image
      src={"/images/profilePicture.jpg"}
      alt="note"
      width={50}
      height={50}
      className="rounded-full"
    />
  );
};

export default SmallUserAvatar;
