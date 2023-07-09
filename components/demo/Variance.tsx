import { useVariance } from "use100hooks";

const Variance = () => {
  const numbers = [2, 4, 6, 8, 10];
  const variance = useVariance(numbers);

  return (
    <div>
      <h2>Variance Calculation</h2>
      {variance !== undefined ? (
        <p>The variance is: {variance}</p>
      ) : (
        <p>Calculating variance...</p>
      )}
    </div>
  );
};
export default Variance;
