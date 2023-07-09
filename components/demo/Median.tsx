import { useMedian } from "use100hooks";

const Median = () => {
  const numbers = [5, 10, 15, 20, 25];
  const [median, recalculateMedian] = useMedian(numbers);

  return (
    <div>
      <h2>Median Calculation</h2>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Median: {median}</p>
      <button onClick={recalculateMedian}>Recalculate</button>
    </div>
  );
};
export default Median;
