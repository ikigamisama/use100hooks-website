import { useEffect, useState } from "react";

type MediaQueryHookResult = boolean;

export const useMediaQuery = (query: string): MediaQueryHookResult => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};
