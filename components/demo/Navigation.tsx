import { useNavigation } from "use100hooks";

const Navigation = () => {
  const handleNext = () => {
    // Logic to navigate to the next page
  };

  const handlePrevious = () => {
    // Logic to navigate to the previous page
  };

  useNavigation("forward", handleNext);
  useNavigation("backward", handlePrevious);

  return <div>My Component</div>;
};
export default Navigation;
