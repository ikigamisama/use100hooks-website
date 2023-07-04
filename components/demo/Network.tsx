import { useNetworkStatus } from "use100hooks";

const Network = () => {
  const networkStatus = useNetworkStatus();

  return (
    <div>
      <p>Online: {networkStatus.online ? "Yes" : "No"}</p>
      <p>Network Type: {networkStatus.type}</p>
      <p>Downlink Speed: {networkStatus.downlink} Mbps</p>
      <p>Effective Type: {networkStatus.effectiveType}</p>
      <p>Round-Trip Time: {networkStatus.rtt} ms</p>
      <p>Data Saving Mode: {networkStatus.saveData ? "Enabled" : "Disabled"}</p>
    </div>
  );
};
export default Network;
