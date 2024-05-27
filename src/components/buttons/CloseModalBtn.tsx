import React from "react";
import XIcon from "../icons/XIcon";

const CloseModalBtn = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button type="button" onClick={handleClick}>
      <XIcon />
    </button>
  );
};

export default CloseModalBtn;
