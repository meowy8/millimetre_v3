"use client";
import React from "react";
import CloseSidebarBtn from "./CloseSidebarBtn";
import SidebarInputContainer from "./SidebarInputContainer";
import SidebarNavSection from "./SidebarNavSection";
import ProfileIcon from "../icons/ProfileIcon";
import SidebarNavBtn from "./SidebarNavBtn";
import HomeIcon from "../icons/HomeIcon";
import MembersIcon from "../icons/MembersIcon";
import SettingsIcon from "../icons/SettingsIcon";
import OpenSidebarBtn from "./OpenSidebarBtn";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <aside className="z-10">
      {showSidebar && (
        <div
          id="sidebarBackdrop"
          className="fixed top-0 right-0 w-screen min-h-screen backdrop-blur-md lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <OpenSidebarBtn
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        showSidebar={showSidebar}
      />
      <nav
        className={`bg-[#0B0618] w-64 h-screen fixed right-0 top-0 border-l-[0.5px] border-[#137150] karlaRegular flex flex-col gap-10 z-50 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className="flex flex-col gap-4">
          <CloseSidebarBtn
            openSidebar={openSidebar}
            closeSidebar={closeSidebar}
            showSidebar={showSidebar}
          />
          <SidebarInputContainer />
        </div>
        <div className="flex flex-col gap-1">
          <SidebarNavSection
            section="General"
            buttons={[
              <SidebarNavBtn
                icon={<ProfileIcon />}
                name="Profile"
                key={1}
                closeSidebar={closeSidebar}
              />,
              <SidebarNavBtn
                icon={<HomeIcon />}
                name="Home"
                key={2}
                closeSidebar={closeSidebar}
              />,
            ]}
          />
          <SidebarNavSection
            section="People"
            buttons={[
              <SidebarNavBtn
                icon={<MembersIcon />}
                name="Members"
                key={1}
                closeSidebar={closeSidebar}
              />,
            ]}
          />
          <SidebarNavSection
            section="Other"
            buttons={[
              <SidebarNavBtn
                icon={<SettingsIcon />}
                name="Settings"
                key={1}
                closeSidebar={closeSidebar}
              />,
            ]}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
