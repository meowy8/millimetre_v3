import Link from "next/link";
import React from "react";

const CreateAccountBtn = () => {
  return (
    <Link
      href={"/signin"}
      className="bg-[#01442C] px-10 py-4 rounded-md border border-[#137150] w-56 karla hover:bg-[#137150]"
    >
      Create an Account
    </Link>
  );
};

export default CreateAccountBtn;
