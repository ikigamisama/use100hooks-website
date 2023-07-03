import { ToolsData } from "@/common.types";
import ClipBoard from "@/components/demo/ClipBoard";
import Debounce from "@/components/demo/Debounce";
import DocumentTitle from "@/components/demo/DocumentTitle";
import LocalStorage from "@/components/demo/LocalStorage";
import { GrDocumentConfig } from "react-icons/gr";
import { LiaClipboard } from "react-icons/lia";
import { TbBounceRight } from "react-icons/tb";
import { MdStorage } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { VscSymbolParameter } from "react-icons/vsc";
import DarkMode from "@/components/demo/DarkMode";
import HTMLEscape from "@/components/demo/HTMLEscape";

export const toolsList: ToolsData[] = [
  {
    icon: GrDocumentConfig,
    classIcon: "gr",
    title: "useDocumentTitle",
    install: 'import { useDocumentTitle } from "use100hooks";',
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
      'import { useDocumentTitle } from "use100hooks"; import { useState } from "react"; const DocumentTitle = () => { const [toggleClick, setToggleClick] = useState(false); useDocumentTitle(`User is ${toggleClick}`);return ( <section><h1 className="mb-4">Check the title after you click the button</h1><button onClick={() => setToggleClick(!toggleClick)}>Status: {toggleClick.toString()}</button></section>);}; export default DocumentTitle;',
  },
  {
    icon: LiaClipboard,
    classIcon: "lia",
    title: "useClipboard",
    install: 'import { useClipboard } from "use100Hooks";',
    description: {
      short: "Read and write data to the clipboard.",
      long: `A custom React hook that provides functionality to easily copy text to the clipboard. It encapsulates the logic for copying text and managing the copied state.`,
    },
    url: "/tools/useClipboard",
    parameters: [
      {
        name: "value",
        type: "string",
        description: "The text to be copied to the clipboard.",
      },
    ],
    return: [
      {
        name: "copied",
        type: "boolean",
        description:
          "A state variable indicating whether the text has been successfully copied to the clipboard.",
      },
      {
        name: "copyToClipboard",
        type: "(text: string) => void",
        description:
          "A function that accepts a text parameter and attempts to copy it to the clipboard.",
      },
    ],
    demo: ClipBoard,
    example:
      'import { useState } from "react"; import { useClipboard } from "use100Hooks";const ClipBoard = () => {  const [value, setValue] = useState("");  const [copyValue, copyToClipboard] = useClipboard();  const handleCopy = () => {    copyToClipboard(value);  };  return (    <section><div><input type="text" value={value} onChange={(e) => setValue(e.target.value)} /><button type="button" onClick={handleCopy}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button></div>{copyValue && (<p>Api Key Copy Successful</p>)}</section>);};export default ClipBoard;',
  },
  {
    icon: TbBounceRight,
    classIcon: "tb",
    title: "useDebounce",
    install: 'import { useDebounce } from "use100hooks";',
    description: {
      short: "Delay the execution of a function until after a specified delay.",
      long: `The useDebounce custom hook is a utility function in React that enables debouncing of a value. It accepts a value and a delay duration as input parameters. When the value changes, the hook delays updating the debounced value for the specified delay duration. This helps optimize performance by preventing rapid and unnecessary updates, particularly useful for scenarios like search input fields where you want to wait for the user to finish typing before triggering a search operation.`,
    },
    url: "/tools/useDebounce",
    parameters: [
      {
        name: "value",
        type: "any",
        description: "The value to be debounced.",
      },
      {
        name: "delay",
        type: "number",
        description:
          "The delay in milliseconds before the debounced value is updated.",
      },
    ],
    return: [
      {
        name: "debouncedValue",
        type: "any",
        description:
          "The debounced value, which is the delayed value of the original input value.",
      },
    ],
    demo: Debounce,
    example:
      'import { useDebounce } from "use100hooks";import { useState } from "react";const Debounce = () => { const [value, setValue] = useState(""); const debounceValue = useDebounce(value, 250);  return (<section><div><input type="text" value={value} onChange={(e) => setValue(e.target.value)}/></div><p>Value: {debounceValue}</p></section>);};export default Debounce;',
  },
  {
    icon: MdStorage,
    classIcon: "md",
    title: "useLocalStorage",
    install: 'import { useLocalStorage } from "use100Hooks;',
    description: {
      short: "Store and retrieve data in the browser's local storage.",
      long: `The useLocalStorage hook allows you to store and retrieve values in the browser's localStorage. It provides a simple and convenient way to persist data across page reloads or even when the browser is closed.`,
    },
    url: "/tools/useLocalStorage",
    parameters: [
      {
        name: "key",
        type: "string",
        description: "The key to identify the value in localStorage.",
      },
      {
        name: "initialValue",
        type: "any",
        description:
          "The initial value to be stored in localStorage if no value is found.",
      },
    ],
    return: [
      {
        name: "storedValue",
        type: "any",
        description: "The current value stored in localStorage.",
      },
      {
        name: "setValue",
        type: "function",
        description: "A function to update the stored value in localStorage.",
      },
      {
        name: "removeValue",
        type: "function",
        description: "A function to remove the stored value from localStorage.",
      },
    ],
    demo: LocalStorage,
    example:
      'import { useLocalStorage } from "use100Hooks"; import { useState } from "react"; const LocalStorage = () => { const [info,setInfo] = useState({first_name:"",last_name:""}); const [data,setData,removeData] = useLocalStorage("name",""); const handleOnSubmit = (e) => {e.preventDefault();let d=JSON.stringify({first_name:info.first_name,last_name:info.last_name,}); setData(d); }; return (<section><form method="post" onSubmit={handleOnSubmit}><div><label htmlFor="first_name">Firstname</label><input type="text" id="first_name" value={info.first_name} onChange={(e)=>setInfo({...info,first_name:e.target.value})}/></div><div><label htmlFor="last_name">LastName</label><input type="text" id="last_name" value={info.last_name} onChange={(e)=>setInfo({...info,last_name:e.target.value})}/></div><button type="submit">Submit</button></form>{ data && (<div><p>LocalstorageValue</p><p>FirstName:{JSON.parse(data).first_name}</p><p>LastName:{JSON.parse(data).last_name}</p><button type="button" onClick={removeData}>RemoveLocalstorage</button></div>)}</section>);}; export default LocalStorage;',
  },
  {
    icon: FaMoon,
    classIcon: "fa",
    title: "useDarkMode",
    install: 'import { useDarkMode } from "use100hooks"',
    description: {
      short: "Enable and manage dark mode functionality.",
      long: `The useDarkMode hook simplifies the process of implementing a dark mode feature in your React application. It internally manages the state of the dark mode, persisting the user's preference across sessions. The hook exposes a boolean value that reflects the current mode, allowing you to conditionally render components based on the theme. Furthermore, it provides a toggle function that enables users to switch between the light and dark modes with a single click. By abstracting the complexity of state management, the useDarkMode hook empowers you to create visually appealing and customizable user interfaces.`,
    },
    url: "/tools/useDarkMode",
    return: [
      {
        name: "isDarkMode",
        type: "boolean",
        description:
          "A boolean value indicating whether the dark mode is currently active.",
      },
      {
        name: "toggleDarkMode",
        type: "function",
        description: "A function to toggle the dark mode on and off.",
      },
    ],
    demo: DarkMode,
    example:
      'import { useDarkMode } from "use100hooks";import { FaMoon, FaSun } from "react-icons/fa";const DarkMode = () => { const [isDarkMode, toggleDarkMode] = useDarkMode(); const handleToggle = () => {if (typeof toggleDarkMode === "function") { toggleDarkMode();}}; return (<section><button type="button" onClick={handleToggle}>{isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}</button><p className="mt-4">Is Dark theme: {isDarkMode?.toString()}</p></section>);};export default DarkMode;',
  },

  {
    icon: VscSymbolParameter,
    classIcon: "vcs",
    title: "useHTMLentities",
    install: 'import { useHTMLentities } from "use100hooks"',
    description: {
      short: "Simplify the process of escaping and unescaping HTML entities",
      long: `The useHTML hook is a valuable addition to your React development toolkit. It provides an intuitive way to manage HTML entities in your application, offering both escape and unescape functionality. When using the hook, you can supply an initial value, and it will automatically escape any HTML entities within the string. This ensures that the entities are safely displayed as plain text, preventing them from being interpreted as markup or triggering unintended behavior. Conversely, the hook also supports unescaping, allowing you to effortlessly convert escaped entities back to their original characters when required. By utilizing the useHTML hook, you can maintain control over HTML entities, ensuring the integrity and security of your React components.`,
    },
    url: "/tools/useHTMLentities",
    parameters: [
      {
        name: "value",
        type: "string",
        description: "The input string to be escaped or unescaped",
      },
    ],
    return: [
      {
        name: "escapeHTML - value",
        type: "function",
        description: `a function that takes a string input and escapes certain HTML entities within the string. It replaces characters like <, >, &, ", and ' with their corresponding HTML entity codes. This ensures that the string is safely rendered as HTML without causing unintended interpretation or rendering issues.`,
      },
      {
        name: "unescapeHTML - value",
        type: "function",
        description: `a function that takes a string input and unescapes HTML entities within the string. It reverses the process of escaping by replacing HTML entity codes like &lt;, &gt;, &amp;, ", and ' with their original characters. This function is useful when you need to decode HTML entities in a string back to their original form.`,
      },
    ],
    demo: HTMLEscape,
    example:
      'import { useHTMLEntities } from "use100hooks";import { useState } from "react";const HTMLEscape = () => { const { escapeHTML, unescapeHTML } = useHTMLEntities();  const [code] = useState("<p>This is a paragraph Text</p>");  const convertEscape = (text: string) => { return escapeHTML(text);  };  const convertUnescape = (text: string) => { return unescapeHTML(text);}; return (<section><p>HTML Code: {code}</p><p>Escape HTML Convert: {convertEscape(code)}</p><p>Unescape HTML Convert: {convertUnescape(code)}</p></section>);};export default HTMLEscape;',
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
