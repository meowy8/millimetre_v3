import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";

const DesktopSettingsForms = () => {
  return (
    <>
      <ChangePasswordForm />
      <div className="border-r border-[#FBF7F4]"></div>
      <AccountSettingsForm />
    </>
  );
};

export default DesktopSettingsForms;
