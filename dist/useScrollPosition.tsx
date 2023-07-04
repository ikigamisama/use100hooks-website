import { useEffect, useState } from "react";

export const useScrollPosition = (
  effect: (position: { x: number; y: number }) => void,
  dependencies: any[]
): { x: number; y: number } => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const currentPosition = {
      x: window.scrollX,
      y: window.scrollY,
    };
    setScrollPosition(currentPosition);
    effect(currentPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, dependencies);

  return scrollPosition;
};
