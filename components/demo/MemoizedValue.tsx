import { useMemoizedValue } from "use100hooks";

const MemoizedValue = () => {
  const { memoizedValue, setValue, resetValue } =
    useMemoizedValue("Initial Value");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    resetValue();
  };

  return (
    <div>
      <h1>Memoized Value Example</h1>
      <p>Current Value: {memoizedValue}</p>
      <input
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        type="text"
        value={memoizedValue}
        onChange={handleChange}
      />
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
export default MemoizedValue;
