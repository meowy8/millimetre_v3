import React from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import FormInput from "../FormInput";

const ChangePasswordForm = ({ sessionData }: { sessionData: any }) => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!sessionData) return;

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: sessionData.id,
        currentPassword,
        newPassword,
      }),
    });

    const data = await res.json();

    if (data.message === "Success") {
      alert("Password changed");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-6 w-96"
      >
        <span className="karla text-lg">Change your password</span>
        <div className="w-full">
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <FormInput
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
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="w-full">
          <FormInput
            placeholder="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <GeneralBtn text="Save" />
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
