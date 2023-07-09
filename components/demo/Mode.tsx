import { useMode } from "use100hooks";

const Mode = () => {
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  const mode = useMode(numbers);

  return (
    <div>
      <h2>Mode Calculation</h2>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Mode: {mode ? mode.join(", ") : "No mode"}</p>
    </div>
  );
};
export default Mode;
