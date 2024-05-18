import React from "react";
import ClosedEye from "./icons/ClosedEyeIcon";

const WatchedButton = () => {
  return (
    <button className="border border-[#01442C] rounded-lg py-4 px-10 hover:bg-[#093425]">
      <ClosedEye />
    </button>
  );
};

export default WatchedButton;
