import GeneralBtn from "@/components/buttons/GeneralBtn";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="flex flex-col gap-4 mt-24 mx-10">
      <p className="text-2xl font-bold karla">
        Sorry this page does not exist!
      </p>
      <div className="flex">
        <Link href={"/"}>
          <GeneralBtn text={"Go Home"} />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
