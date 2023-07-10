import { useRemoveLineBreak } from "use100hooks";
import { useState } from "react";

const RemoveLineBreak = () => {
  const [text, setText] = useState("");

  const textWithoutBreaks = useRemoveLineBreak(text);

  return (
    <div>
      <textarea
        value={text}
        className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        value={textWithoutBreaks}
        readOnly
      />
    </div>
  );
};
export default RemoveLineBreak;
