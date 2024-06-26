import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import FormInput from "../FormInput";
import { updateUserPassword } from "@/utils/dataFetching/userData";
import { useRouter } from "next/navigation";
import { User } from "@/types/userTypes";

const ChangePasswordForm = ({
  sessionData,
  demoRestricted,
}: {
  sessionData: User;
  demoRestricted: boolean;
}) => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();

  // submit updated password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // check if session exists
    if (!sessionData) return;

    // check if passwords match
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    const data = await updateUserPassword(
      sessionData.name as string,
      currentPassword,
      newPassword
    );

    if (data) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-6 w-full max-w-96"
      >
        <span className="karla text-lg">Change your password</span>
        {demoRestricted && (
          <span className="karla text-sm font-extralight">
            Demo users cannot change password
          </span>
        )}
        <div className="w-full">
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <FormInput
            demoRestricted={demoRestricted}
            placeholder="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="w-full">
          {error === "New passwords do not match" && (
            <span className="text-red-500 text-sm">{error}</span>
          )}
          <FormInput
            demoRestricted={demoRestricted}
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="w-full">
          <FormInput
            demoRestricted={demoRestricted}
            placeholder="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {!demoRestricted && (
          <div className="w-full">
            <GeneralBtn text="Save" />
          </div>
        )}
      </form>
    </div>
  );
};

export default ChangePasswordForm;
