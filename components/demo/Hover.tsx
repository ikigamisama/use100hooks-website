import { useHover } from "use100hooks";

const Hover = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <section>
      <div ref={hoverRef}>
        {isHovered ? (
          <p>Element is being hovered</p>
        ) : (
          <p>Element is not being hovered</p>
        )}
      </div>
    </section>
  );
};
export default Hover;
