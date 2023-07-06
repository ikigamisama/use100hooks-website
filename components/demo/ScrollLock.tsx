import { useScrollLock } from "use100hooks";
import { useRef } from "react";

const ScrollLock = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll, enableBodyScroll, disableBodyScroll } =
    useScrollLock(targetRef, {
      overflowX: true,
      overflowY: true,
    });

  return (
    <div>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={lockScroll}
      >
        Lock Scroll
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={unlockScroll}
      >
        Unlock Scroll
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={disableBodyScroll}
      >
        Lock Scroll (Body)
      </button>
      <button
        className="mb-4 text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={enableBodyScroll}
      >
        Unlock Scroll (Body)
      </button>
      <div
        ref={targetRef}
        style={{
          height: "200px",
          overflow: "auto",
          border: "1px dashed black",
        }}
      >
        <div style={{ height: "400px" }}></div>
      </div>
    </div>
  );
};
export default ScrollLock;
