import { useBeforeUnload } from "use100hooks";

const BeforeUnload = () => {
  useBeforeUnload("Are you sure you want to leave this page?");

  return <div>My Component</div>;
};
export default BeforeUnload;
