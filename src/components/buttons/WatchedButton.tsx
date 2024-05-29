import React from "react";
import ClosedEye from "../icons/ClosedEyeIcon";

const WatchedButton = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <button
      onClick={closeModal}
      className="border border-[#01442C] rounded-lg py-4 px-10 bg-[#0B0618] hover:bg-[#093425]"
    >
      <ClosedEye />
    </button>
  );
};

export default WatchedButton;
