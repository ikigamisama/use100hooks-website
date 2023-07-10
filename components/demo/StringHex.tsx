import { useStringHex } from "use100hooks";

const StringHex = () => {
  const { encode, decode } = useStringHex();

  const originalText = "Hello, World!";
  const encodedText = encode(originalText);
  const decodedText = decode(encodedText);

  return (
    <div>
      <h2>Original Text:</h2>
      <p>{originalText}</p>

      <h2>Encoded Text:</h2>
      <p>{encodedText}</p>

      <h2>Decoded Text:</h2>
      <p>{decodedText}</p>
    </div>
  );
};
export default StringHex;
