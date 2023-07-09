"use client";

import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkModeContext } from "@/lib/ThemeProvider";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center">
          <div className="flex-1 flexStart gap-10">
            <Link href="/" className="flex flex-row items-center">
              <Image
                src={isDarkMode ? "/mainlogo-dark.png" : "/mainlogo-light.png"}
                width={45}
                height={32}
                alt="main-logo"
                className="w-auto h-auto"
                blurDataURL={"/mainlogo.png"}
              />
              <p
                className={`nav-text-logo ml-4 text-3xl text-black dark:text-white`}
              >
                use100Hooks
              </p>
            </Link>
          </div>
          <div className="flexCenter gap-4">
            {mounted && (
              <button
                type="button"
                onClick={toggleDarkMode}
                className="rounded-full bg-gray-800 p-1 text-gray-400 "
              >
                {isDarkMode ? (
                  <FaSun size={20} color={isDarkMode ? "#889096" : "#000000"} />
                ) : (
                  <FaMoon
                    size={20}
                    color={isDarkMode ? "#889096" : "#000000"}
                  />
                )}
              </button>
            )}

            <Link
              target="_blank"
              href="https://github.com/ikigamisama/use100hooks"
            >
              <RxGithubLogo
                size={25}
                color={isDarkMode ? "#889096" : "#000000"}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
