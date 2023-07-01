import { ToolsData } from "@/common.types";
import ClipBoard from "@/components/demo/ClipBoard";
import DocumentTitle from "@/components/demo/DocumentTitle";
import { GrDocumentConfig } from "react-icons/gr";
import { LiaClipboard } from "react-icons/lia";

export const toolsList: ToolsData[] = [
  {
    icon: GrDocumentConfig,
    classIcon: "gr",
    title: "useDocumentTitle",
    install: 'import { useDocumentTitle } from "use100Hooks/useDocumentTitle";',
    description: {
      short: "A custom hook to dynamically update the document title in React.",
      long: `A reusable hook for controlling the document title in React components. Providing a clear and descriptive title for accessibility purposes.
      Updating the title based on real-time data changes or external events.
      Implementing a document title that reflects the current user's context or profile.
      Customizing the title based on user preferences or settings.`,
    },
    url: "/tools/useDocumentTitle",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Title to set for the document or the entire page",
      },
    ],
    demo: DocumentTitle,
    example:
      'import { useDocumentTitle } from "use100hooks/useDocumentTitle"; import { useState } from "react"; const DocumentTitle = () => { const [toggleClick, setToggleClick] = useState(false); useDocumentTitle(`User is ${toggleClick}`);return ( <section><h1 className="mb-4">Check the title after you click the button</h1><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setToggleClick(!toggleClick)}>Status: {toggleClick.toString()}</button></section>);}; export default DocumentTitle;',
  },
  {
    icon: LiaClipboard,
    classIcon: "lia",
    title: "useClipboard",
    install: 'import { useClipboard } from "use100Hooks/useClipboard";',
    description: {
      short: "Read and write data to the clipboard.",
      long: `A custom React hook that provides functionality to easily copy text to the clipboard. It encapsulates the logic for copying text and managing the copied state.`,
    },
    url: "/tools/useClipboard",
    demo: ClipBoard,
    example: "",
  },
];

export function toSearchTools(title: string): ToolsData {
  const results = toolsList.filter((tool) =>
    tool.title.toLowerCase().includes(title.toLowerCase())
  );

  return results[0];
}

export function toSearchToolsKeyObject(title: string): string[] {
  const results: string[] = [];
  toolsList.forEach((tool) => {
    if (tool.title.toLowerCase().includes(title.toLowerCase())) {
      Object.keys(tool).forEach((key) => {
        if (tool[key as keyof ToolsData]) {
          results.push(key);
        }
      });
    }
  });

  return results;
}
