import React from "react";
import XIcon from "./icons/XIcon";

const CloseModalBtn = ({ toggleModal }) => {
  const handleClick = () => {
    toggleModal();
  };
  return (
    <button onClick={handleClick}>
      <XIcon />
    </button>
  );
};

export default CloseModalBtn;
