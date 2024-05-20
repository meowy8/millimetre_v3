import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import GeneralInput from "../GeneralInput";

const SignUpForm = ({ setSignedUp, signedUp }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="karla text-3xl m-10">Sign Up</h1>
      <span className="karla mb-4 text-lg">Sign up with your email</span>
      <form action="" className="flex flex-col gap-6 items-center w-96">
        <GeneralInput placeholder="Enter your email address" type="email" />
        <GeneralInput placeholder="Enter your password" type={"password"} />
        <GeneralInput placeholder="Confirm your password" type={"password"} />
        <div className="flex justify-center w-32">
          <GeneralBtn text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
