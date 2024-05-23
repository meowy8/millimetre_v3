"use client";
import React from "react";
import SettingsToggle from "@/components/buttons/SettingsToggle";
import DesktopSettingsForms from "@/components/settings/DesktopSettingsForms";
import Modal from "@/components/Modal";
import FilmSearchModal from "@/components/film/FilmSearchModal";
import MobileSettingsForms from "@/components/settings/MobileSettingsForms";

const Settings = () => {
  const [section, setSection] = React.useState("account-settings");
  const [showModal, setShowModal] = React.useState(false);
  const [showFilmSearchModal, setShowFilmSearchModal] = React.useState(false);

  // changes section of settings page
  const changeSection = (section: string) => {
    setSection(section);
  };

  // NEEDS TO BE IMPLEMENTED
  const addNewFavFilm = () => {
    setShowFilmSearchModal(false);
    setShowModal(false);
  };

  return (
    <section className="">
      <Modal showModal={showModal}>
        {showFilmSearchModal && (
          <FilmSearchModal
            setShowModal={setShowModal}
            addNewFavFilm={addNewFavFilm}
          />
        )}
      </Modal>
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
