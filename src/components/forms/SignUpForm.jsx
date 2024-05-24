import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import FormInput from "../FormInput";

const SignUpForm = ({
  setSignedUp,
  email,
  setEmail,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}) => {
  const [differentPasswords, setdifferentPasswords] = React.useState(false);
  const [emptyEmail, setEmptyEmail] = React.useState(false);
  const [emptyPassword, setEmptyPassword] = React.useState(false);
  const [duplicateEmail, setDuplicateEmail] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmptyEmail(true);
      return;
    } else if (email) {
      setEmptyEmail(false);
    }

    if (!password) {
      setEmptyPassword(true);
      return;
    } else if (password) {
      setEmptyPassword(false);
    }

    if (password !== confirmPassword) {
      setdifferentPasswords(true);
      return;
    } else if (password === confirmPassword) {
      setdifferentPasswords(false);
    }

    try {
      const response = await fetch("/api/v1/users/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.message === "Success") {
        setSignedUp(true);
      } else {
        setDuplicateEmail(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="karla text-3xl m-10">Sign Up</h1>
      <span className="karla mb-4 text-lg">Sign up with your email</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center w-96"
      >
        <div className="flex flex-col w-full">
          {duplicateEmail && (
            <span className="text-red-500 text-sm karla">
              Email already exists!
            </span>
          )}
          {emptyEmail && (
            <span className="text-red-500 text-sm karla">
              Email is required!
            </span>
          )}
          <FormInput
            placeholder="Enter your email address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col w-full">
          {differentPasswords && (
            <span className="text-red-500 text-sm karla">
              Passwords don&apos;t match!
            </span>
          )}
          {emptyPassword && (
            <span className="text-red-500 text-sm karla">
              Password is required!
            </span>
          )}
          <FormInput
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <FormInput
          placeholder="Confirm your password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <div className="flex justify-center w-32">
          <GeneralBtn text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
