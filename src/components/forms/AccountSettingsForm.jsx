import Image from "next/image";
import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import GeneralInput from "../GeneralInput";

const AccountSettingsForm = ({ setShowModal, setFilmSearchModal }) => {
  const [avatarImage, setAvatarImage] = React.useState(
    "/images/profilePicture.jpg"
  );

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAvatarImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    setShowModal(true);
    setFilmSearchModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 karla">
      <form action="submit" className="flex flex-col w-96">
        <span className="text-lg">Edit your account</span>
        <div className="m-4 flex flex-col gap-6">
          <label htmlFor="avatar" className="flex flex-col gap-4">
            Choose Avatar
            <label
              htmlFor="avatarfile"
              className="cursor-pointer flex justify-center"
            >
              <Image
                src={avatarImage}
                alt="avatar"
                className="w-36 h-36 border border-[#FBF7F4] rounded-full flex justify-center items-center hover:bg-white/10 object-cover "
                width={100}
                height={100}
              />
            </label>
            <input
              type="file"
              name="avatarfile"
              id="avatarfile"
              className="hidden"
              onChange={(e) => handleAvatarChange(e)}
            />
          </label>
          <label
            htmlFor="change-profile-backdrop"
            className="flex flex-col gap-2"
          >
            Change Profile Backdrop
            <input
              type="text"
              name="change-profile-backdrop"
              id="change-profile-backdrop"
              placeholder="Film backdrop"
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none hover:bg-white/10 focus:bg-white/20 w-full"
            />
          </label>
          <label htmlFor="change-username" className="flex flex-col gap-2">
            Change Username
            <GeneralInput placeholder="Username" type="text" />
          </label>
          <label htmlFor="change-bio">
            Change Bio
            <textarea
              name="change-bio"
              id="change-bio"
              cols="30"
              rows="5"
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none hover:bg-white/10 focus:bg-white/20 w-full"
              placeholder="Bio"
            ></textarea>
          </label>
          <div>
            <span>Change Favourite Films</span>
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="border w-32 h-44 rounded-lg flex justify-center items-center"
              >
                <span>+</span>
              </button>
            </div>
          </div>
          <div>
            <GeneralBtn text="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsForm;
