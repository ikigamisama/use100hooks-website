import { useTextFilpper } from "use100hooks";
import { useState } from "react";

const TextFilpper = () => {
  const [text, setText] = useState("");

  const flippedText = useTextFilpper(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <p>{flippedText}</p>
    </div>
  );
};
export default TextFilpper;
