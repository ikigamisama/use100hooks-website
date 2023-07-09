import { useCombinationString } from "use100hooks";

const CombinationString = () => {
  const inputString = "abc";
  const combinations = useCombinationString(inputString);

  return (
    <div>
      <h2>String Combinations</h2>
      {combinations ? (
        <ul>
          {combinations.map((combination, index) => (
            <li key={index}>{combination}</li>
          ))}
        </ul>
      ) : (
        <p>Generating combinations...</p>
      )}
    </div>
  );
};
export default CombinationString;
