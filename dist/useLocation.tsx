import { useEffect, useState } from "react";

export const useLocation = (): string => {
  const [location, setLocation] = useState(window.location.href);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.href);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return location;
};
