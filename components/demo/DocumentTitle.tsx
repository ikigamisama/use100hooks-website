import { useDocumentTitle } from "@/dist/useDocumentTitle";
import { useState } from "react";

const DocumentTitle = () => {
  const [toggleClick, setToggleClick] = useState<boolean>(false);

  useDocumentTitle(`User is ${toggleClick}`);
  return (
    <section>
      <h1 className="mb-4">Check the title after you click the button</h1>

      <button
        className="text-white bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        onClick={() => setToggleClick(!toggleClick)}
      >
        Status: {toggleClick.toString()}
      </button>
    </section>
  );
};
export default DocumentTitle;
