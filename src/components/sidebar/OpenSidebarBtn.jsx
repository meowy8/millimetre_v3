import React from "react";
import BurgerBars from "../icons/BurgerBars";

const OpenSidebarBtn = ({ openSidebar, closeSidebar, showSidebar }) => {
  const handleClick = () => {
    if (showSidebar) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <button onClick={handleClick}>
      <BurgerBars />
    </button>
  );
};

export default OpenSidebarBtn;
