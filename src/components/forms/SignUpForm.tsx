import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import FormInput from "../FormInput";
import { SignUp } from "@/types/formTypes";
import { SignInFormProps } from "@/types/propTypes";
import { checkSignUp, createUser } from "@/utils/dataFetching/userData";

const SignUpForm = ({
  setSignedUp,
  email,
  setEmail,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}: SignInFormProps) => {
  // error states
  const [differentPasswords, setDifferentPasswords] = React.useState(false);
  const [emptyEmail, setEmptyEmail] = React.useState(false);
  const [emptyPassword, setEmptyPassword] = React.useState(false);
  const [duplicateEmail, setDuplicateEmail] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);

  // submit sign up form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // check if form fields are not empty
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

    // check if password and confirm password are the same
    if (password !== confirmPassword) {
      setDifferentPasswords(true);
      return;
    } else if (password === confirmPassword) {
      setDifferentPasswords(false);
    }

    try {
      const response = await checkSignUp({ email, password });
      const data = await response.json();

      // check if email already exists
      if (data.message === "Email is available") {
        setSignedUp(true);
      } else if (data.message === "Email cannot be empty") {
        setEmptyEmail(true);
      } else if (data.message === "Email is not valid") {
        setInvalidEmail(true);
      } else if (data.message === "Email already in use") {
        setDuplicateEmail(true);
      } else if (data.message === "Password cannot be empty") {
        setEmptyPassword(true);
      } else if (
        data.message ===
        "Password must be at least 8 characters long, contain at least one special character, and contain at least one number"
      ) {
        setInvalidPassword(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 lg:w-96">
      <h1 className="karla text-3xl m-10">Sign Up</h1>
      <span className="karla mb-4 text-lg">Sign up with your email</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
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
          {invalidEmail && (
            <span className="text-red-500 text-sm karla">Invalid email!</span>
          )}
          <FormInput
            placeholder="Enter your email address"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
          {invalidPassword && (
            <span className="text-red-500 text-sm karla">
              Password must be at least 8 characters long, contain at least one
              special character, and contain at least one number
            </span>
          )}
          <FormInput
            placeholder="Enter your password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />
        </div>
        <FormInput
          placeholder="Confirm your password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
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
