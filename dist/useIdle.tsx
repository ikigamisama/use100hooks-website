import { useEffect, useState } from "react";

type IdleOptions = {
  time: number;
};

type IdleHookResult = boolean;

export const useIdle = (options: IdleOptions): IdleHookResult => {
  const [isIdle, setIsIdle] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleIdle = () => {
    setIsIdle(true);
  };

  const handleActive = () => {
    setIsIdle(false);
  };

  useEffect(() => {
    const handleIdleTimeout = () => {
      timeout = setTimeout(handleIdle, options.time);
    };

    const handleActivity = () => {
      clearTimeout(timeout);
      handleActive();
      handleIdleTimeout();
    };

    handleIdleTimeout();

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    document.addEventListener("scroll", handleActivity);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      document.removeEventListener("scroll", handleActivity);
    };
  }, [options.time]);

  return isIdle;
};
