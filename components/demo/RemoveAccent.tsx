import { useRemoveAccent } from "use100hooks";
import { useState } from "react";

const RemoveAccent = () => {
  const [text, setText] = useState("");

  const convertedText = useRemoveAccent(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>{convertedText}</p>
    </div>
  );
};
export default RemoveAccent;
