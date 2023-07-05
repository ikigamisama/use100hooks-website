import { useEffect, useState } from "react";

type StickyOptions = {
  threshold?: number;
};

export const useStickyEffect = (
  ref: React.RefObject<HTMLElement>,
  options?: StickyOptions
): boolean | null => {
  const [isSticky, setIsSticky] = useState<boolean | null>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { threshold = 0 } = options || {};
      const isElementSticky =
        ref.current && ref.current.getBoundingClientRect().top <= threshold;
      setIsSticky(isElementSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, options]);

  return isSticky;
};
