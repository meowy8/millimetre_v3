import React from "react";
import GeneralBtn from "./GeneralBtn";
import GeneralInput from "./GeneralInput";
import CreateAccount from "./CreateAccount";

const SignUpForm = ({ setSignedUp, signedUp }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="karla text-3xl m-10">Sign Up</h1>
      <span className="karla mb-4 text-lg">Sign up with your email</span>
      <form action="" className="flex flex-col gap-6 items-center w-96">
        <GeneralInput placeholder="Enter your email address" type="email" />
        <GeneralInput placeholder="Enter your password" type={"password"} />
        <GeneralInput placeholder="Confirm your password" type={"password"} />
        <GeneralBtn text="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
