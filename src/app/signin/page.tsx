"use client";
import React from "react";
import SignInToggle from "@/components/buttons/SignInToggle";
import SignUpForm from "@/components/forms/SignUpForm";
import SignInForm from "@/components/forms/SignInForm";
import CreateAccountForm from "@/components/forms/CreateAccountForm";
import Modal from "@/components/Modal";

const SignIn = () => {
  const [section, setSection] = React.useState("signup");
  const [signedUp, setSignedUp] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="">
      <Modal showModal={signedUp}>
        <CreateAccountForm
          email={email}
          password={password}
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
      </div>
      <div className="hidden lg:flex justify-between">
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
      </div>
    </section>
  );
};

export default SignIn;
