import { useEffect, useState } from "react";

type OnlineStatusHookResult = [boolean, (online: boolean) => void];

export const useOnlineStatus = (): OnlineStatusHookResult => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isManual, setIsManual] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    if (!isManual) {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isManual]);

  const setOnlineStatus = (online: boolean) => {
    setIsManual(online);
    setIsOnline(online);
  };

  return [isOnline, setOnlineStatus];
};
