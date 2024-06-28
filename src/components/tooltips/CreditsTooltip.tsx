import React from "react";

const CreditsTooltip = ({ role }: { role: string }) => {
  return (
    <span className="karla absolute -top-[110%] w-max bg-[#174048] text-white px-2 py-1 rounded-md font-bold">
      {role}
    </span>
  );
};

export default CreditsTooltip;
