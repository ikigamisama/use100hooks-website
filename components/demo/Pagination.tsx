import { usePagination } from "use100hooks";

const generateData = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
    });
  }

  return data;
};

const data = generateData(50);

const Pagination = () => {
  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    data: paginatedData,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination({ data, totalItems: data.length }, itemsPerPage);

  return (
    <div>
      {paginatedData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <div>
        <button
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <select
          value={currentPage}
          onChange={(e) => goToPage(parseInt(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Pagination;
