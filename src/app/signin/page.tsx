"use client";
import React from "react";
import SignInToggle from "@/components/buttons/SignInToggle";
import SignUpForm from "@/components/forms/SignUpForm";
import SignInForm from "@/components/forms/SignInForm";
import CreateAccountForm from "@/components/forms/CreateAccountForm";
import Modal from "@/components/Modal";

const SignIn = () => {
  const [section, setSection] = React.useState("signup");
  const [signedUp, setSignedUp] = React.useState(true);

  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="mt-28">
      <Modal showModal={signedUp}>
        <CreateAccountForm
          toggleModal={() => setSignedUp(false)}
          toggleCreateAccountModal={() => setSignedUp(false)}
        />
      </Modal>
      <div className="lg:hidden">
        <SignInToggle section={section} changeSection={changeSection} />
      </div>
      <div className="lg:hidden">
        {section === "signin" ? (
          <SignInForm />
        ) : (
          <SignUpForm setSignedUp={setSignedUp} signedUp={signedUp} />
        )}
      </div>
      <div className="hidden lg:flex justify-between">
        <SignUpForm setSignedUp={setSignedUp} signedUp={signedUp} />
        <div className="border-r border-[#FBF7F4]"></div>
        <SignInForm />
      </div>
    </section>
  );
};

export default SignIn;
