"use client";
import React from "react";
import SettingsToggle from "@/components/buttons/SettingsToggle";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";

const Settings = () => {
  const [section, setSection] = React.useState("account-settings");

  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="my-28">
      <h1 className="text-3xl karla m-2 mb-8">Settings</h1>
      <div className="lg:hidden">
        <SettingsToggle changeSection={changeSection} section={section} />
      </div>
      <div className="lg:hidden">
        {section === "change-password" ? (
          <ChangePasswordForm />
        ) : (
          <AccountSettingsForm />
        )}
      </div>
      <div className="hidden lg:flex justify-between">
        <ChangePasswordForm />
        <div className="border-r border-[#FBF7F4]"></div>
        <AccountSettingsForm />
      </div>
    </section>
  );
};

export default Settings;
