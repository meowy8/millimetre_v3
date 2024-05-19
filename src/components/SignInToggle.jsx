import React from "react";

const SignInToggle = ({ section, changeSection }) => {
  const handleClick = (changeSectionTo) => {
    changeSection(changeSectionTo);
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleClick("signup")}
        className={`bg-[#001F24] border border-[#184249] p-4 w-full ${
          section === "signup"
            ? "shadow-inner shadow-black"
            : "hover:bg-[#184249]"
        }`}
      >
        Sign Up
      </button>
      <button
        onClick={() => handleClick("signin")}
        className={`bg-[#001F24] border border-[#184249] p-4 w-full ${
          section === "signin"
            ? "shadow-inner shadow-black hover:"
            : "hover:bg-[#184249]"
        }`}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInToggle;
