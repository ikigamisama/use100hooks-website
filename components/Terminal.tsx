"use client";
import { TerminalProps } from "@/common.types";
import useCustomState from "@/dist/useCategoryChoose";
import { useClipboard } from "@/dist/useClipboard";
import { BsClipboard, BsFillClipboardCheckFill } from "react-icons/bs";

const Terminal = ({ text }: TerminalProps) => {
  const [selectModuleType, setSelectModuleType] = useCustomState<string>("npm");
  const [copied, copyToClipboard] = useClipboard();

  const handleCopy = () => {
    let toCopy = "";
    if (text) {
      toCopy = text;
    } else {
      toCopy =
        selectModuleType === "npm"
          ? "npm install use100hooks"
          : "yarn add use100hooks";
    }
    copyToClipboard(toCopy);
  };

  return (
    <div className="w-full">
      {text === "" && (
        <div className="flexEnd">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`${
                selectModuleType === "npm"
                  ? "px-4 py-2 text-sm font-medium text-white bg-sky-500 border-sky-500 rounded-l-lg hover:bg-sky-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 "
                  : "px-4 py-2 text-sm font-medium text-sky-500 bg-transparent border border-sky-500 rounded-l-lg hover:bg-sky-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 "
              }`}
              onClick={() => setSelectModuleType("npm")}
            >
              npm
            </button>
            <button
              type="button"
              className={`${
                selectModuleType === "yarn"
                  ? "px-4 py-2 text-sm font-medium text-white bg-sky-500 border-sky-500 rounded-r-lg hover:bg-sky-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 "
                  : "px-4 py-2 text-sm font-medium text-sky-500 bg-transparent border border-sky-500 rounded-r-lg hover:bg-sky-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 "
              }`}
              onClick={() => setSelectModuleType("yarn")}
            >
              yarn
            </button>
          </div>
        </div>
      )}
      <div className="shadow-2xl subpixel-antialiased rounded ">
        <div className="flex items-center h-8 rounded-t-md bg-[#f7fafc] text-center text-black">
          <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
          <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
          <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
        </div>
        <div className="relative w-full bg-[#011627]">
          <div className="flexBetween">
            <pre className="text-lg leading-6 text-left text-slate-50 flex ligatures-none overflow-auto">
              <code className="flex-none min-w-full p-6">
                <span className="flex">
                  {text === "" && (
                    <svg
                      viewBox="0 -9 3 24"
                      aria-hidden="true"
                      className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                  <span className="flex-auto" id="command_package_text">
                    {text === ""
                      ? selectModuleType === "npm"
                        ? "npm install use100hooks"
                        : "yarn add use100hooks"
                      : text}
                  </span>
                </span>
              </code>
            </pre>
            <div className="pr-6 text-white">
              <button type="button" onClick={handleCopy}>
                {copied ? (
                  <BsFillClipboardCheckFill size={20} />
                ) : (
                  <BsClipboard size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terminal;
