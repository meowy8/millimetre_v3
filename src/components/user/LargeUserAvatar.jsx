import React from "react";
import Image from "next/image";

const LargeUserAvatar = ({ user }) => {
  return (
    <Image
      src={user.profileImage}
      alt="note"
      width={150}
      height={150}
      priority
      className="rounded-full border border-black object-cover md:w-36 md:h-36 w-24 h-24"
    />
  );
};

export default LargeUserAvatar;
