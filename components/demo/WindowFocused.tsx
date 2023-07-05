import { useWindowFocus } from "use100hooks";

const WindowFocused = () => {
  const isFocused = useWindowFocus();

  return (
    <div>
      <h2>{isFocused ? "Window is focused" : "Window is not focused"}</h2>
    </div>
  );
};
export default WindowFocused;
