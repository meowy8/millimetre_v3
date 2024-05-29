import React from "react";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { User } from "@/types/userTypes";

const MobileSettingsForms = ({
  section,
  sessionData,
}: {
  section: string;
  sessionData: any;
}) => {
  return (
    <>
      {section === "change-password" ? (
        <ChangePasswordForm sessionData={sessionData} />
      ) : (
        <AccountSettingsForm sessionData={sessionData} />
      )}
    </>
  );
};

export default MobileSettingsForms;
