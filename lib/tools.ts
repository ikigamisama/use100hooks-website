import { ToolsData } from "@/common.types";

import { GrDocumentConfig } from "react-icons/gr";
import { LiaClipboard } from "react-icons/lia";
import { TbBounceRight } from "react-icons/tb";
import { MdStorage } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { VscSymbolParameter } from "react-icons/vsc";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { BsDatabaseFillLock } from "react-icons/bs";
import { LuKeyboard } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";

import DarkMode from "@/components/demo/DarkMode";
import HTMLEscape from "@/components/demo/HTMLEscape";
import Mounted from "@/components/demo/Mounted";
import ClipBoard from "@/components/demo/ClipBoard";
import Debounce from "@/components/demo/Debounce";
import DocumentTitle from "@/components/demo/DocumentTitle";
import LocalStorage from "@/components/demo/LocalStorage";
import SessionStorage from "@/components/demo/SessionStorage";
import KeyPress from "@/components/demo/KeyPress";
import Throttle from "@/components/demo/Throttle";

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
  {
    icon: LiaSortAmountDownSolid,
    classIcon: "lia",
    title: "useMounted",
    install: 'import { useMounted } from "use100hooks"',
    description: {
      short: "Determine if a component is mounted using a custom React hook.",
      long: `With this custom hook, you can easily determine if a React component is currently mounted. It manages the mount status internally, providing a boolean value that indicates whether the component is mounted or not. This can be helpful in scenarios where you need to conditionally execute code based on the mount status of the component.`,
    },
    url: "/tools/useMounted",
    return: [
      {
        name: "isMounted",
        type: "boolean",
        description: `A boolean value indicating whether the component is currently mounted.`,
      },
    ],
    demo: Mounted,
    example:
      'import { useMounted } from "use100hooks";import { useEffect } from "react";const Mounted = () => {  const isMounted = useMounted();  useEffect(() => { if (isMounted) { console.log("Component is mounted"); }},[isMounted]); if (isMounted) return <p>Component is mounted</p>; return <p>Not Mounted Yet</p>;};export default Mounted;',
  },
  {
    icon: BsDatabaseFillLock,
    classIcon: "lia",
    title: "useSessionStorage",
    install: 'import { useSessionStorage } from "use100hooks"',
    description: {
      short: "Store and retrieve data in the browser's session storage.",
      long: `The session storage management hook is a versatile and convenient tool for handling session-based data within your React application. With its intuitive interface, it enables seamless interaction with the browser's sessionStorage API, providing efficient storage, retrieval, and removal of session data. Whether you need to persist user preferences, store temporary data, or implement session-specific functionality, this hook simplifies the process and empowers you to manage session storage effortlessly.`,
    },
    url: "/tools/useSessionStorage",
    parameters: [
      {
        name: "key",
        type: "string",
        description: "The key used to store and retrieve the value",
      },
      {
        name: "initalValue",
        type: "string",
        description: "The initial value to set in the session storage",
      },
    ],
    return: [
      {
        name: "set",
        type: "function",
        description: `A function to set the value in the session storage`,
      },
      {
        name: "get",
        type: "function",
        description: `A function to get the current value from the session storage`,
      },
      {
        name: "remove",
        type: "function",
        description: `A function to remove the value from the session storage`,
      },
    ],
    demo: SessionStorage,
    example:
      'import { useSessionStorage } from "use100hooks";const SessionStorage = () => { const { set, get, remove } = useSessionStorage("session", "isLogin"); const handleIsLogin = () => { set("isLogin");};  const handleSetIsLogout = () => { set("isLogout");}; const handleGet = () => { console.log(get());};  const handleRemove = () => {remove();};return (<section><div><button onClick={handleIsLogin} > Set isLogin  </button> <button onClick={handleSetIsLogout} >Set isLogout </button> <button onClick={handleGet}> Get</button><button onClick={handleRemove}>Remove</button></div><p>Value:{get()}</p></section>);};export default SessionStorage;',
  },
  {
    icon: LuKeyboard,
    classIcon: "lu",
    title: "useKeyPress",
    install: 'import { useKeyPress } from "use100hooks"',
    description: {
      short: "Detect and handle key presses.",
      long: `The Key Press Detector is an ingenious custom hook meticulously crafted for ReactJS applications. This remarkable hook empowers you to effortlessly monitor and respond to key presses within your web application, all while providing a seamless user experience. With its intuitive design and ease of integration, the Key Press Detector is the perfect solution for incorporating keyboard interactions into your ReactJS projects.`,
    },
    url: "/tools/useKeyPress",
    parameters: [
      {
        name: "targetKey",
        type: "string",
        description:
          "The key that you want to monitor for key presses. It should be a single character representing the desired key (e.g., 'a', 'Enter', 'ArrowUp').",
      },
    ],
    return: [
      {
        name: "keyPressed",
        type: "boolean",
        description: `The state indicating whether the targetKey is currently being pressed. Returns true if the targetKey is pressed, false otherwise.
        `,
      },
      {
        name: "get",
        type: "function",
        description: `A function to get the current value from the session storage`,
      },
      {
        name: "remove",
        type: "function",
        description: `A function to remove the value from the session storage`,
      },
    ],
    demo: KeyPress,
    example:
      'import { useKeyPress } from "use100hooks";const KeyPress = () => { const aKeyPressed = useKeyPress("a");  const bKeyPressed = useKeyPress("b");  return ( <section><h2>Press "a" or "b" on the keyboard</h2> <p>Pressed "a": {aKeyPressed ? "Yes" : "No"}</p><p>Pressed "b": {bKeyPressed ? "Yes" : "No"}</p></section>);};export default KeyPress;',
  },

  {
    icon: MdProductionQuantityLimits,
    classIcon: "md",
    title: "useThrottle",
    install: 'import { useThrottle } from "use100hooks"',
    description: {
      short:
        "Limit the execution of a function to occur at most once within a specified time interval.",
      long: `The "Function Throttler" is a powerful custom hook designed for ReactJS applications. With this hook, you can effectively control and limit the frequency of function calls within your application. By applying throttling techniques, you can enhance performance, improve user experience, and prevent excessive execution of computationally expensive tasks.`,
    },
    url: "/tools/useThrottle",
    parameters: [
      {
        name: "func",
        type: "function",
        description: "The function to be throttled.",
      },
      {
        name: "delay",
        type: "number",
        description:
          "The delay duration (in milliseconds) between function invocations.",
      },
    ],
    return: [
      {
        name: "throttledFunction",
        type: "function",
        description: `The throttled function that encapsulates the provided func and handles the throttling mechanism.`,
      },
    ],
    demo: Throttle,
    example:
      'import { useThrottle } from "use100hooks";import { useState } from "react";const Throttle = () => {const [count, setCount] = useState(0); const handleThrottledClick = useThrottle((value: number) => {setCount(value);  }, 1000);function handleClick() {handleThrottledClick(count + 1);} return (<section><h2>Throttled Button Click Example</h2><p>Count: {count}</p><p>Delay: 1000ms</p><button onClick={handleClick}>Increment</button></section>);};export default Throttle;',
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
