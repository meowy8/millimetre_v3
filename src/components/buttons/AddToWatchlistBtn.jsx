import React from "react";
import AddToWatchlistIcon from "../icons/AddToWatchlistIcon";

const AddToWatchlistBtn = () => {
  return (
    <button className="border border-[#197CD7] rounded-lg p-4 bg-[#0B0618] hover:bg-[#0B355B]">
      <AddToWatchlistIcon />
    </button>
  );
};

export default AddToWatchlistBtn;
