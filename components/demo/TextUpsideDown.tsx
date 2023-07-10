import { useTextUpsideDown } from "use100hooks";

const TextUpsideDown = () => {
  const inputText = "Hello, World!";
  const upsideDownText = useTextUpsideDown(inputText);

  return (
    <div>
      <h2>Text Upside Down Conversion</h2>
      <p>Input Text: {inputText}</p>
      <p>Upside Down Text: {upsideDownText}</p>
    </div>
  );
};
export default TextUpsideDown;
