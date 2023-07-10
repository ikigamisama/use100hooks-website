import { useReverseString } from "use100hooks";

const ReverseString = () => {
  const text = "Hello, world!";
  const reversedText = useReverseString(text);

  return (
    <div>
      <h2>Reverse String Example</h2>
      <p>Original Text: {text}</p>
      <p>Reversed Text: {reversedText}</p>
    </div>
  );
};
export default ReverseString;
