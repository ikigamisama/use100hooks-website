import { useCombination } from "use100hooks";

const Combination = () => {
  const items = [1, 2, 3, 4];
  const size = 2;
  const combinations = useCombination(items, size);

  return (
    <div>
      <h2>Combinations</h2>
      {combinations ? (
        <ul>
          {combinations.map((combination, index) => (
            <li key={index}>{JSON.stringify(combination)}</li>
          ))}
        </ul>
      ) : (
        <p>Generating combinations...</p>
      )}
    </div>
  );
};
export default Combination;
