"use client";
import React, { ReactElement } from "react";
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
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogoutIcon from "../icons/LogoutIcon";
import MediumSearchIcon from "../icons/MediumSearchIcon";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const router = useRouter();

  const { data: session } = useSession();

  // handles opening and closing sidebar
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // handles sign out
  const handleSignOut = async () => {
    await signOut();

    // redirect to home
    router.push("/");

    closeSidebar();
  };

  // allows to check for session before rendering
  const sideBarProfileBtn = session ? (
    <SidebarNavBtn
      icon={<ProfileIcon />}
      name="Profile"
      key={1}
      closeSidebar={closeSidebar}
      urlPath={`/user/profile/cadaverinbloom`}
    />
  ) : null;

  return (
    <aside>
      {showSidebar && (
        <div
          id="sidebarBackdrop"
          className="fixed top-0 right-0 w-screen min-h-screen bg-black/50 lg:hidden"
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
              sideBarProfileBtn as ReactElement,
              <SidebarNavBtn
                icon={<HomeIcon />}
                name="Home"
                key={2}
                closeSidebar={closeSidebar}
                urlPath={`/`}
              />,
              <SidebarNavBtn
                icon={<MediumSearchIcon />}
                name="Search"
                key={3}
                closeSidebar={closeSidebar}
                urlPath={`/search`}
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
                urlPath={`/members/memberSearch`}
              />,
            ]}
          />
          {session && (
            <SidebarNavSection
              section="Other"
              buttons={[
                <SidebarNavBtn
                  icon={<SettingsIcon />}
                  name="Settings"
                  key={1}
                  closeSidebar={closeSidebar}
                  urlPath={`/settings`}
                />,
              ]}
            />
          )}
          {session && (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-4 bg-[#001F24] border border-[#184249] rounded-sm px-4 py-2 hover:bg-[#184249] m-4 mt-10"
            >
              <LogoutIcon />
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
