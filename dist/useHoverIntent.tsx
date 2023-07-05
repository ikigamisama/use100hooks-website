import { useEffect, useRef, useState } from "react";

interface HoverIntentOptions {
  sensitivity: number;
  interval: number;
}

const defaultOptions: HoverIntentOptions = {
  sensitivity: 0.5,
  interval: 200,
};

export const useHoverIntent = (
  options: Partial<HoverIntentOptions> = defaultOptions
) => {
  const { sensitivity, interval } = { ...defaultOptions, ...options };

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const isIntentRef = useRef<boolean>(false);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(true);
      isIntentRef.current = true;
    }, interval);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isIntentRef.current) {
      setIsHovered(false);
      isIntentRef.current = false;
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isHovered, handleMouseEnter, handleMouseLeave };
};
