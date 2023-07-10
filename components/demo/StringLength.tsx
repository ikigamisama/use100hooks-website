import { useStringLength } from "use100hooks";
import { useState } from "react";

const StringLength = () => {
  const [text, setText] = useState("");

  const textLength = useStringLength(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>Length: {textLength}</p>
    </div>
  );
};
export default StringLength;
