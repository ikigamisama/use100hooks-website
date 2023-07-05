import { useInterval } from "use100hooks";
import { useState } from "react";

const Interval = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
export default Interval;
