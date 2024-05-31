import { FormInputType } from "@/types/formTypes";
import React from "react";

const FormInput = ({
  value,
  type,
  onChange,
  placeholder,
  demoRestricted,
}: FormInputType) => {
  return (
    <input
      disabled={demoRestricted}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
    />
  );
};

export default FormInput;
