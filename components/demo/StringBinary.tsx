import { useStringBinary } from "use100hooks";

const StringBinary = () => {
  const { encode, decode } = useStringBinary();

  const originalText = "Hello, World!";
  const encodedText = encode(originalText);
  const decodedText = decode(encodedText);

  return (
    <div>
      <h2>Original Text:</h2>
      <p>{originalText}</p>

      <h2>Encoded Text (Binary):</h2>
      <p>{encodedText}</p>

      <h2>Decoded Text:</h2>
      <p>{decodedText}</p>
    </div>
  );
};
export default StringBinary;
