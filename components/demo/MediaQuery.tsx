import { useMediaQuery } from "use100hooks";

const MediaQuery = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section>
      <p>Check if it is Mobile View or Desktop View</p>
      <div>{isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}</div>
    </section>
  );
};
export default MediaQuery;
