import { useLocation } from "use100hooks";

const Location = () => {
  const location = useLocation();

  return (
    <section>
      <div>
        <p>Current location: {location}</p>
      </div>
    </section>
  );
};
export default Location;
