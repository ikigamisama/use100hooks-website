import { useResizeObserver } from "use100hooks";
import { useRef, useState } from "react";

const ResizeObserver = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [fontSize, setFontSize] = useState<number>(1.5);
  const [checked, setChecked] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(600);

  useResizeObserver(targetRef, (entries) => {
    for (let entry of entries) {
      if (entry.contentBoxSize) {
        const inlineSize = Array.isArray(entry.contentBoxSize)
          ? entry.contentBoxSize[0]?.inlineSize
          : 0;
        setFontSize(Math.max(1.5, inlineSize / 200));
      } else {
        setFontSize(Math.max(1.5, entry.contentRect.width / 200));
      }
    }
    console.log("Size changed");
  });

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setWidth(value);
    targetRef.current?.style.setProperty("width", `${value}px`);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked(true);
      if (targetRef.current && observerRef.current) {
        observerRef.current?.observe(targetRef.current);
      }
    } else {
      setChecked(false);
      if (targetRef.current && observerRef.current) {
        observerRef.current?.unobserve(targetRef.current);
      }
    }
  };

  return (
    <div style={{ width: width, margin: "auto" }}>
      <form>
        <div>
          <label>Observer enabled:</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label>Adjust width:</label>
          <input
            type="range"
            value={width}
            min="200"
            max="600"
            onChange={handleSliderChange}
          />
        </div>
      </form>
      <h1 style={{ fontSize: `${fontSize}rem` }}>What is Lorem Ipsum?</h1>
      <p style={{ fontSize: `${fontSize}rem` }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div ref={targetRef} style={{ width: "600px" }}></div>
    </div>
  );
};
export default ResizeObserver;
