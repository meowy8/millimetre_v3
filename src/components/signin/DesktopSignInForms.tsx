import React from "react";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { SignInFormProps } from "@/types/propTypes";

const DesktopSignInForms = ({
  setSignedUp,
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
}: SignInFormProps) => {
  return (
    <>
      <SignUpForm
        setSignedUp={setSignedUp}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />
      <div className="border-r border-[#FBF7F4]"></div>
      <SignInForm />
    </>
  );
};

export default DesktopSignInForms;
