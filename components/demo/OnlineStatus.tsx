import { useOnlineStatus } from "use100hooks";

const OnlineStatus = () => {
  const [isOnline, setOnlineStatus] = useOnlineStatus();

  const handleToggle = () => {
    setOnlineStatus(!isOnline);
  };

  return (
    <div>
      <p>Automatic Online Status: {isOnline ? "Online" : "Offline"}</p>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleToggle}
      >
        Toggle Online Status
      </button>
    </div>
  );
};
export default OnlineStatus;
