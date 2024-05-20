import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import GeneralInput from "../GeneralInput";
import CloseModalBtn from "../buttons/CloseModalBtn";
import Image from "next/image";

const CreateAccountForm = ({ toggleModal, toggleCreateAccountModal }) => {
  const [avatarImage, setAvatarImage] = React.useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAvatarImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    toggleCreateAccountModal();
    toggleModal();
  };

  return (
    <div className="bg-[#0B0618] rounded-lg p-8 border border-[#FBF7F4] max-w-[500px]">
      <div className="flex justify-end">
        <CloseModalBtn handleClick={handleClick} />
      </div>
      <div className="flex flex-col">
        <h1 className="karla text-3xl m-10">Create your account</h1>
        <form action="" className="flex flex-col gap-6 w-full karla">
          <label htmlFor="account-name">
            Account Name
            <GeneralInput placeholder="Account Name" type="text" />
          </label>
          <label htmlFor="username">
            Username
            <GeneralInput placeholder="Username" type="text" />
          </label>
          <label htmlFor="avatar" className="">
            Choose Avatar
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
            ></textarea>
          </label>
          <GeneralBtn text="Create an Account" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
