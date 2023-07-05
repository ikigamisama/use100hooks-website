import { useHoverIntent } from "use100hooks";

const HoverIntent = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverIntent({
    sensitivity: 0.7,
    interval: 300,
  });

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "20px",
          backgroundColor: isHovered ? "lightblue" : "white",
        }}
      >
        <h2>Hover over me with intent</h2>
      </div>
    </div>
  );
};
export default HoverIntent;
