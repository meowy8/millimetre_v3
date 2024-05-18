import React from "react";

const CloseSidebarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <g transform="translate(24 0) scale(-1 1)">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path strokeDasharray={20} strokeDashoffset={20} d="M3 3V21">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="20;0"
            ></animate>
          </path>
          <path strokeDasharray={15} strokeDashoffset={15} d="M21 12H7.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="15;0"
            ></animate>
          </path>
          <path
            strokeDasharray={12}
            strokeDashoffset={12}
            d="M7 12L14 19M7 12L14 5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              values="12;0"
            ></animate>
          </path>
        </g>
      </g>
    </svg>
  );
};

export default CloseSidebarIcon;
