"use client";

import { useDarkModeContext } from "@/lib/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <section>
      <button
        type="button"
        onClick={handleToggle}
        className="border rounded-md p-2 bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      <p className="mt-4">Is Dark theme: {isDarkMode?.toString()}</p>
    </section>
  );
};
export default DarkMode;
