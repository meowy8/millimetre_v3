import React from "react";
import ClosedEye from "../icons/ClosedEyeIcon";

const WatchedButton = ({
  closeModal,
  watchedButton,
}: {
  closeModal: () => void;
  watchedButton: boolean;
}) => {
  return (
    <>
      {!watchedButton ? (
        <button
          onClick={closeModal}
          className="border border-[#01442C] rounded-lg py-4 px-10 bg-[#0B0618] hover:bg-[#093425]"
        >
          <ClosedEye />
        </button>
      ) : (
        <span className="border border-[#01442C] rounded-lg py-4 px-10 bg-[#0B0618] flex items-center karla ">
          Watched
        </span>
      )}
    </>
  );
};

export default WatchedButton;
