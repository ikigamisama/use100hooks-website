import { useGeolocation } from "use100hooks";

const Geolocation = () => {
  const { coordinates, error } = useGeolocation();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!coordinates) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Location:</h1>
      <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p>
    </div>
  );
};
export default Geolocation;
