import { useRemoveLineContain } from "use100hooks";
import { useState } from "react";

const RemoveContain = () => {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const filteredText = useRemoveLineContain(text, keyword);

  return (
    <div>
      <textarea
        value={text}
        className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <input
        type="text"
        value={keyword}
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setKeyword(event.target.value)}
      />

      <textarea value={filteredText} readOnly />
    </div>
  );
};
export default RemoveContain;
