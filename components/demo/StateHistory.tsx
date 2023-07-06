import { useStateHistory } from "use100hooks";

const StateHistory = () => {
  const { present, past, future, undo, redo, update } =
    useStateHistory("initial");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <div>
      <h1>useHistoryState Example</h1>
      <input
        type="text"
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        value={present}
        onChange={handleInputChange}
      />
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={undo}
        disabled={past.length === 0}
      >
        Undo
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={redo}
        disabled={future.length === 0}
      >
        Redo
      </button>
      <p>Past States: {JSON.stringify(past)}</p>
      <p>Present State: {present}</p>
      <p>Future States: {JSON.stringify(future)}</p>
    </div>
  );
};
export default StateHistory;
