import { useScreenshot } from "use100hooks";
import { useRef } from "react";

const Screenshot = () => {
  const pageRef = useRef<null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const {
    screenshot: pageScreenshot,
    captureScreenshot: capturePageScreenshot,
  } = useScreenshot(pageRef);
  const { screenshot: divScreenshot, captureScreenshot: captureDivScreenshot } =
    useScreenshot(divRef);

  return (
    <div>
      <div>
        <h2>Capture Whole Page</h2>
        {pageScreenshot && (
          <img
            src={pageScreenshot}
            alt="Page Screenshot"
            style={{ width: "100%", height: "300px" }}
          />
        )}
        <button
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={capturePageScreenshot}
        >
          Capture Page Screenshot
        </button>

        <div style={{ margin: "15px 0" }}>
          <h2 style={{ marginBottom: "8px" }}>Capture Specific Div</h2>
          <div
            ref={divRef}
            style={{
              width: "100%",
              height: "150px",
              border: "2px dashed black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <p>This is the area to capture.</p>

            <button
              className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              onClick={captureDivScreenshot}
            >
              Capture Div Screenshot
            </button>
          </div>
        </div>

        {divScreenshot && (
          <img
            src={divScreenshot}
            alt="Div Screenshot"
            style={{ width: "100%", height: "300px" }}
          />
        )}
      </div>
    </div>
  );
};
export default Screenshot;
