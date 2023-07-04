import { useThrottle } from "use100hooks";
import { useState } from "react";

const Throttle = () => {
  const [count, setCount] = useState(0);
  const handleThrottledClick = useThrottle((value: number) => {
    setCount(value);
  }, 1000);

  function handleClick(): void {
    handleThrottledClick(count + 1);
  }

  return (
    <section>
      <h2>Throttled Button Click Example</h2>
      <p>Count: {count}</p>
      <p>Delay: 1000ms</p>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleClick}
      >
        Increment
      </button>
    </section>
  );
};
export default Throttle;
