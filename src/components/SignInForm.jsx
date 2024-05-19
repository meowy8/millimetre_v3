import React from "react";
import GeneralBtn from "./GeneralBtn";
import GeneralInput from "./GeneralInput";

const SignInForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="karla text-3xl m-10">Sign In</h1>
      <span className="karla text-md mb-2">Already have an account?</span>
      <span className="karla mb-4 text-lg">Sign in with your email</span>
      <form action="" className="flex flex-col gap-6 items-center w-96">
        <GeneralInput placeholder="Enter your email address" type="email" />
        <GeneralInput placeholder="Enter your password" type={"password"} />
        <GeneralBtn text="Sign in" />
      </form>
    </div>
  );
};

export default SignInForm;
