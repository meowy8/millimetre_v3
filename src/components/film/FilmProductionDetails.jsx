"use client";
import React from "react";
import UpArrow from "../icons/UpArrow";
import DownArrow from "../icons/DownArrow";
import CreditsList from "./CreditsList";

const FilmProductionDetails = ({ sectionName }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="karla">
      <button
        onClick={toggleDetails}
        className="flex justify-between items-center w-full"
      >
        <span className="font-semibold text-lg">{sectionName}</span>
        <span>{showDetails ? <DownArrow /> : <UpArrow />}</span>
      </button>
      <hr />
      <CreditsList showDetails={showDetails} />
    </div>
  );
};

export default FilmProductionDetails;
