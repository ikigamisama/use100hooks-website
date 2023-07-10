import { useMorseCode } from "use100hooks";

const MorseCode = () => {
  const inputText = "Hello, World!";
  const { encryptedText, decryptedText } = useMorseCode(inputText);

  return (
    <div>
      <h2>Morse Code Conversion</h2>
      <p>Input Text: {inputText}</p>
      <p>Encrypted Text (Morse Code): {encryptedText}</p>
      <p>Decrypted Text: {decryptedText}</p>
    </div>
  );
};
export default MorseCode;
