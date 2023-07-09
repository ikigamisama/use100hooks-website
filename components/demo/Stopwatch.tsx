import { useStopwatch } from "use100hooks";

const Stopwatch = () => {
  const { isRunning, elapsedTime, start, stop, reset } = useStopwatch();

  return (
    <div>
      <h1>Stopwatch Example</h1>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={start}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={stop}
        disabled={!isRunning}
      >
        Stop
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={reset}
        disabled={isRunning}
      >
        Reset
      </button>
    </div>
  );
};
export default Stopwatch;
