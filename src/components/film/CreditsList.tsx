import React from "react";
import { CreditsListProps } from "@/types/propTypes";
import { Credits } from "@/types/filmTypes";
import CreditsTooltip from "../tooltips/CreditsTooltip";
import CreditBtn from "./CreditBtn";

// const CreditsList = ({
//   showDetails,
//   credits,
// }: // setShowDetails,
// CreditsListProps) => {
//   return (
//     <div
//       // onClick={() => setShowDetails(!showDetails)}
//       className={`flex flex-col gap-2 mt-2 justify-between ${
//         showDetails ? "flex" : "hidden"
//       }`}
//     >
//       {credits &&
//         credits.map((credit: Credits) => (
//           <div key={credit.credit_id} className="flex flex-col">
//             <span className="underline max-w-24">
//               {credit.character || credit.job || "N/A"}
//             </span>
//             <span className="font-black">
//               {credit.name ? credit.name : "N/A"}
//             </span>
//           </div>
//         ))}
//     </div>
//   );
// };

const CreditsList = ({ credits }: CreditsListProps) => {
  return (
    <div className="flex flex-wrap px-2 pt-4 text-sm">
      {credits &&
        credits.map((credit: Credits) => (
          <CreditBtn key={credit.credit_id} credit={credit} />
        ))}
    </div>
  );
};

export default CreditsList;
