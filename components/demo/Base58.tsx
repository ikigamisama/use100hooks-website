import { useBase58 } from "use100hooks";

const Base58 = () => {
  const { encode, decode } = useBase58();

  const originalText = "Hello, world!";
  const encodedText = encode(originalText);
  const decodedText = decode(encodedText!);

  return (
    <div>
      <h2>Base58 Example</h2>
      <p>Original Text: {originalText}</p>
      <p>Encoded Text: {encodedText}</p>
      <p>Decoded Text: {decodedText}</p>
    </div>
  );
};
export default Base58;
