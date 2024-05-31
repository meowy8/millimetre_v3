import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import CloseModalBtn from "../buttons/CloseModalBtn";
import Image from "next/image";
import FormInput from "../FormInput";
import { useRouter } from "next/navigation";
import { createUser } from "@/utils/dataFetching/userData";
import Loading from "../loading";

const CreateAccountForm = ({
  toggleModal,
  toggleCreateAccountModal,
  email,
  password,
}: {
  toggleModal: () => void;
  toggleCreateAccountModal: () => void;
  email: string;
  password: string;
}) => {
  // form states
  const [avatarImage, setAvatarImage] = React.useState<string>();
  const [accountName, setAccountName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [bio, setBio] = React.useState<string>("");

  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

  const [uploading, setUploading] = React.useState<boolean>(false);

  // error states
  const [emptyAccountName, setEmptyAccountName] =
    React.useState<boolean>(false);
  const [emptyUsername, setEmptyUsername] = React.useState<boolean>(false);
  const [duplicateUsername, setDuplicateUsername] =
    React.useState<boolean>(false);
  const [invalidUsername, setInvalidUsername] = React.useState<boolean>(false);
  const [emptyAvatar, setEmptyAvatar] = React.useState<boolean>(false);

  const router = useRouter();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarFile(file);
    setAvatarImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    toggleCreateAccountModal();
    toggleModal();
  };

  // submit create account form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    // check if form fields are not empty
    if (!accountName) {
      setEmptyAccountName(true);
      setUploading(false);
      return;
    }

    if (!username) {
      setEmptyUsername(true);
      setUploading(false);
      return;
    }

    if (!avatarFile) {
      setEmptyAvatar(true);
      setUploading(false);
      return;
    }

    // upload avatar to S3
    const formData = new FormData();
    formData.append("file", avatarFile as File);
    formData.append("username", username);
    const response = await fetch("api/s3-upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    const profileImage = data.fileUrl;

    // create user object
    const userData = {
      accountName,
      email,
      password,
      username,
      bio,
      profileImage,
    };

    try {
      const response = await createUser(userData);
      const data = await response.json();

      // success handling
      if (data.message === "Success") {
        toggleCreateAccountModal();
        toggleModal();

        window.location.reload();
        return;
      }

      // error handling
      if (data.message === "Username cannot be empty") {
        setEmptyUsername(true);
      } else if (data.message === "Account name cannot be empty") {
        setEmptyAccountName(true);
      } else if (data.message === "Username already in use") {
        setDuplicateUsername(true);
      } else if (
        data.message ===
        "Username must be between 3 and 20 characters long and contain only letters and numbers"
      ) {
        setInvalidUsername(true);
      }
    } catch (error) {
      console.error(error);
    }

    setUploading(false);
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAccountName(e.target.value)
              }
              placeholder={"Enter your account name"}
              type={"text"}
            />
          </label>
          <label htmlFor="username">
            Username
            <span className="text-red-500"> *</span>
            <div className="flex flex-col">
              {emptyUsername && (
                <span className="text-red-500 text-sm">Required</span>
              )}
              {duplicateUsername && (
                <span className="text-red-500 text-sm">
                  Username already in use
                </span>
              )}
              {invalidUsername && (
                <span className="text-red-500 text-sm">
                  Username must be between 3 and 20 characters long and contain
                  only letters and numbers
                </span>
              )}
            </div>
            <FormInput
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              placeholder={"Enter your username"}
              type={"text"}
            />
          </label>
          <label htmlFor="avatar" className="">
            Choose Avatar
            <span className="text-red-500"> *</span>
            {emptyAvatar && (
              <span className="text-red-500 text-sm">Required</span>
            )}
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
          {uploading ? (
            <div className="flex justify-center">
              <Loading />
            </div>
          ) : (
            <GeneralBtn text="Create an Account" />
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
