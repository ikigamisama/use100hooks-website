import { useAnimationFrame } from "use100hooks";
import { useState } from "react";

const AnimationFrame = () => {
  const [count, setCount] = useState(0);

  // Animation callback function
  const animate = (value: number) => {
    setCount(Math.floor(value));
  };

  // Using the useAnimationFrame hook
  useAnimationFrame(animate, 0.01);
  return (
    <div>
      <p>Animation Value: {count}</p>
    </div>
  );
};
export default AnimationFrame;
