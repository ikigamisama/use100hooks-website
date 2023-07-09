import { useMean } from "use100hooks";

const Mean = () => {
  const numbers = [5, 10, 15, 20, 25];
  const [mean, recalculateMean] = useMean(numbers);

  return (
    <div>
      <h2>Mean Calculation</h2>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Mean: {mean}</p>
      <button onClick={recalculateMean}>Recalculate</button>
    </div>
  );
};
export default Mean;
