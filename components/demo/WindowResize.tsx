import { useWindowResize } from "use100hooks";

const WindowResize = () => {
  const { windowSize } = useWindowResize();

  return (
    <div>
      <h1>Window Resize Example</h1>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
    </div>
  );
};
export default WindowResize;
