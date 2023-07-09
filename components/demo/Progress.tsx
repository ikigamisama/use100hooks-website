import { useProgress } from "use100hooks";
import { useEffect } from "react";

const Progress = () => {
  const { progress, setProgress } = useProgress(100);

  // Simulate progress completion after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(99);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setProgress]);

  return (
    <div>
      <h1>Progress Example</h1>
      <p>Progress: {progress}%</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "20px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "blue",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
