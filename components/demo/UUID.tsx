import { useUIDgenerator } from "use100hooks";

const UUID = () => {
  const v1 = useUIDgenerator("v1"),
    v4 = useUIDgenerator("v4"),
    guid = useUIDgenerator("guid");
  return (
    <section>
      <div>
        <p>v1 - {v1}</p>
        <p>v4 - {v4}</p>
        <p>GUID - {guid}</p>
      </div>
    </section>
  );
};
export default UUID;
