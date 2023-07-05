import { useEffect } from "react";

type NavigationDirection = "forward" | "backward";

export const useNavigation = (
  direction: NavigationDirection,
  callback: () => void
) => {
  useEffect(() => {
    const handleNavigation = (event: KeyboardEvent) => {
      if (
        (direction === "forward" && event.key === "ArrowRight") ||
        (direction === "backward" && event.key === "ArrowLeft")
      ) {
        callback();
      }
    };

    window.addEventListener("keydown", handleNavigation);

    return () => {
      window.removeEventListener("keydown", handleNavigation);
    };
  }, [direction, callback]);
};
