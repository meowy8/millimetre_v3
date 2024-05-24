"use client";
import React from "react";
import SettingsToggle from "@/components/buttons/SettingsToggle";
import DesktopSettingsForms from "@/components/settings/DesktopSettingsForms";
import MobileSettingsForms from "@/components/settings/MobileSettingsForms";

const Settings = () => {
  const [section, setSection] = React.useState("account-settings");
  const [showModal, setShowModal] = React.useState(false);
  const [showFilmSearchModal, setShowFilmSearchModal] = React.useState(false);

  // changes section of settings page
  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="">
      <h1 className="text-3xl karla m-2 mb-8">Settings</h1>
      <div className="lg:hidden">
        <SettingsToggle changeSection={changeSection} section={section} />
      </div>
      <div className="lg:hidden">
        <MobileSettingsForms
          section={section}
          setShowModal={setShowModal}
          setShowFilmSearchModal={setShowFilmSearchModal}
        />
      </div>
      <div className="hidden lg:flex justify-between">
        <DesktopSettingsForms
          setShowModal={setShowModal}
          setShowFilmSearchModal={setShowFilmSearchModal}
        />
      </div>
    </section>
  );
};

export default Settings;
