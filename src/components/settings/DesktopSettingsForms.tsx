import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { User } from "@/types/userTypes";

const DesktopSettingsForms = ({ sessionData }: { sessionData: User }) => {
  return (
    <>
      <ChangePasswordForm sessionData={sessionData} />
      <div className="border-r border-[#FBF7F4]"></div>
      <AccountSettingsForm sessionData={sessionData} />
    </>
  );
};

export default DesktopSettingsForms;
