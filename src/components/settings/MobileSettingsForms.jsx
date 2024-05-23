import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";

const MobileSettingsForms = ({
  section,
  setShowModal,
  setShowFilmSearchModal,
}) => {
  return (
    <>
      {section === "change-password" ? (
        <ChangePasswordForm />
      ) : (
        <AccountSettingsForm
          setShowModal={setShowModal}
          setFilmSearchModal={setShowFilmSearchModal}
        />
      )}
    </>
  );
};

export default MobileSettingsForms;
