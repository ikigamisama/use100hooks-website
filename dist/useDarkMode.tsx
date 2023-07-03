import { useEffect, useState } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");

      isDarkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  function getInitialMode(): boolean {
    if (typeof window !== "undefined") {
      const body = document.body;
      const savedMode = localStorage.getItem("theme");
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (
        savedMode === "dark" ||
        (!("theme" in localStorage) && prefersDarkMode)
      ) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
      return savedMode ? savedMode === "dark" : false;
    }
    return false;
  }

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};
