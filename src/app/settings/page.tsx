"use client";
import React, { useEffect } from "react";
import SettingsToggle from "@/components/buttons/SettingsToggle";
import DesktopSettingsForms from "@/components/settings/DesktopSettingsForms";
import MobileSettingsForms from "@/components/settings/MobileSettingsForms";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@/types/userTypes";

const Settings = () => {
  const [section, setSection] = React.useState("account-settings");
  const [sessionData, setSessionData] = React.useState<User | null>(null);
  const [demoRestricted, setDemoRestricted] = React.useState(false);

  const router = useRouter();

  const { data: session } = useSession();

  // useEffect(() => {
  //   console.log("session", session);
  //   // console.log("sessionData", sessionData);
  // }, [sessionData]);

  useEffect(() => {
    if (session && session.user) {
      if (session.user.name === "demouser") {
        setDemoRestricted(true);
      }
    }
  }, [session]);

  // Set user data from session
  useEffect(() => {
    if (session) {
      setSessionData(session.user as User);
    } else {
      setSessionData(null);
    }
  }, [session]);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  // changes section of settings page
  const changeSection = (section: string) => {
    setSection(section);
  };

  return (
    <section className="mt-24 max-w-[1000px] mx-auto">
      <h1 className="text-3xl karla m-2 mb-8">Settings</h1>
      <div className="lg:hidden">
        <SettingsToggle changeSection={changeSection} section={section} />
      </div>
      <div className="lg:hidden">
        <MobileSettingsForms
          section={section}
          sessionData={sessionData as User}
          demoRestricted={demoRestricted}
        />
      </div>
      <div className="hidden lg:flex justify-between">
        <DesktopSettingsForms
          sessionData={sessionData as User}
          demoRestricted={demoRestricted}
        />
      </div>
    </section>
  );
};

export default Settings;
