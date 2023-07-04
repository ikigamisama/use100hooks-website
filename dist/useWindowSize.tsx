import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

type WindowSizeHookResult = WindowSize;

export const useWindowSize = (): WindowSizeHookResult => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
