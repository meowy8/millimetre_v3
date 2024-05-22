import GeneralBtn from "@/components/buttons/GeneralBtn";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl font-bold karla">
        Sorry this page does not exist!
      </p>
      <div className="flex">
        <Link href={"/"}>
          <GeneralBtn text={"Go Home"} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
