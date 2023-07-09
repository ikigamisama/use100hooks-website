import { useMemoizedSearchFilter } from "use100hooks";

const MemoizedSearchFilter = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Adam Johnson", email: "adam@example.com" },
  ];

  const keyFunction = (item: any) => item.name;

  const { filteredData, searchValue, setSearchValue } = useMemoizedSearchFilter(
    data,
    "id",
    keyFunction
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search by Name"
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MemoizedSearchFilter;
