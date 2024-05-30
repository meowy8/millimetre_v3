import React from "react";
import Image from "next/image";

const LargeUserAvatar = ({ user }) => {
  return (
    <Image
      src={user.profileImage}
      alt="note"
      width={150}
      height={150}
      className="rounded-full border border-black object-cover w-36 h-36"
    />
  );
};

export default LargeUserAvatar;
