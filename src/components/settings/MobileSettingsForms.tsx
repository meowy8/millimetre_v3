import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";

const MobileSettingsForms = ({ section }: { section: string }) => {
  return (
    <>
      {section === "change-password" ? (
        <ChangePasswordForm />
      ) : (
        <AccountSettingsForm />
      )}
    </>
  );
};

export default MobileSettingsForms;
