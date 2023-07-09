import { useMoment } from "use100hooks";

const Moment = () => {
  const datetime = "2023-01-01 12:00:00"; // Example MySQL datetime string
  const { elapsedTime } = useMoment(datetime);

  return (
    <div>
      <h1>Time Elapsed</h1>
      <p>{elapsedTime}</p>
    </div>
  );
};
export default Moment;
