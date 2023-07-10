import { useTruncate } from "use100hooks";

const Truncate = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const options = { length: 10, separator: "......" };

  const truncatedText = useTruncate(text, options);

  return (
    <div>
      <h2>Truncated Text</h2>
      <p>{truncatedText}</p>
    </div>
  );
};
export default Truncate;
