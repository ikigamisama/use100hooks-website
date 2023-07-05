import { useEffect, useState } from "react";

type BatteryStatus = {
  supported: boolean;
  loading: boolean;
  level: number;
  isCharging: boolean;
  chargingTime: number;
  dischargingTime: number;
};

export const useBatteryStatus = (): BatteryStatus => {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus>({
    supported: false,
    loading: true,
    level: 0,
    isCharging: false,
    chargingTime: 0,
    dischargingTime: Infinity,
  });

  useEffect(() => {
    let battery: any;

    const handleBatteryStatusChange = () => {
      setBatteryStatus({
        supported: true,
        loading: false,
        level: battery?.level || 0,
        isCharging: battery?.charging || false,
        chargingTime: battery?.chargingTime || 0,
        dischargingTime: battery?.dischargingTime || Infinity,
      });
    };

    const getBatteryStatus = async () => {
      try {
        battery = await (navigator as any).getBattery();
        battery.addEventListener("levelchange", handleBatteryStatusChange);
        battery.addEventListener("chargingchange", handleBatteryStatusChange);
        battery.addEventListener(
          "chargingtimechange",
          handleBatteryStatusChange
        );
        battery.addEventListener(
          "dischargingtimechange",
          handleBatteryStatusChange
        );

        handleBatteryStatusChange();
      } catch (error) {
        setBatteryStatus((prevStatus) => ({
          ...prevStatus,
          loading: false,
        }));
        console.error("Battery status retrieval failed:", error);
      }
    };

    if ("getBattery" in navigator) {
      getBatteryStatus();
    } else {
      setBatteryStatus((prevStatus) => ({
        ...prevStatus,
        loading: false,
      }));
      console.error("Battery status retrieval not supported.");
    }

    return () => {
      battery?.removeEventListener("levelchange", handleBatteryStatusChange);
      battery?.removeEventListener("chargingchange", handleBatteryStatusChange);
      battery?.removeEventListener(
        "chargingtimechange",
        handleBatteryStatusChange
      );
      battery?.removeEventListener(
        "dischargingtimechange",
        handleBatteryStatusChange
      );
    };
  }, []);

  return batteryStatus;
};
