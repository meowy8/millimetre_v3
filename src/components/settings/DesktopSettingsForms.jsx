import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";

const DesktopSettingsForms = ({ setShowModal, setShowFilmSearchModal }) => {
  return (
    <>
      <ChangePasswordForm />
      <div className="border-r border-[#FBF7F4]"></div>
      <AccountSettingsForm
        setShowModal={setShowModal}
        setFilmSearchModal={setShowFilmSearchModal}
      />
    </>
  );
};

export default DesktopSettingsForms;
