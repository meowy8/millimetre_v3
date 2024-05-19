import React from "react";
import Image from "next/image";

const MediumUserAvatar = () => {
  return (
    <Image
      src={"/images/profilePicture.jpg"}
      alt="note"
      width={100}
      height={100}
      className="rounded-full"
    />
  );
};

export default MediumUserAvatar;
