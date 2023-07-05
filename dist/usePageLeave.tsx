import { useEffect } from "react";

export const usePageLeave = (callback: () => void) => {
  useEffect(() => {
    const handlePageLeave = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      callback();
    };

    window.addEventListener("beforeunload", handlePageLeave);

    return () => {
      window.removeEventListener("beforeunload", handlePageLeave);
    };
  }, [callback]);
};
