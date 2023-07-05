import { usePageLeave } from "use100hooks";

const PageLeave = () => {
  const handlePageLeave = () => {
    /**Logic to handlee page leave */
  };

  usePageLeave(handlePageLeave);

  return <div>My Component</div>;
};
export default PageLeave;
