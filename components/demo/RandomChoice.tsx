import { useRandomChoice } from "use100hooks";

const RandomChoice = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const randomFruit = useRandomChoice(fruits);

  return (
    <div>
      <h1>Random Fruit: {randomFruit}</h1>
    </div>
  );
};
export default RandomChoice;
