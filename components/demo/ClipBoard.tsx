import { FiCopy } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useClipboard } from "@/dist/useClipboard";

const ClipBoard = () => {
  const [value, setValue] = useState<string>("");
  const [copyValue, copyToClipboard] = useClipboard();

  useEffect(() => {
    setValue(uuidv4());
  }, []);

  const handleCopy = () => {
    copyToClipboard(value);
  };
  return (
    <section>
      <div className="relative mb-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineApi size={22} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleCopy}
          className="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 "
        >
          <FiCopy size={22} />
        </button>
      </div>
      {copyValue && (
        <p className="text-green-500 text-md text-left">
          Api Key Copy Successful
        </p>
      )}
    </section>
  );
};
export default ClipBoard;
