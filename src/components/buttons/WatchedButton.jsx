import React from "react";
import ClosedEye from "../icons/ClosedEyeIcon";

const WatchedButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="border border-[#01442C] rounded-lg py-4 px-10 bg-[#0B0618] hover:bg-[#093425]"
    >
      <ClosedEye />
    </button>
  );
};

export default WatchedButton;
