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

const FilmProductionDetails = ({ filmCredits }) => {
  const [creditsSection, setCreditsSection] = React.useState<string>("cast");

  const handleSection = (creditsSection: string) => {
    setCreditsSection(creditsSection);
  };

  return (
    <section className="karla mt-10">
      <div className="flex gap-8 text-lg font-semibold">
        <button
          onClick={() => handleSection("cast")}
          className={` ${creditsSection === "cast" ? "font-black" : ""}`}
        >
          Cast
        </button>
        <button
          onClick={() => handleSection("crew")}
          className={creditsSection === "crew" ? "font-black" : ""}
        >
          Crew
        </button>
      </div>
      <hr />
      <CreditsList
        credits={
          creditsSection === "cast" ? filmCredits.cast : filmCredits.crew
        }
      />
    </section>
  );
};

export default FilmProductionDetails;
