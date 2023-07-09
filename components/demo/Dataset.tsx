import { useDataset } from "use100hooks";

const fetchData = async (): Promise<unknown[]> => {
  // Simulate asynchronous data fetching
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 5000 }, (_, index) => `Item ${index}`);
      resolve(data);
    }, 2000);
  });
};

const Dataset = () => {
  const { data, isLoading, error } = useDataset(fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data Set</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Dataset;
