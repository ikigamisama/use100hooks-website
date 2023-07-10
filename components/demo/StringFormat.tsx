import { useStringFormat } from "use100hooks";
import { useState } from "react";

type StringFormatType = "camelCase" | "kebabCase" | "snakeCase" | "startCase";
const StringFormat = () => {
  const [text, setText] = useState("");
  const [formatType, setFormatType] = useState<StringFormatType>("camelCase");

  const formattedText = useStringFormat({ type: formatType, text });

  return (
    <div>
      <input
        type="text"
        value={text}
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <select
        value={formatType}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(event) =>
          setFormatType(event.target.value as StringFormatType)
        }
      >
        <option value="camelCase">camelCase</option>
        <option value="kebabCase">kebabCase</option>
        <option value="snakeCase">snakeCase</option>
        <option value="startCase">startCase</option>
      </select>

      <p>{formattedText}</p>
    </div>
  );
};
export default StringFormat;
