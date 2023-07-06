import { useRandomNumber } from "use100hooks";

const RandomNumber = () => {
  const [number, generateRandomNumber] = useRandomNumber(1, 10);

  const handleClick = () => {
    generateRandomNumber();
  };

  return (
    <div>
      <h1>Random Number: {number}</h1>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleClick}
      >
        Generate Random Number
      </button>
    </div>
  );
};
export default RandomNumber;
