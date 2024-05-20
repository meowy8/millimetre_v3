import React from "react";
import XIcon from "../icons/XIcon";

const CloseModalBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <XIcon />
    </button>
  );
};

export default CloseModalBtn;
