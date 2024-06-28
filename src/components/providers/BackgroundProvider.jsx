import React from "react";
import { useState } from "react";

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleBackgroundColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <BackgroundColorContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor: handleBackgroundColorChange,
      }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const BackgroundColorContext = React.createContext({
  backgroundColor: "white", // Initial background color
  setBackgroundColor: (color) => {}, // Function to update background color
});
