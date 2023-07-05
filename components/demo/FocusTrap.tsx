import { useFocusTrap } from "use100hooks";

const FocusTrap = () => {
  const trapRef = useFocusTrap();

  return (
    <div>
      <h1>Focus Trap Example</h1>
      <div ref={trapRef}>
        <input
          className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Input 1"
        />
        <input
          className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Input 2"
        />
        <button className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
          Button 1
        </button>
        <button className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
          Button 2
        </button>
      </div>
    </div>
  );
};
export default FocusTrap;
