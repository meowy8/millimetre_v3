"use client";
import React from "react";
import SettingsToggle from "@/components/SettingsToggle";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import AccountSettingsForm from "@/components/AccountSettingsForm";

const Settings = () => {
  const [section, setSection] = React.useState("account-settings");

  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="mt-28">
      <h1 className="text-3xl karla m-2 mb-8">Settings</h1>
      <SettingsToggle changeSection={changeSection} section={section} />
      {section === "change-password" ? (
        <ChangePasswordForm />
      ) : (
        <AccountSettingsForm />
      )}
    </section>
  );
};

export default Settings;
