import { useScrollPosition } from "use100hooks";
import { useState } from "react";

const ScrollPosition = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleScrollEffect = ({ x, y }: { x: number; y: number }) => {
    console.log(`Scroll position - x: ${x}, y: ${y}`);

    setCoordinates({ x: x, y: y });
  };
  useScrollPosition(handleScrollEffect, []);

  return (
    <section>
      <div>
        <h2>Scroll Position Example</h2>
        <p>Scroll down to see the scroll position logged in the console.</p>
        <p>
          Coordinates: X:{coordinates.x} Y:{coordinates.y}
        </p>
      </div>
    </section>
  );
};
export default ScrollPosition;
