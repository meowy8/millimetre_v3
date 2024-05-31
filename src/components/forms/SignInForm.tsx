import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import FormInput from "../FormInput";
import { hashPassword } from "@/utils/auth";

const SignInForm = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const router = useRouter();

  // submit sign in form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // sign in
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    // check if error and set error message
    if (res?.error) {
      // console.log(res.error);
      setError(res.error);
      return;
    } else {
      router.push(`/`);
    }
  };

  const logInAsDemoUser = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      email: "demo@demo.com",
      password: "password123*",
    });

    if (res?.error) {
      // console.log(res.error);
      setError(res.error);
      return;
    } else {
      router.push(`/`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="karla text-3xl m-10">Sign In</h1>
      <span className="karla text-md mb-2">Already have an account?</span>
      <span className="karla mb-4 text-lg">Sign in with your email</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center w-96 karla"
      >
        <div className="w-full">
          {error === "User not found" && (
            <span className="text-red-500 text-sm">{error}</span>
          )}
          <FormInput
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          {error === "Incorrect password" && (
            <span className="text-red-500 text-sm">{error}</span>
          )}
          <FormInput
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center w-32">
          <GeneralBtn text="Sign In" />
        </div>
      </form>
      <button
        onClick={logInAsDemoUser}
        className="karla bg-[#314b83] px-4 py-2 mt-4 border border-[#496fc0] rounded-md"
      >
        Demo Account
      </button>
    </div>
  );
};

export default SignInForm;
