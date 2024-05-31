import React from "react";
import { CreditsListProps } from "@/types/propTypes";
import { Credits } from "@/types/filmTypes";

const CreditsList = ({
  showDetails,
  credits,
  setShowDetails,
}: CreditsListProps) => {
  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      className={`flex flex-col gap-2 mt-2 justify-between ${
        showDetails ? "flex" : "hidden"
      }`}
    >
      {credits &&
        credits.map((credit: Credits) => (
          <div key={credit.credit_id} className="flex flex-col">
            <span className="underline">
              {credit.character || credit.job || "N/A"}
            </span>
            <span className="font-black">
              {credit.name ? credit.name : "N/A"}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CreditsList;
