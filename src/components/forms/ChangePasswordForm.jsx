import React from "react";
import GeneralInput from "../GeneralInput";
import GeneralBtn from "../buttons/GeneralBtn";

const ChangePasswordForm = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <form className="flex flex-col items-center gap-6 w-96">
        <span className="karla text-lg">Change your password</span>
        <GeneralInput placeholder="Old Password" type="password" />
        <GeneralInput placeholder="New Password" type="password" />
        <GeneralInput placeholder="Confirm New Password" type="password" />
        <div>
          <GeneralBtn text="Save" />
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
