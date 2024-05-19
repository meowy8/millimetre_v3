import React from "react";

const SettingsToggle = ({ section, changeSection }) => {
  const handleClick = (changeSectionTo) => {
    changeSection(changeSectionTo);
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleClick("change-password")}
        className={`bg-[#001F24] border border-[#184249] p-4 w-full ${
          section === "change-password"
            ? "shadow-inner shadow-black"
            : "hover:bg-[#184249]"
        }`}
      >
        Change Password
      </button>
      <button
        onClick={() => handleClick("account-settings")}
        className={`bg-[#001F24] border border-[#184249] p-4 w-full ${
          section === "account-settings"
            ? "shadow-inner shadow-black hover:"
            : "hover:bg-[#184249]"
        }`}
      >
        Account
      </button>
    </div>
  );
};

export default SettingsToggle;
