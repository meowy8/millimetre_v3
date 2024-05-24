import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import CloseModalBtn from "../buttons/CloseModalBtn";
import Image from "next/image";
import FormInput from "../FormInput";
import { useRouter } from "next/navigation";

const CreateAccountForm = ({
  toggleModal,
  toggleCreateAccountModal,
  email,
  password,
}) => {
  const [avatarImage, setAvatarImage] = React.useState(null);
  const [accountName, setAccountName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [bio, setBio] = React.useState("");

  const [emptyAccountName, setEmptyAccountName] = React.useState(false);
  const [emptyUsername, setEmptyUsername] = React.useState(false);
  const [duplicateUsername, setDuplicateUsername] = React.useState(false);

  const router = useRouter();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAvatarImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    toggleCreateAccountModal();
    toggleModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountName) {
      setEmptyAccountName(true);
      return;
    } else if (accountName) {
      setEmptyAccountName(false);
    }

    if (!username) {
      setEmptyUsername(true);
      return;
    } else if (username) {
      setEmptyUsername(false);
    }

    const userData = {
      accountName,
      email,
      password,
      username,
      bio,
    };

    try {
      const response = await fetch("/api/v1/users/user", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.message === "Success") {
        toggleCreateAccountModal();
        toggleModal();

        router.push("/");
      }

      if (data.message === "Username cannot be empty") {
        setEmptyUsername(true);
      }

      if (data.message === "Account name cannot be empty") {
        setEmptyAccountName(true);
      }

      if (data.message === "Username already in use") {
        setDuplicateUsername(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0B0618] rounded-lg p-8 border border-[#FBF7F4] max-w-[500px]">
      <div className="flex justify-end">
        <CloseModalBtn handleClick={handleClick} />
      </div>
      <div className="flex flex-col">
        <h1 className="karla text-3xl m-10">Create your account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full karla"
        >
          <label htmlFor="account-name">
            Account Name
            <span className="text-red-500"> *</span>
            {emptyAccountName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
            <FormInput
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder={"Enter your account name"}
              type={"text"}
            />
          </label>
          <label htmlFor="username">
            Username
            <span className="text-red-500"> *</span>
            {emptyUsername && (
              <span className="text-red-500 text-sm">Required</span>
            )}
            {duplicateUsername && (
              <span className="text-red-500 text-sm">
                Username already in use
              </span>
            )}
            <FormInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={"Enter your username"}
              type={"text"}
            />
          </label>
          <label htmlFor="avatar" className="">
            Choose Avatar
            <span className="text-red-500"> *</span>
            <label
              htmlFor="avatarfile"
              className="cursor-pointer flex justify-center"
            >
              {avatarImage ? (
                <Image
                  src={avatarImage}
                  alt="avatar"
                  className="w-36 h-36 border border-[#FBF7F4] rounded-full flex justify-center items-center hover:opacity-70 object-cover "
                  width={100}
                  height={100}
                />
              ) : (
                <div className="w-36 h-36 border border-[#FBF7F4] rounded-full flex justify-center items-center hover:bg-white/10">
                  <span className="text-3xl">+</span>
                </div>
              )}
            </label>
            <input
              type="file"
              name="avatarfile"
              id="avatarfile"
              className="hidden"
              onChange={(e) => handleAvatarChange(e)}
            />
          </label>
          <label htmlFor="bio" className="flex flex-col">
            Create a Bio
            <textarea
              name="bio"
              id="bio"
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none karla hover:bg-white/10 focus:bg-white/20 w-full"
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
          <GeneralBtn text="Create an Account" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
