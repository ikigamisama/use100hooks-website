import { useWindowSize } from "use100hooks";

const WindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <section>
      <div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
      </div>
    </section>
  );
};
export default WindowSize;
