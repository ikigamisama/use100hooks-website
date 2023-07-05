import { useBatteryStatus } from "use100hooks";

const BatteryStatus = () => {
  const batteryStatus = useBatteryStatus();

  if (!batteryStatus.supported) {
    return <p>Battery status not supported.</p>;
  }

  if (batteryStatus.loading) {
    return <p>Loading battery status...</p>;
  }

  return (
    <div>
      <p>Battery Level: {batteryStatus.level}</p>
      <p>Battery Charging: {batteryStatus.isCharging ? "Yes" : "No"}</p>
      <p>Charging Time: {batteryStatus.chargingTime} seconds</p>
      <p>Discharging Time: {batteryStatus.dischargingTime} seconds</p>
    </div>
  );
};
export default BatteryStatus;
