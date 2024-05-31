import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { User } from "@/types/userTypes";

const DesktopSettingsForms = ({
  sessionData,
  demoRestricted,
}: {
  sessionData: User;
  demoRestricted: boolean;
}) => {
  return (
    <>
      <ChangePasswordForm
        sessionData={sessionData}
        demoRestricted={demoRestricted}
      />
      <div className="border-r border-[#FBF7F4]"></div>
      <AccountSettingsForm
        sessionData={sessionData}
        demoRestricted={demoRestricted}
      />
    </>
  );
};

export default DesktopSettingsForms;
