import { useMounted } from "use100hooks";
import { useEffect } from "react";

const Mounted = () => {
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      console.log("Component is mounted");
    }
  }, [isMounted]);

  if (isMounted) return <p>Component is mounted</p>;

  return <p>Not Mounted Yet</p>;
};
export default Mounted;
