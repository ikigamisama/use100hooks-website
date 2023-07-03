"use client";

import React, { createContext, useContext } from "react";
import { useDarkMode } from "use100hooks";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error(
      "useDarkModeContext must be used within a DarkModeProvider"
    );
  }

  return context;
};
