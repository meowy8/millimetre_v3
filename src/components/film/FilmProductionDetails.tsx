"use client";
import React from "react";
import UpArrow from "../icons/UpArrow";
import DownArrow from "../icons/DownArrow";
import CreditsList from "./CreditsList";
import { Credits, FilmCredits } from "@/types/filmTypes";

// const FilmProductionDetails = ({
//   sectionName,
//   credits,
// }: {
//   sectionName: string;
//   credits: Credits[];
// }) => {
//   const [showDetails, setShowDetails] = React.useState(false);

//   // shows or hides credits
//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="karla">
//       <button
//         onClick={toggleDetails}
//         className="flex justify-between items-center w-full"
//       >
//         <span className="font-semibold text-lg">{sectionName}</span>
//         <span>{showDetails ? <DownArrow /> : <UpArrow />}</span>
//       </button>
//       <hr />
//       <CreditsList
//         showDetails={showDetails}
//         credits={credits}
//         setShowDetails={setShowDetails}
//       />
//     </div>
//   );
// };

const FilmProductionDetails = ({
  filmCredits,
}: {
  filmCredits: FilmCredits;
}) => {
  const [creditsSection, setCreditsSection] = React.useState<string>("cast");

  const handleSection = (creditsSection: string) => {
    setCreditsSection(creditsSection);
  };

  return (
    <section className="karla mt-10">
      <div className="flex gap-8 text-lg font-semibold">
        <button
          onClick={() => handleSection("cast")}
          className={`relative ${
            creditsSection === "cast" ? "text-[#dd4040]" : ""
          }`}
        >
          Cast
          {creditsSection === "cast" && (
            <hr className="absolute z-10 -bottom-2 w-full border-[#dd4040] border-y-2" />
          )}
        </button>
        <button
          onClick={() => handleSection("crew")}
          className={`relative ${
            creditsSection === "crew" ? "text-[#dd4040]" : ""
          }`}
        >
          Crew
          {creditsSection === "crew" && (
            <hr className="absolute z-10 -bottom-2 w-full border-[#dd4040] border-y-2" />
          )}
        </button>
      </div>
      <hr className="w-full opacity-50 mt-1 mb-4" />
      <CreditsList
        credits={
          creditsSection === "cast" ? filmCredits.cast : filmCredits.crew
        }
      />
    </section>
  );
};

export default FilmProductionDetails;
