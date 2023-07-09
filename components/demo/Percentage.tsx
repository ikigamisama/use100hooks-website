import { usePercentage } from "use100hooks";

const Percentage = () => {
  const numerator = 75;
  const denominator = 100;
  const percentage = usePercentage(numerator, denominator);

  return (
    <div>
      <h2>Percentage Calculation</h2>
      <p>Numerator: {numerator}</p>
      <p>Denominator: {denominator}</p>
      <p>Percentage: {percentage ? `${percentage}%` : "N/A"}</p>
    </div>
  );
};
export default Percentage;
