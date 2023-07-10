import { useBase64 } from "use100hooks";

const Base64 = () => {
  const { encode, decode } = useBase64();

  const originalText = "Hello, world!";
  const encodedText = encode(originalText);
  const decodedText = decode(encodedText!);

  return (
    <div>
      <h2>Base64 Example</h2>
      <p>Original Text: {originalText}</p>
      <p>Encoded Text: {encodedText}</p>
      <p>Decoded Text: {decodedText}</p>
    </div>
  );
};
export default Base64;
