import { useEffect, useRef, useState } from "react";

type HoverHookResult = [React.RefObject<any>, boolean];

export const useHover = (): HoverHookResult => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<any>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [ref, isHovered];
};
