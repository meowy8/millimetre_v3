import React from "react";
import CreditsTooltip from "../tooltips/CreditsTooltip";
import { Credits } from "@/types/filmTypes";

const CreditBtn = ({ credit }: { credit: Credits }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      key={credit.credit_id}
      className="relative text-md mr-2 mb-2 karla border border-[#184249] px-2 py-1 bg-[#001F24] rounded-md hover:bg-[#184249] flex flex-col items-center"
    >
      {showTooltip && <CreditsTooltip role={credit.character || credit.job} />}
      {credit.name}
    </button>
  );
};

export default CreditBtn;
