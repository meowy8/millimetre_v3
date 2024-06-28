"use client";
import React from "react";
import SignInToggle from "@/components/buttons/SignInToggle";
import CreateAccountForm from "@/components/forms/CreateAccountForm";
import Modal from "@/components/Modal";
import MobileSignInForms from "@/components/signin/MobileSignInForms";
import DesktopSignInForms from "@/components/signin/DesktopSignInForms";

const SignIn = () => {
  const [section, setSection] = React.useState("signin");
  const [signedUp, setSignedUp] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // changes section of sign up/sign in page
  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="mt-24 flex flex-col justify-center items-center">
      <Modal showModal={signedUp}>
        <CreateAccountForm
          email={email}
          password={password}
          toggleModal={() => setSignedUp(false)}
          toggleCreateAccountModal={() => setSignedUp(false)}
        />
      </Modal>
      <div className="lg:hidden w-full">
        <SignInToggle section={section} changeSection={changeSection} />
      </div>
      <div className="lg:hidden">
        <MobileSignInForms
          {...{
            email,
            password,
            confirmPassword,
            setEmail,
            setPassword,
            setConfirmPassword,
            setSignedUp,
            section,
          }}
        />
      </div>
      <div className="hidden lg:flex justify-between max-w-[1000px] w-full">
        <DesktopSignInForms
          {...{
            email,
            password,
            confirmPassword,
            setEmail,
            setPassword,
            setConfirmPassword,
            setSignedUp,
            section,
          }}
        />
      </div>
    </section>
  );
};

export default SignIn;
