import { useStringBuilder } from "use100hooks";

const StringBuilder = () => {
  const [text, buildText] = useStringBuilder("Hello", {
    addNewLine: true,
    extraPaddedSpace: true,
  });

  const handleClick = () => {
    buildText("world!");
  };

  return (
    <div>
      <h2>Text Builder Example</h2>
      <pre>{text}</pre>
      <button onClick={handleClick}>Add Text</button>
    </div>
  );
};
export default StringBuilder;
