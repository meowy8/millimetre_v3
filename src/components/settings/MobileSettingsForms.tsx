import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { User } from "@/types/userTypes";

const MobileSettingsForms = ({
  section,
  sessionData,
  demoRestricted,
}: {
  section: string;
  sessionData: User;
  demoRestricted: boolean;
}) => {
  return (
    <>
      {section === "change-password" ? (
        <ChangePasswordForm
          sessionData={sessionData}
          demoRestricted={demoRestricted}
        />
      ) : (
        <AccountSettingsForm
          sessionData={sessionData}
          demoRestricted={demoRestricted}
        />
      )}
    </>
  );
};

export default MobileSettingsForms;
