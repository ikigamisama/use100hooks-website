import { useDataFrame } from "use100hooks";
import { useState } from "react";

type DataFrameRow = Record<string, any>;

const DataFrame = () => {
  const [data, setData] = useState<DataFrameRow[]>([
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Bob", age: 35, city: "Chicago" },
  ]);

  const { dataFrame, getColumn, filterByColumnValue, groupByColumn, addRow } =
    useDataFrame(data);

  const handleAddRow = () => {
    const newRow = { name: "Alice", age: 28, city: "London" };
    addRow(newRow);
  };

  return (
    <div>
      <h1>Data Frame</h1>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <ul>
        {dataFrame.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>

      <h2>Column: Name</h2>
      <ul>
        {getColumn("name").map((value: any, index: number) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h2>Filtered Data (City: New York)</h2>
      <ul>
        {filterByColumnValue("city", "New York").map(
          (row: DataFrameRow, index: number) => (
            <li key={index}>{JSON.stringify(row)}</li>
          )
        )}
      </ul>

      <h2>Grouped Data (By City)</h2>
      {Array.from(groupByColumn("city")).map(
        ([key, group]: [any, DataFrameRow[]], index: number) => (
          <div key={index}>
            <h3>{key}</h3>
            <ul>
              {group.map((row: DataFrameRow, index: number) => (
                <li key={index}>{JSON.stringify(row)}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
export default DataFrame;
