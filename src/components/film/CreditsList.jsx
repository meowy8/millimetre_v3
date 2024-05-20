import React from "react";

const CreditsList = ({ showDetails, credits }) => {
  return (
    <div className={` flex-col gap-2 mt-2 ${showDetails ? "flex" : "hidden"}`}>
      {credits &&
        credits.map((credit) => (
          <div key={credit.credit_id} className="flex flex-col justify-between">
            <span>{credit.character || credit.job || "N/A"}</span>
            <span className="font-black">
              {credit.name ? credit.name : "N/A"}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CreditsList;
