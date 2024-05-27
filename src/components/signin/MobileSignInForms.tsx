import React from "react";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { SignInFormPropsMobile } from "@/types/propTypes";

const MobileSignInForms = ({
  section,
  setSignedUp,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: SignInFormPropsMobile) => {
  return (
    <>
      {section === "signin" ? (
        <SignInForm />
      ) : (
        <SignUpForm
          setSignedUp={setSignedUp}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
      )}
    </>
  );
};

export default MobileSignInForms;
