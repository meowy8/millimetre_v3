import React from "react";

const SidebarNavSection = ({
  section,
  buttons,
}: {
  section: string;
  buttons: JSX.Element[];
}) => {
  return (
    <div className="flex flex-col m-4">
      <span className="mb-1">{section}</span>
      <div className="flex flex-col gap-4">
        {buttons.map((button) => button)}
      </div>
    </div>
  );
};

export default SidebarNavSection;
