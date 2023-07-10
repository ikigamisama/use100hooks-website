import { useRemoveDuplicateLines } from "use100hooks";
import { useState } from "react";

const RemoveDuplicateLines = () => {
  const [text, setText] = useState("");

  const uniqueText = useRemoveDuplicateLines(text);

  return (
    <div>
      <textarea
        value={text}
        className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        value={uniqueText}
        readOnly
      />
    </div>
  );
};
export default RemoveDuplicateLines;
