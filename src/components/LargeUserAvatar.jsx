import React from "react";
import Image from "next/image";

const LargeUserAvatar = () => {
  return (
    <Image
      src={"/images/profilePicture.jpg"}
      alt="note"
      width={150}
      height={150}
      className="rounded-full border border-black"
    />
  );
};

export default LargeUserAvatar;
