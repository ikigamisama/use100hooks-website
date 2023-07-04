import { useState, useEffect } from "react";

type NetworkStatus = {
  online: boolean;
  type: string;
  downlink: number;
  effectiveType: string;
  rtt: number;
  saveData: boolean;
};

export const useNetworkStatus = (): NetworkStatus => {
  const [status, setStatus] = useState<NetworkStatus>({
    online: navigator.onLine,
    type: "",
    downlink: 0,
    effectiveType: "",
    rtt: 0,
    saveData: false,
  });

  useEffect(() => {
    const handleOnline = () => {
      setStatus((prevState) => ({
        ...prevState,
        online: true,
      }));
    };

    const handleOffline = () => {
      setStatus((prevState) => ({
        ...prevState,
        online: false,
      }));
    };

    const handleConnectionChange = (event: Event) => {
      const connection =
        (event as any).connection ||
        (event as any).mozConnection ||
        (event as any).webkitConnection;
      if (connection) {
        setStatus({
          online: navigator.onLine,
          type: connection.type,
          downlink: connection.downlink || 0,
          effectiveType: connection.effectiveType || "",
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false,
        });
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("connectionchange", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("connectionchange", handleConnectionChange);
    };
  }, []);

  return status;
};
