import React from "react";
import AddToWatchlistIcon from "../icons/AddToWatchlistIcon";

const AddToWatchlistBtn = ({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlistButton,
}) => {
  return (
    <>
      {!watchlistButton ? (
        <button
          onClick={handleAddToWatchlist}
          className="border border-[#197CD7] rounded-lg p-4 bg-[#0B0618] hover:bg-[#0B355B]"
        >
          <AddToWatchlistIcon />
        </button>
      ) : (
        <button
          onClick={handleRemoveFromWatchlist}
          className="border rounded-lg p-4 bg-[#412685] hover:bg-[#5b0b0b]"
        >
          <AddToWatchlistIcon />
        </button>
      )}
    </>
  );
};

export default AddToWatchlistBtn;
