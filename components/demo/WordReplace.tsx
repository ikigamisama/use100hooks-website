import { useWordReplacer } from "use100hooks";

const WordReplace = () => {
  const text = "The quick brown fox jumps over the lazy dog.";
  const options = { replaceWord: "fox", withWord: "cat" };
  const replacedText = useWordReplacer(text, options);

  return (
    <div>
      <h2>Word Replacer Example</h2>
      <p>Original Text: {text}</p>
      <p>Replaced Text: {replacedText}</p>
    </div>
  );
};
export default WordReplace;
