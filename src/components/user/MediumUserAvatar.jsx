import React from "react";
import Image from "next/image";

const MediumUserAvatar = () => {
  return (
    <div className="w-24 h-24">
      <Image
        src={"/images/profilePicture.jpg"}
        alt="note"
        width={100}
        height={200}
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

export default MediumUserAvatar;
