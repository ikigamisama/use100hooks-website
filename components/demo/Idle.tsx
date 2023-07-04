import { useIdle } from "use100hooks";

const Idle = () => {
  const isIdle = useIdle({ time: 30000 }); // 30 seconds

  return (
    <section>
      <p>Checking is use is idle within 30 sec</p>
      <div>{isIdle ? <p>User is idle</p> : <p>User is active</p>}</div>
    </section>
  );
};

export default Idle;
