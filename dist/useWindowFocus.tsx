import { useEffect, useState } from "react";

export const useWindowFocus = () => {
  const [isWindowFocused, setIsWindowFocused] = useState<boolean>(true);

  useEffect(() => {
    const handleWindowFocus = () => {
      setIsWindowFocused(true);
    };

    const handleWindowBlur = () => {
      setIsWindowFocused(false);
    };

    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return isWindowFocused;
};
