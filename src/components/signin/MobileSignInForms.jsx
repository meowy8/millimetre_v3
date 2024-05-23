import React from "react";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";

const MobileSignInForms = ({
  section,
  setSignedUp,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
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
