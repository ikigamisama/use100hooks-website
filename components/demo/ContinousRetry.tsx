import { useContinuousRetry } from "use100hooks";
import { useState } from "react";

const ContinousRetry = () => {
  const [value, setValue] = useState(0);
  const hasResolved = useContinuousRetry(() => {
    console.log("Retry . . . ");
    return value > 10;
  }, 1000);

  return (
    <section>
      <h1>useContinuousRetry</h1>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={() => setValue(value + 1)}
      >
        {value}
      </button>
      <pre className="text-left">
        {JSON.stringify({ hasResolved, value }, null, 2)}
      </pre>
    </section>
  );
};
export default ContinousRetry;
