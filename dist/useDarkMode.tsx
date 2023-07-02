import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  function getInitialMode() {
    if (typeof window !== "undefined") {
      const savedMode = window.localStorage.getItem("theme");
      if (
        savedMode === "dark" ||
        (!("theme" in window.localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return savedMode ? savedMode === "dark" : false;
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", !isDarkMode ? "light" : "dark");
    }
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
