"use client";
import React from "react";
import SignInToggle from "@/components/SignInToggle";
import SignUpForm from "@/components/SignUpForm";
import SignInForm from "@/components/SignInForm";
import CreateAccountForm from "@/components/CreateAccountForm";
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
        <CreateAccountForm toggleModal={() => setSignedUp(false)} />
      </Modal>
      <SignInToggle section={section} changeSection={changeSection} />
      {section === "signin" ? (
        <SignInForm />
      ) : (
        <SignUpForm setSignedUp={setSignedUp} signedUp={signedUp} />
      )}
    </section>
  );
};

export default SignIn;
