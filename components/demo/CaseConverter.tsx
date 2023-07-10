import { useCaseConverter } from "use100hooks";
import { useState } from "react";

type CaseType = "Upper Case" | "Lower Case" | "Title Case" | "Sentence Case";
const CaseConverter = () => {
  const [text, setText] = useState("");
  const [caseType, setCaseType] = useState<CaseType>("Upper Case");

  const convertedText = useCaseConverter(text, caseType);

  return (
    <div>
      <input
        type="text"
        value={text}
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => setText(event.target.value)}
      />

      <select
        value={caseType}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(event) => setCaseType(event.target.value as CaseType)}
      >
        <option value="Upper Case">Upper Case</option>
        <option value="Lower Case">Lower Case</option>
        <option value="Title Case">Title Case</option>
        <option value="Sentence Case">Sentence Case</option>
      </select>

      <p>{convertedText}</p>
    </div>
  );
};
export default CaseConverter;
