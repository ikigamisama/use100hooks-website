import { ToolsData } from "@/common.types";
import { GrDocumentConfig } from "react-icons/gr";
import { LiaClipboard } from "react-icons/lia";
import { TbBounceRight, TbArrowsRandom } from "react-icons/tb";
import {
  MdStorage,
  MdOutlinePages,
  MdAnimation,
  MdOutlineKeyboardHide,
  MdInput,
  MdSyncLock,
  MdDataArray,
} from "react-icons/md";
import { FaMoon, FaRegWindowMaximize } from "react-icons/fa";
import { VscSymbolParameter } from "react-icons/vsc";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import {
  BsDatabaseFillLock,
  BsFillGeoAltFill,
  BsFillCloudDownloadFill,
  BsBatteryCharging,
  BsFillStickyFill,
  BsCursorText,
} from "react-icons/bs";
import { LuKeyboard, LuPanelBottomInactive } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TfiLayoutSidebarLeft } from "react-icons/tfi";
import { CgScrollV, CgArrowsScrollV } from "react-icons/cg";
import { FaTowerObservation, FaCartFlatbed } from "react-icons/fa6";
import { HiOutlineStatusOnline } from "react-icons/hi";
import {
  BsWindowDesktop,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
import {
  PiFlyingSaucerBold,
  PiIdentificationBadgeFill,
  PiUserFocusBold,
  PiNavigationArrowFill,
  PiCubeFocusDuotone,
} from "react-icons/pi";
import {
  GiNetworkBars,
  GiFloatingPlatforms,
  GiCardRandom,
} from "react-icons/gi";
import {
  AiTwotoneAudio,
  AiOutlineExpandAlt,
  AiOutlineHistory,
} from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import { ImPagebreak } from "react-icons/im";
import { BiScreenshot, BiRefresh } from "react-icons/bi";
import { SiScrollreveal, SiRender } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

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
import ClickOutside from "@/components/demo/ClickOutside";
import ScrollPosition from "@/components/demo/ScrollPosition";
import IntersectionObserver from "@/components/demo/IntersectionObserver";
import OnlineStatus from "@/components/demo/OnlineStatus";
import MediaQuery from "@/components/demo/MediaQuery";
import WindowSize from "@/components/demo/WindowSize";
import Idle from "@/components/demo/Idle";
import Hover from "@/components/demo/Hover";
import Location from "@/components/demo/Location";
import Network from "@/components/demo/Network";
import AnimationFrame from "@/components/demo/AnimationFrame";
import Audio from "@/components/demo/Audio";
import Video from "@/components/demo/Video";
import ResizeObserver from "@/components/demo/ResizeObserver";
import Geolocation from "@/components/demo/Geolocation";
import UUID from "@/components/demo/UUID";
import Focus from "@/components/demo/Focus";
import ScrollUp from "@/components/demo/ScrollUp";
import Navigation from "@/components/demo/Navigation";
import WindowFocused from "@/components/demo/WindowFocused";
import PageLeave from "@/components/demo/PageLeave";
import BeforeUnload from "@/components/demo/BeforeUnload";
import Screenshot from "@/components/demo/Screenshot";
import HoverIntent from "@/components/demo/HoverIntent";
import KeypressCombo from "@/components/demo/KeypressCombo";
import FocusTrap from "@/components/demo/FocusTrap";
import ValidateForm from "@/components/demo/ValidateForm";
import BatteryStatus from "@/components/demo/BatteryStatus";
import StickyEffect from "@/components/demo/StickyEffect";
import Interval from "@/components/demo/Interval";
import MetaTags from "@/components/demo/MetaTags";
import LocalStorageCartEffect from "@/components/demo/LocalStorageCartEffect";
import TypingEffect from "@/components/demo/TypingEffect";
import RandomNumber from "@/components/demo/RandomNumber";
import RandomChoice from "@/components/demo/RandomChoice";
import ScrollLock from "@/components/demo/ScrollLock";
import ContinousRetry from "@/components/demo/ContinousRetry";
import Script from "@/components/demo/Script";
import RenderInfo from "@/components/demo/RenderInfo";
import StateHistory from "@/components/demo/StateHistory";

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
  {
    icon: TfiLayoutSidebarLeft,
    classIcon: "tfi",
    title: "useOnClickOutside",
    install: 'import { useOnClickOutside } from "use100hooks"',
    description: {
      short: "Detect clicks outside of a specified element.",
      long: `The useOnClickOutside hook is a utility hook that enables you to detect clicks or touches outside of a specified element. It is commonly used to handle scenarios such as closing a dropdown menu when the user clicks outside of it. This hook takes in a ref to the target element and a callback handler function to be executed when a click or touch event occurs outside of that element. It sets up event listeners for both mouse down and touch start events on the document. When a click or touch occurs outside of the specified element, the provided handler function is called.`,
    },
    url: "/tools/useOnClickOutside",
    parameters: [
      {
        name: "ref",
        type: "object",
        description:
          "The ref object referencing the element for which the click outside event needs to be detected.",
      },
      {
        name: "handler",
        type: "function",
        description:
          "The callback function to be executed when a click or touch event occurs outside the specified element. It receives the event object (either MouseEvent or TouchEvent) as a parameter.",
      },
    ],

    demo: ClickOutside,
    example:
      'import { useOnClickOutside } from "use100hooks";import { useRef, useState } from "react";const ClickOutside = () => { const [isOpen, setIsOpen] = useState(false);  const [value, setvalue] = useState(""); const dropdownRef = useRef(null);  const toggleDropdown = () => { setIsOpen(!isOpen); }; const handleClickOutside = () => { setIsOpen(false); }; useOnClickOutside(dropdownRef, handleClickOutside); return ( <section><p>After you click the toggle then click outside</p><p>Value: {value}</p><button onClick={toggleDropdown}>Toggle Dropdown</button>{isOpen && (<div ref={dropdownRef} className="dropdown"><ul><li onClick={() => {setvalue("Option 1");setIsOpen(false);}}>Option 1</li><li onClick={() => {setvalue("Option 2");setIsOpen(false);}}>Option 2</li><li onClick={() => {setvalue("Option 3"); setIsOpen(false);}}>Option 3</li></ul></div>)}</section>);};export default ClickOutside;',
  },
  {
    icon: CgScrollV,
    classIcon: "cg",
    title: "useScrollPosition",
    install: 'import { useScrollPosition } from "use100hooks"',
    description: {
      short: "Track and respond to the current scroll position of the page.",
      long: `The useScrollPosition hook is a utility hook that allows you to track and respond to the scroll position of the page within a React component. It provides the current scroll position as an object with x and y coordinates. This hook sets up a scroll event listener and updates the scroll position whenever a scroll event occurs. It also executes a specified effect function with the updated scroll position. This can be useful for implementing scroll-based animations, lazy loading of content, or any functionality that requires monitoring the scroll position of the page.`,
    },
    url: "/tools/useScrollPosition",
    parameters: [
      {
        name: "effect",
        type: "function",
        description:
          "A function to be executed with the updated scroll position. It receives an object with x and y properties representing the current scroll position.",
      },
      {
        name: "dependencies",
        type: "array",
        description:
          "An optional array of dependencies. When provided, the effect function will only be executed if any of the dependencies have changed. This follows the same rules as the dependencies array in useEffect.",
      },
    ],

    demo: ScrollPosition,
    example:
      'import { useScrollPosition } from "use100hooks";import { useState } from "react";const ScrollPosition = () => {const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });  const handleScrollEffect = ({ x, y }: { x: number; y: number }) => {console.log(`Scroll position - x: ${x}, y: ${y}`);setCoordinates({ x: x, y: y });}; useScrollPosition(handleScrollEffect, []); return (<section><div><h2>Scroll Position Example</h2><p>Scroll down to see the scroll position logged in the console.</p><p>Coordinates: X:{coordinates.x} Y:{coordinates.y}</p></div></section>);};export default ScrollPosition',
  },
  {
    icon: FaTowerObservation,
    classIcon: "fa6",
    title: "useIntersectionObserver",
    install: 'import { useIntersectionObserver } from "use100hooks"',
    description: {
      short: "Observe and respond to element intersection with the viewport.",
      long: `The useIntersectionObserver hook is a utility hook that allows you to observe the intersection of a target element with its container or viewport using the Intersection Observer API. It provides access to the IntersectionObserverEntry object, which contains information about the intersection ratio, bounding rectangles, and other relevant data. This hook simplifies the usage of the Intersection Observer pattern and enables you to handle intersection-based behaviors such as lazy loading, infinite scrolling, and animations with ease.`,
    },
    url: "/tools/useIntersectionObserver",
    return: [
      {
        name: "targetRef",
        type: "React.RefObject<HTMLDivElement>",
        description:
          "A ref object that should be assigned to the element you want to observe for intersection.",
      },
      {
        name: "isIntersecting",
        type: "boolean",
        description:
          "A boolean value indicating whether the observed element is currently intersecting the viewport by the specified threshold.",
      },
    ],

    demo: IntersectionObserver,
    example:
      'import { useIntersectionObserver } from "use100hooks";const IntersectionObserver = () => { const [ref, isIntersecting] = useIntersectionObserver(); console.log(isIntersecting);return (<section><p>Check The Console.log to see the progress</p><div ref={ref}>{isIntersecting ? "Element is visible" : "Element is not visible"}</div></section>);};export default IntersectionObserver;',
  },
  {
    icon: HiOutlineStatusOnline,
    classIcon: "hi",
    title: "useOnlineStatus",
    install: 'import { useOnlineStatus } from "use100hooks"',
    description: {
      short: "Track whether the user is currently online or offline.",
      long: `The updated useOnlineStatus hook is a custom React hook that allows you to track and adjust the online status of the user. It provides a tuple containing the current online status (isOnline) and a function (setOnlineStatus) to manually adjust the online status.   By default, the hook utilizes the browser's navigator.onLine property to determine the initial online status and update it automatically when the user's connection changes. However, you can manually toggle the online status by calling setOnlineStatus with a boolean value.`,
    },
    url: "/tools/useOnlineStatus",
    return: [
      {
        name: "isOnline",
        type: "boolean",
        description:
          "A boolean value indicating the online status of the user. true if online, false if offline.",
      },
      {
        name: "setOnlineStatus",
        type: "(online: boolean) => void",
        description: "A function to manually set the online status.",
      },
    ],

    demo: OnlineStatus,
    example:
      'import { useOnlineStatus } from "use100hooks";const OnlineStatus = () => { const [isOnline, setOnlineStatus] = useOnlineStatus(); const handleToggle = () => { setOnlineStatus(!isOnline); };return (<section><div><p>Automatic Online Status: {isOnline ? "Online" : "Offline"}</p><button onClick={handleToggle}>Toggle Online Status</button></div></section> );};export default OnlineStatus;',
  },
  {
    icon: BsWindowDesktop,
    classIcon: "bs",
    title: "useMediaQuery",
    install: 'import { useMediaQuery } from "use100hooks"',
    description: {
      short: "Track and respond to changes in the viewport's media query.",
      long: `The useMediaQuery hook is a custom React hook that allows you to monitor the state of a CSS media query and provides a boolean value indicating whether the query matches or not. The hook takes a query parameter, which is a valid CSS media query string, and returns the current matching status.

      Upon initialization, the hook evaluates the media query using window.matchMedia and sets the initial matching status. It also registers an event listener for changes in the media query status. Whenever the media query state changes, the matches state is updated accordingly.`,
    },
    url: "/tools/useMediaQuery",
    return: [
      {
        name: "matches",
        type: "boolean",
        description:
          "A boolean value indicating whether the media query matches the current screen condition.",
      },
    ],
    parameters: [
      {
        name: "query",
        type: "string",
        description:
          "A valid CSS media query string to evaluate the screen size.",
      },
    ],

    demo: MediaQuery,
    example:
      'import { useMediaQuery } from "use100hooks";const MediaQuery = () => { const isMobile = useMediaQuery("(max-width: 768px)"); return ( <section><p>Check if it is Mobile View or Desktop View</p><div>{isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}</div></section>);};export default MediaQuery;',
  },
  {
    icon: BsReverseLayoutTextWindowReverse,
    classIcon: "bs",
    title: "useWindowSize",
    install: 'import { useWindowSize } from "use100hooks"',
    description: {
      short: "Get the current size of the browser window.",
      long: `The useWindowSize hook is a custom React hook that allows you to track the size of the browser window and provides an object containing the current width and height. It initializes the state with the current window size and updates it whenever the window is resized.

      Upon initialization, the hook sets the initial window size using window.innerWidth and window.innerHeight. It then registers an event listener for window resize events and updates the windowSize state whenever a resize event occurs.`,
    },
    url: "/tools/useWindowSize",
    return: [
      {
        name: "width",
        type: "number",
        description: "The current width of the browser window.",
      },
      {
        name: "height",
        type: "number",
        description: "The current height of the browser window.",
      },
    ],

    demo: WindowSize,
    example:
      'import { useWindowSize } from "use100hooks";const WindowSize = () => {  const { width, height } = useWindowSize(); return (<section><div><p>Window Width:{width}px</p><p>Window Height: {height}px</p></div></section>);};export default WindowSize;',
  },
  {
    icon: LuPanelBottomInactive,
    classIcon: "lu",
    title: "useIdle",
    install: 'import { useIdle } from "use100hooks"',
    description: {
      short: " Detect when the user becomes idle.",
      long: `The useIdle hook is a custom React hook that allows you to track the user's idle state. It detects whether the user has been inactive for a specified duration and provides a boolean value indicating the idle state. The hook takes an options parameter with a time property that represents the idle duration in milliseconds.

      Upon initialization, the hook sets the initial idle state to false. It then registers event listeners for user activity, such as mouse movement, key presses, and scroll events. When the user becomes idle, the isIdle state is set to true. When the user becomes active again, the idle timer is reset, and the isIdle state is set to false.`,
    },
    url: "/tools/useIdle",
    parameters: [
      {
        name: "options",
        type: "IdleOptions",
        description: "An object specifying the options for the idle behavior.",
      },
      {
        name: "options.time",
        type: "number",
        description:
          "The duration in milliseconds for considering the user as idle.",
      },
    ],
    return: [
      {
        name: "isIdle",
        type: "boolean",
        description: "A boolean value indicating the idle state.",
      },
    ],

    demo: Idle,
    example:
      'import { useIdle } from "use100hooks"; const Idle = () => { const isIdle = useIdle({ time: 30000 }); return ( <section><p>Checking is use is idle within 30 sec</p><div>{isIdle ? <p>User is idle</p> : <p>User is active</p>}</div></section>);};export default Idle;',
  },
  {
    icon: PiFlyingSaucerBold,
    classIcon: "lu",
    title: "useHover",
    install: 'import { useHover } from "use100hooks"',
    description: {
      short: "Track whether an element is currently being hovered over.",
      long: `The useHover hook is a custom React hook that allows you to track the hover state of an element. It returns a ref object and a boolean value indicating whether the element is currently being hovered over or not.

      Upon initialization, the hook sets the initial hover state to false. It adds event listeners for mouseenter and mouseleave events to the target element using the ref object. When the element is hovered over, the isHovered state is set to true, and when the mouse leaves the element, the isHovered state is set to false.`,
    },
    url: "/tools/useHover",
    return: [
      {
        name: "hoverRef",
        type: "React.RefObject",
        description:
          "A ref object that should be attached to the element for tracking hover state.",
      },

      {
        name: "isHovered",
        type: "boolean",
        description:
          "A boolean value indicating whether the element is being hovered or not.",
      },
    ],

    demo: Hover,
    example:
      'import { useHover } from "use100hooks";const Hover = () => {  const [hoverRef, isHovered] = useHover();  return ( <section><div ref={hoverRef}>{isHovered ? (<p>Element is being hovered</p>) : ( <p>Element is not being hovered</p>)}</div></section>);};export default Hover;',
  },
  {
    icon: MdOutlinePages,
    classIcon: "md",
    title: "useLocation",
    install: 'import { useLocation } from "use100hooks"',
    description: {
      short: "Get and update the current URL location.",
      long: `The useLocation hook is a custom React hook that allows you to track the current browser location. It returns the current URL as a string.

      Upon initialization, the hook sets the initial location to window.location.href. It adds an event listener for the popstate event, which is triggered when the user navigates back or forward in the browser history. When the popstate event is triggered, the location state is updated with the current URL.`,
    },
    url: "/tools/useLocation",
    return: [
      {
        name: "location",
        type: "string",
        description: "The current URL of the browser window.",
      },
    ],

    demo: Location,
    example:
      'import { useLocation } from "use100hooks";const Location = () => { const location = useLocation();  return ( <section><div><p>Current location: {location}</p></div></section>);};export default Location;',
  },
  {
    icon: GiNetworkBars,
    classIcon: "tfi",
    title: "useNetworkStatus",
    install: 'import { useNetworkStatus } from "use100hooks"',
    description: {
      short:
        "Track the user's network status (e.g., online, offline, slow connection).",
      long: `The useNetworkStatus hook is a powerful tool that allows you to retrieve detailed information about the network status of the user's device. It provides real-time updates on various properties related to the network connection, giving you insights into the current network conditions.

      By using this hook, you can access information such as whether the device is currently online or offline, the type of network connection being used (e.g., WiFi, cellular), the maximum downlink speed in megabits per second, the effective type of the connection (e.g., slow-2g, 4g), the estimated round-trip time of the connection in milliseconds, and whether the user has enabled data-saving mode.`,
    },
    url: "/tools/useNetworkStatus",
    return: [
      {
        name: "online",
        type: "boolean",
        description:
          "Indicates whether the device is currently online or offline.",
      },
      {
        name: "type",
        type: "number",
        description: "The maximum downlink speed in megabits per second.",
      },
      {
        name: "effectiveType",
        type: "string",
        description:
          "The effective type of the connection (e.g., slow-2g, 4g).",
      },
      {
        name: "rtt",
        type: "number",
        description:
          "The estimated round-trip time of the connection in milliseconds.",
      },
      {
        name: "saveData",
        type: "boolean",
        description: "Indicates whether the user has enabled data-saving mode.",
      },
    ],

    demo: Network,
    example:
      'import { useNetworkStatus } from "use100hooks";const Network = () => {  const networkStatus = useNetworkStatus(); return (<div><p>Online: {networkStatus.online ? "Yes" : "No"}</p><p>Network Type: {networkStatus.type}</p><p>Downlink Speed: {networkStatus.downlink} Mbps</p><p>Effective Type: {networkStatus.effectiveType}</p><p>Round-Trip Time: {networkStatus.rtt} ms</p><p>Data Saving Mode: {networkStatus.saveData ? "Enabled" : "Disabled"}</p></div>);};export default Network;',
  },
  {
    icon: MdAnimation,
    classIcon: "md",
    title: "useAnimationFrame",
    install: 'import { useAnimationFrame } from "use100hooks"',
    description: {
      short:
        "Perform animations using the browser's requestAnimationFrame API.",
      long: `The useAnimationFrame hook is a powerful utility that allows you to easily synchronize animations with the browser's built-in requestAnimationFrame API. This hook provides a simple and efficient way to create smooth and performant animations in your React applications.

      By using this hook, you can pass a callback function that will be invoked on each animation frame. The callback receives the elapsed time since the last frame as a parameter, allowing you to create dynamic and time-based animations. You can update the UI, calculate animation values, or perform any other actions needed for your animation logic within the callback.`,
    },
    url: "/tools/useAnimationFrame",
    parameters: [
      {
        name: "callback",
        type: "FrameCallback",
        description: "A callback function that is called on each frame.",
      },
      {
        name: "animationSpeed",
        type: "number",
        description:
          "The speed of the animation. Determines the rate at which the value increments.",
      },
    ],
    demo: AnimationFrame,
    example:
      'import { useAnimationFrame } from "use100hooks";import { useState } from "react";const AnimationFrame = () => { const [count, setCount] = useState(0);  const animate = () => { setCount(Math.floor(value));  };  useAnimationFrame(animate, 0.01);  return (<div><p>Animation Value: {count}</p></div>);};export default AnimationFrame;',
  },
  {
    icon: AiTwotoneAudio,
    classIcon: "ai",
    title: "useAudio",
    install: 'import { useAudio } from "use100hooks"',
    description: {
      short: "Control and interact with audio playback.",
      long: `The useAudio hook is a reusable hook that provides control over an HTML <audio> element. It takes a src parameter which specifies the source URL of the audio file. The hook returns an object with three properties: play, pause, and audioRef. The play function plays the audio, the pause function pauses the audio, and the audioRef is a reference to the <audio> element.`,
    },
    url: "/tools/useAudio",
    parameters: [
      {
        name: "src",
        type: "string",
        description: "The source URL of the audio.",
      },
    ],
    return: [
      {
        name: "play",
        type: "function",
        description: "Function to play the audio.",
      },
      {
        name: "isPlaying",
        type: "boolean",
        description: "Status if the player is still playing",
      },
      {
        name: "pause",
        type: "function",
        description: "Function to pause the audio.",
      },
      {
        name: "audioRef",
        type: "React.RefObject<HTMLAudioElement>",
        description: "Reference to the HTML <audio> element.",
      },
    ],
    demo: Audio,
    example:
      'import { useAudio } from "use100hooks";const Audio = () => { const { play, isPlaying, pause, audioRef } = useAudio("/bosspick.wav"); return ( <section><audio ref={audioRef} /><button onClick={() => (isPlaying ? pause() : play())}>{isPlaying ? "Pause" : "Play"}</button></section> );};export default Audio;',
  },
  {
    icon: RxVideo,
    classIcon: "rs",
    title: "useVideo",
    install: 'import { useVideo } from "use100hooks"',
    description: {
      short: "Control and interact with video playback.",
      long: `The useVideo hook allows you to control the playback of a video element in React. It takes a src parameter that represents the URL of the video file. The hook returns an object containing functions to play, pause, and toggle the video's playback, as well as a reference to the video element.`,
    },
    url: "/tools/useVideo",
    parameters: [
      {
        name: "src",
        type: "string",
        description: "URL of the video file.",
      },
    ],
    return: [
      {
        name: "play",
        type: "function",
        description: "Function to play the video.",
      },
      {
        name: "pause",
        type: "function",
        description: "Function to pause the video.",
      },
      {
        name: "togglePlay",
        type: "function",
        description: "Function to toggle video playback.",
      },
      {
        name: "videoRef",
        type: "React.RefObject<HTMLVideoElement>",
        description: "Reference to the video element.",
      },
    ],
    demo: Video,
    example:
      'import { useVideo } from "use100hooks";const Video = () => { const videoSrc = "/sample-video.mp4";  const { play, pause, togglePlay, videoRef } = useVideo(videoSrc); return ( <div><video ref={videoRef} /><button onClick={play}>Play</button><button onClick={pause}>Pause</button><button onClick={togglePlay}>Toggle Play</button></div>);};export default Video;',
  },

  {
    icon: AiOutlineExpandAlt,
    classIcon: "ai",
    title: "useResizeObserver",
    install: 'import { useResizeObserver } from "use100hooks"',
    description: {
      short: "Observe and respond to changes in the size of an element.",
      long: `The useResizeObserver hook allows you to track the width and height of a specified DOM element in a React component. It uses the ResizeObserver API to monitor changes in the element's size. The hook returns an object with the current width and height of the observed element, along with a reference (targetRef) that you can attach to the element you want to observe.`,
    },
    url: "/tools/useResizeObserver",
    parameters: [
      {
        name: "targetRef",
        type: "RefObject",
        description:
          " RefObject pointing to the target element you want to observe for size changes.",
      },
      {
        name: "callback",
        type: "ResizeObserverCallback",
        description:
          " A callback function that will be invoked whenever a size change is detected by the ResizeObserver. The function receives an array of ResizeObserverEntry objects.",
      },
    ],
    demo: ResizeObserver,
    example:
      'import { useResizeObserver } from "use100hooks"; import{ useRef, useState } from "react";const ResizeObserver=()=>{const targetRef=useRef(null);const observerRef=useRef(null);const[fontSize,setFontSize]=useState(1.5);const[checked,setChecked]=useState(true);const[width,setWidth]=useState(600); useResizeObserver ( targetRef,(entries)=>{for(let entry of entries){if(entry.contentBoxSize){constinlineSize=Array.isArray(entry.contentBoxSize)?entry.contentBoxSize[0]?.inlineSize : 0; setFontSize(Math.max(1.5,inlineSize/200));}else{ setFontSize(Math.max(1.5,entry.contentRect.width/200));}}console.log("Sizechanged");});consthandleSliderChange=(event:React.ChangeEvent<HTMLInputElement>)=>{constvalue=parseFloat(event.target.value);setWidth(value);targetRef.current?.style.setProperty("width",`${value}px`);};consthandleCheckboxChange=(event:React.ChangeEvent<HTMLInputElement>)=>{if(event.target.checked){setChecked(true);if(targetRef.current&&observerRef.current){observerRef.current?.observe(targetRef.current);}}else{setChecked(false);if(targetRef.current&&observerRef.current){observerRef.current?.unobserve(targetRef.current);}}};return(<div style={{width:width,margin:"auto"}}><form><div><label>Observerenabled:</label><input type="checkbox" checked={checked} onChange={handleCheckboxChange}/></div><div><label>Adjustwidth:</label><input type="range" value={width} min="200" max="600" onChange={handleSliderChange}/></div></form><h1 style={{fontSize:`${fontSize}rem`}}>WhatisLoremIpsum?</h1><p style={{fontSize:`${fontSize}rem`}}>Lorem Ipsumis simplydummy text of the printing and type setting industry. Lorem Ipsum as been the industrys standard dummytext ever since the 1500s,when an unknown printer took a galley of typea nd scrambled it to make a type specimen book.</p><div ref={targetRef}style={{width:"600px"}}></div></div>);};export default ResizeObserver;',
  },
  {
    icon: BsFillGeoAltFill,
    classIcon: "bs",
    title: "useGeolocation",
    install: 'import { useGeolocation } from "use100hooks"',
    description: {
      short: "Retrieve the user's current geolocation.",
      long: `The useGeolocation hook allows you to control the playback of a video element in React. It takes a src parameter that represents the URL of the video file. The hook returns an object containing functions to play, pause, and toggle the video's playback, as well as a reference to the video element.`,
    },
    url: "/tools/useGeolocation",
    return: [
      {
        name: "coordinates",
        type: "GeolocationCoordinates | null",
        description: "The current geolocation coordinates, if available.",
      },
      {
        name: "error",
        type: "PositionError | null",
        description: "Any error that occurred during geolocation retrieval.",
      },
    ],
    demo: Geolocation,
    example:
      'import { useGeolocation } from "use100hooks";const Geolocation = () => { const { coordinates, error } = useGeolocation();  if (error) { return <div>Error: {error.message}</div>; } if (!coordinates) {    return <div>Loading...</div>; } return ( <div><h1>Current Location:</h1> <p>Latitude: {coordinates.latitude}</p><p>Longitude: {coordinates.longitude}</p></div>);};export default Geolocation;',
  },

  {
    icon: PiIdentificationBadgeFill,
    classIcon: "pi",
    title: "useUIDgenerator",
    install: 'import { useUIDgenerator } from "use100hooks"',
    description: {
      short:
        "Creates unique random IDs based on the chosen version (v1, v4, or GUID).",
      long: `The useUIDgenerator hook is a tool in JavaScript that generates unique identification numbers based on the specified version. It can create different types of IDs, including v1, v4, and GUID. When you use this hook, it automatically generates a unique ID for you to use in your application. The way the ID is created depends on the version you choose. For example, if you select v1, the ID will include a timestamp combined with a random string. If you choose v4, it will be a random string composed of four parts. And if you opt for GUID, the ID will follow a specific pattern with placeholders that are replaced by random numbers and letters. The useUIDgenerator hook is a convenient tool for developers who need to generate unique IDs in their projects without having to worry about the details of the ID creation process.`,
    },
    url: "/tools/useUIDgenerator",
    return: [
      {
        name: "uid",
        type: "string",
        description:
          "The generated unique ID based on the specified version of the hook.",
      },
    ],
    parameters: [
      {
        name: "version",
        type: "string",
        description: `The version of the unique ID to generate. It can be one of "v1", "v4", or "guid".`,
      },
    ],
    demo: UUID,
    example:
      'import { useUIDgenerator } from "use100hooks";const UUID = () => {  const v1 = useUIDgenerator("v1"),    v4 = useUIDgenerator("v4"),    guid = useUIDgenerator("guid");  return ( <section><div><p>v1 - {v1}</p><p>v4 - {v4}</p><p>GUID - {guid}</p></div></section>);};export default UUID;',
  },
  {
    icon: PiUserFocusBold,
    classIcon: "pi",
    title: "useFocus",
    install: 'import { useFocus } from "use100hooks"',
    description: {
      short: "Track and manage the focus state of an element.",
      long: `The useFocus hook is a powerful tool in React that simplifies the process of managing focus on an input element. By using this hook, you can automatically set focus to the input element when your component mounts, without the need for manual intervention. Under the hood, the hook utilizes the useRef and useEffect hooks from React. It creates a ref using the useRef hook, which is then assigned to the input element you want to focus. The useEffect hook is employed to trigger the focus effect only once, ensuring that the input element receives focus when the component is mounted.`,
    },
    url: "/tools/useFocus",
    return: [
      {
        name: "inputRef",
        type: "React.RefObject<HTMLInputElement>",
        description:
          "The reference object for the input element to be focused.",
      },
      {
        name: "isFocused",
        type: "boolean",
        description:
          "A boolean value indicating whether the input element has focus or not.",
      },
    ],
    demo: Focus,
    example:
      'import { useFocus } from "use100hooks";const Focus = () => {  const { inputRef, isFocused } = useFocus();  return ( <div><h1>Focus Example</h1><input ref={inputRef} type="text" /> <p>Start typing in the input field to see the focus in action.</p> <p>Is Focus {isFocused.toString()}</p></div> );};export default Focus;',
  },
  {
    icon: CgArrowsScrollV,
    classIcon: "cg",
    title: "useScrollTop",
    install: 'import { useScrollTop } from "use100hooks"',
    description: {
      short: "Scroll to the top of the page on component mount.",
      long: `The useScrollToTop hook is a handy tool in React that enables smooth scrolling to the top of a page. It works by adding a scroll event listener to the window and keeping track of the scroll position. When the user scrolls beyond a certain threshold (300 pixels in this example), a scroll-to-top button becomes visible, indicating that they can click it to smoothly scroll back to the top of the page. This hook provides a convenient and reusable solution for implementing a scroll-to-top functionality in your React applications, enhancing the user experience and navigation within long pages.`,
    },
    url: "/tools/useScrollTop",
    return: [
      {
        name: "isVisible",
        type: "boolean",
        description:
          "A boolean value indicating the visibility of the scroll-to-top button.",
      },
      {
        name: "scrollToTop",
        type: "function",
        description:
          "A function that, when invoked, scrolls the page to the top.",
      },
    ],
    parameters: [
      {
        name: "heightToShow",
        type: "number",
        description:
          "The height at which the scroll-to-top button should become visible.",
      },
    ],
    demo: ScrollUp,
    example:
      'import { useScrollTop } from "use100hooks";const ScrollUp = () => { const { isVisible, scrollToTop } = useScrollTop(200); return (<section><button onClick={scrollToTop}>Scroll to Top</button><p>Scrollup feature will appear {isVisible.toString()}</p></section>);};export default ScrollUp;',
  },
  {
    icon: PiNavigationArrowFill,
    classIcon: "pi",
    title: "useNavigation",
    install: 'import { useNavigation } from "use100hooks"',
    description: {
      short: "Manage and control navigation within your application.",
      long: `The useNavigation hook allows you to handle keyboard navigation in your React components. It takes in two parameters: direction and callback. The direction parameter specifies whether the navigation should be triggered for the "forward" or "backward" direction. The callback is a function that will be invoked when the corresponding navigation key is pressed.`,
    },
    url: "/tools/useNavigation",

    parameters: [
      {
        name: "direction",
        type: "string",
        description:
          "The direction of the navigation. Specifies whether the navigation should be triggered for forward or backward.",
      },
      {
        name: "callback",
        type: "function",
        description:
          "The callback function to be invoked when the corresponding navigation key is pressed.",
      },
    ],
    demo: Navigation,
    example:
      'import { useNavigation } from "use100hooks"; const Navigation = () => {  const handleNext = () => { /**Logic to navigate to the next page**/  };  const handlePrevious = () => { /**Logic to navigate to the previous page**/  }; useNavigation("forward", handleNext); useNavigation("backward", handlePrevious); return <div>My Component</div>;};export default Navigation;',
  },
  {
    icon: FaRegWindowMaximize,
    classIcon: "cg",
    title: "useWindowFocus",
    install: 'import { useWindowFocus } from "use100hooks"',
    description: {
      short: "Track whether the browser window has focus or is out of focus.",
      long: `The useNavigation hook allows you to handle keyboard navigation in your React components. It takes in two parameters: direction and callback. The direction parameter specifies whether the navigation should be triggered for the "forward" or "backward" direction. The callback is a function that will be invoked when the corresponding navigation key is pressed.`,
    },
    url: "/tools/useWindowFocus",

    return: [
      {
        name: "isWindowFocused",
        type: "boolean",
        description:
          "The useWindowFocus hook allows you to track the focus state of the browser window in your React components. It returns a boolean value that indicates whether the window is currently focused or not.",
      },
    ],
    demo: WindowFocused,
    example:
      'import { useWindowFocus } from "use100hooks";const WindowFocused = () => {  const isFocused = useWindowFocus();  return ( <div><h2>{isFocused ? "Window is focused" : "Window is not focused"}</h2></div>);};export default WindowFocused;',
  },
  {
    icon: ImPagebreak,
    classIcon: "in",
    title: "usePageLeave",
    install: 'import { usePageLeave } from "use100hooks"',
    description: {
      short: "Trigger an action when the user leaves the current page.",
      long: `The useNavigation hook allows you to handle keyboard navigation in your React components. It takes in two parameters: direction and callback. The direction parameter specifies whether the navigation should be triggered for the "forward" or "backward" direction. The callback is a function that will be invoked when the corresponding navigation key is pressed.`,
    },
    url: "/tools/usePageLeave",
    parameters: [
      {
        name: "callback",
        type: "function",
        description:
          "The callback function to be invoked when the user tries to leave the page.",
      },
    ],
    demo: PageLeave,
    example:
      'import { usePageLeave } from "use100hooks";const PageLeave = () => {  const handlePageLeave = () => {  /**Logic to handlee page leave */  };  usePageLeave(handlePageLeave);  return <div>My Component</div>;}; export default PageLeave;',
  },
  {
    icon: BsFillCloudDownloadFill,
    classIcon: "bs",
    title: "useBeforeUnload",
    install: 'import { useBeforeUnload } from "use100hooks"',
    description: {
      short:
        "Execute a function before the user leaves the page or closes the window.",
      long: `The useBeforeUnload hook allows you to display a custom message to the user when they try to leave the page. It takes a string message as a parameter, which will be shown in the browser's confirmation dialog.`,
    },
    url: "/tools/useBeforeUnload",
    parameters: [
      {
        name: "message",
        type: "string",
        description:
          "The custom message to be displayed in the browser's confirmation dialog.",
      },
    ],
    demo: BeforeUnload,
    example:
      'import { useBeforeUnload } from "use100hooks";const BeforeUnload = () => {  useBeforeUnload("Are you sure you want to leave this page?");  return <div>My Component</div>;};export default BeforeUnload;',
  },
  {
    icon: BiScreenshot,
    classIcon: "bi",
    title: "useScreenshot",
    install: 'import { useScreenshot } from "use100hooks"',
    description: {
      short: "Capture screenshots of the current page or specific elements.",
      long: `The updated useScreenshot hook allows developers to specify a specific <div> area using useRef or whole page. Only the contents within the specified area will be captured in the screenshot.`,
    },
    url: "/tools/useScreenshot",
    parameters: [
      {
        name: "message",
        type: "string",
        description:
          "The custom message to be displayed in the browser's confirmation dialog.",
      },
    ],
    return: [
      {
        name: "screenshot",
        type: "string | null",
        description: "A data URL string representing the captured screenshot.",
      },
    ],
    demo: Screenshot,
    example:
      'import { useScreenshot } from "use100hooks";import { useRef } from "react";const Screenshot = () => {  const pageRef = useRef(null);  const divRef = useRef(null);  const { screenshot: pageScreenshot,captureScreenshot: capturePageScreenshot } = useScreenshot(pageRef);  const { screenshot: divScreenshot, captureScreenshot: captureDivScreenshot } = useScreenshot(divRef);  return ( <div><div><h2>Capture Whole Page</h2>{pageScreenshot && (<img src={pageScreenshot} alt="Page Screenshot" style={{ width: "100%", height: "300px" }} />)}<button onClick={capturePageScreenshot}>Capture Page Screenshot</button><div style={{ margin: "15px 0" }}><h2 style={{ marginBottom: "8px" }}>Capture Specific Div</h2><div ref={divRef} style={{ width: "100%", height: "150px", border: "2px dashed black", display: "flex", alignItems: "center", justifyContent: "center",flexDirection: "column", padding: "8px", }}><p>This is the area to capture.</p><button onClick={captureDivScreenshot}>Capture Div Screenshot</button></div></div>{divScreenshot && ( <img src={divScreenshot}  alt="Div Screenshot" style={{ width: "100%", height:"300px" }} /> )}</div></div>);};export default Screenshot;',
  },
  {
    icon: GiFloatingPlatforms,
    classIcon: "gi",
    title: "useHoverIntent",
    install: 'import { useHoverIntent } from "use100hooks"',
    description: {
      short: "Track when a hover action is intentional or accidental.",
      long: `The useHoverIntent hook is a customizable React hook that allows you to detect hover events with intent. It provides a more precise way of determining intentional hovers by taking into account the sensitivity and movement interval of the mouse. With this hook, you can create interactive components that respond specifically to deliberate hover actions, enhancing user experience and engagement. By using the useHoverIntent hook, you can define the sensitivity level and interval time for hover intent detection. The sensitivity parameter determines the minimum distance the mouse must move within the interval to be considered an intentional hover. A higher sensitivity value makes the hover detection more strict, requiring the mouse to move a greater distance to trigger the intent. On the other hand, a lower sensitivity value makes the detection more lenient, considering smaller mouse movements as intent.`,
    },
    url: "/tools/useHoverIntent",
    return: [
      {
        name: "isHovered",
        type: "boolean",
        description:
          "Indicates whether the element is currently being hovered with intent.",
      },
      {
        name: "handleMouseEnter",
        type: "function",
        description: "Event handler function for mouse enter event.",
      },
      {
        name: "handleMouseLeave",
        type: "function",
        description: "Event handler function for mouse leave event.",
      },
    ],
    parameters: [
      {
        name: "options",
        type: "Partial<HoverIntentOptions>",
        description:
          "Optional: Configuration options for hover intent behavior.",
      },
      {
        name: "sensitivity",
        type: "number",
        description: "Optional: Sensitivity level for detecting hover intent.",
      },
      {
        name: "interval",
        type: "number",
        description:
          "Optional: Interval time in milliseconds for hover intent detection.",
      },
    ],
    demo: HoverIntent,
    example:
      'import { useHoverIntent } from "use100hooks";const HoverIntent = () => { const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverIntent({ sensitivity: 0.7,interval: 300}); return (<div><div onMouseEnter={handleMouseEnter}        onMouseLeave={handleMouseLeave} style={{ padding: "20px",backgroundColor: isHovered ? "lightblue" : "white"}}><h2>Hover over me with intent</h2></div></div>);};export default HoverIntent;',
  },
  {
    icon: MdOutlineKeyboardHide,
    classIcon: "md",
    title: "useKeyPressCombo",
    install: 'import { useKeyPressCombo } from "use100hooks"',
    description: {
      short: "Detect and handle specific key combinations (e.g., Ctrl + C).",
      long: `The useKeyPressCombo hook is a React hook that allows you to detect specific keyboard key combinations. It provides a convenient way to create custom keyboard shortcuts or secret codes within your application. With this hook, you can define an array of key combinations and their corresponding callbacks. When the specified key combination is pressed simultaneously, the associated callback function will be triggered, allowing you to perform specific actions or handle special scenarios.`,
    },
    url: "/tools/useKeyPressCombo",
    return: [
      {
        name: "pressedKeys",
        type: "array",
        description: "An array containing the currently pressed keys.  ",
      },
    ],
    parameters: [
      {
        name: "keyCombos",
        type: "KeyPressCombo[]",
        description:
          "An array of key combinations and their corresponding callbacks. Each KeyPressCombo object consists of a keyCombo property, which is an array",
      },
    ],
    demo: KeypressCombo,
    example:
      'import { useKeyPressCombo } from "use100hooks";import { useEffect, useState } from "react";const KeypressCombo = () => {  const [isCombo, setIsCombo] = useState(false);  const handleCombo = () => {    console.log("Secret combo activated!"); setIsCombo(true);}; useKeyPressCombo([{ keyCombo: ["Control", "Shift", "K"], callback: handleCombo },]); useEffect(() => { if (isCombo === true) { setTimeout(() => { setIsCombo(false);}, 2000);} }, [isCombo]); return (<div><p>Press and hold Control + Shift + K to activate the secret combo!</p>      <p>Is Combo Active {isCombo.toString()}</p></div>);};export default KeypressCombo;',
  },
  {
    icon: PiCubeFocusDuotone,
    classIcon: "pi",
    title: "useFocusTrap",
    install: 'import { useFocusTrap } from "use100hooks"',
    description: {
      short: "Trap focus within a specific element or component.",
      long: `The useFocusTrap hook is a React hook that enables the creation of a focus trap within a specific container element. It ensures that the focus remains within the trapped area, preventing it from moving outside to other elements on the page. This is useful for modal dialogs, dropdown menus, or any component that requires user interaction without losing focus context. With this hook, you can easily implement a focus trap by providing a container ref and handling keyboard events to manage the focus behavior.`,
    },
    url: "/tools/useFocusTrap",
    return: [
      {
        name: "trapRef",
        type: "React.RefObject<HTMLDivElement>",
        description:
          "A ref object that should be assigned to the container element where the focus trap is applied. ",
      },
    ],
    parameters: [
      {
        name: "isEnabled",
        type: "boolean",
        description:
          "Indicates whether the focus trap is enabled or disabled. When set to true, the focus trap is active, and focus will be trapped within the specified container. By default, it is set to true.",
      },
    ],
    demo: FocusTrap,
    example:
      'import { useFocusTrap } from "use100hooks";const FocusTrap = () => {  const trapRef = useFocusTrap();  return (  <div><h1>Focus Trap Example</h1><div ref={trapRef}><input type="text" placeholder="Input 1" /><input type="text" placeholder="Input 2"/><button>Button 1</button><button> Button 2 </button></div></div>  );};export default FocusTrap;',
  },
  {
    icon: MdInput,
    classIcon: "md",
    title: "useValidatedForm",
    install: 'import { useValidatedForm } from "use100hooks"',
    description: {
      short: "Validate form input fields and handle form submission.",
      long: `The useFocusTrap hook is a React hook that enables the creation of a focus trap within a specific container element. It ensures that the focus remains within the trapped area, preventing it from moving outside to other elements on the page. This is useful for modal dialogs, dropdown menus, or any component that requires user interaction without losing focus context. With this hook, you can easily implement a focus trap by providing a container ref and handling keyboard events to manage the focus behavior.`,
    },
    url: "/tools/useValidatedForm",
    return: [
      {
        name: "formState",
        type: "Record<string, string>",
        description:
          "The current state of the form, where each key represents a form field name and its corresponding value represents the field's value.",
      },
      {
        name: "formErrors",
        type: "FormErrors",
        description:
          "The errors present in the form, where each key represents a form field name, and its corresponding value is an array of error messages.",
      },

      {
        name: "handleInputChange",
        type: "function",
        description:
          "A function to handle changes in form input values. It takes the field name and the new value as parameters.",
      },
      {
        name: "validateForm",
        type: "function",
        description:
          "A function that performs form validation based on the defined validation schema. It returns true if the form is valid, and false otherwise.",
      },
    ],
    parameters: [
      {
        name: "initialFormState",
        type: "Record<string, string>",
        description:
          "The initial state of the form, where each key represents a form field name and its initial value.",
      },
      {
        name: "validationSchema",
        type: "ValidationSchema",
        description:
          "The validation schema object that defines validation rules for each form field.",
      },
    ],
    demo: ValidateForm,
    example:
      'import { useValidateForm } from "use100hooks";const ValidateForm = () => {  const validationSchema = {    name: [      {        validate: (value: string) => value.length > 0,        message: "Name is required",      },    ],    email: [      {        validate: (value: string) => /S+@S+.S+/.test(value), message: "Invalid email format",      },    ],  };  const initialFormState = {    name: "",    email: "",  };  const { formState, formErrors, handleInputChange, validateForm } =    useValidateForm(initialFormState, validationSchema);  const handleSubmit = (e: React.FormEvent) => {    e.preventDefault();    if (validateForm()) {      /**Function Form Submit**/  } };  return ( <form onSubmit={handleSubmit}><div><label> Name</label><input type="text" value={formState.name}onChange={(e) => handleInputChange("name", e.target.value)}/>{formErrors.name && <span>{formErrors.name[0]}</span>}</div><div><label>Email</label><input type="email" value={formState.email} onChange={(e) => handleInputChange("email", e.target.value)}/>{formErrors.email && <span>{formErrors.email[0]}</span>} </div><button type="submit">Submit</button></form>);};export default ValidateForm;',
  },
  {
    icon: BsBatteryCharging,
    classIcon: "bs",
    title: "useBatteryStatus",
    install: 'import { useBatteryStatus } from "use100hooks"',
    description: {
      short: "Track the current battery status of the device.",
      long: `The useBatteryStatus hook is a powerful tool that allows developers to access and monitor the battery status of a user's device in a React application. It provides information about the battery's level, charging status, estimated charging and discharging times, and whether the device supports battery status retrieval.  This hook is particularly useful in scenarios where developers need to build battery-aware applications or provide battery-related features to users. By utilizing the useBatteryStatus hook, developers can create dynamic user interfaces that adapt based on the device's battery conditions.`,
    },
    url: "/tools/useBatteryStatus",
    return: [
      {
        name: "supported",
        type: "boolean",
        description:
          "Indicates whether the battery status is supported by the device.",
      },
      {
        name: "loading",
        type: "boolean",
        description: "Indicates whether the battery status is still loading.",
      },
      {
        name: "level",
        type: "number",
        description: "The current battery level as a percentage (0-1).",
      },
      {
        name: "isCharging",
        type: "boolean",
        description: "Indicates whether the device is currently charging.",
      },
      {
        name: "chargingTime",
        type: "number",
        description:
          "The estimated time remaining for the battery to be fully charged.",
      },
      {
        name: "dischargingTime",
        type: "number",
        description:
          "The estimated time remaining for the battery to be fully discharged.",
      },
    ],

    demo: BatteryStatus,
    example:
      'import { useBatteryStatus } from "use100hooks";const BatteryStatus = () => {  const batteryStatus = useBatteryStatus();  if (!batteryStatus.supported) { return <p>Battery status not supported.</p>; }  if (batteryStatus.loading) { return <p>Loading battery status...</p>;  }return (<div><p>Battery Level: {batteryStatus.level}</p><p>Battery Charging: {batteryStatus.isCharging ? "Yes" : "No"}</p> <p>Charging Time: {batteryStatus.chargingTime} seconds</p><p>Discharging Time: {batteryStatus.dischargingTime} seconds</p></div>);};export default BatteryStatus;',
  },
  {
    icon: BsFillStickyFill,
    classIcon: "bs",
    title: "useStickyEffect",
    install: 'import { useStickyEffect } from "use100hooks"',
    description: {
      short: "Makes an element sticky based on scroll position.",
      long: `The useStickyEffect hook allows you to track whether an element is sticky or not based on the scroll position. It takes a ref object that references the target element to observe. Additionally, you can provide an optional options object to customize the behavior of the sticky effect, such as setting a threshold value. When the scroll position reaches or exceeds the specified threshold, the isSticky value becomes true, indicating that the element is now sticky. As the scroll position changes, the isSticky value is updated accordingly.`,
    },
    url: "/tools/useStickyEffect",
    return: [
      {
        name: "isSticky",
        type: "boolean",
        description: "Indicates whether the element is sticky or not",
      },
    ],
    parameters: [
      {
        name: "ref",
        type: "React.RefObject<HTMLElement>",
        description: "Reference to the element to observe for sticky effect",
      },
      {
        name: "options",
        type: "StickyOptions (optional)",
        description: "Optional configuration for the sticky effect",
      },
      {
        name: "threshold",
        type: "number",
        description: "The scroll position threshold for the sticky effect",
      },
    ],

    demo: StickyEffect,
    example:
      'import { useStickyEffect } from "use100hooks";import { useRef } from "react";const StickyEffect = () => { const ref = useRef(null);  const isSticky = useStickyEffect(ref, { threshold: 100 }); return (<div><div ref={ref}>Content Sticky</div>{isSticky && <div>Yikes its Sticky</div>}</div>);};export default StickyEffect;',
  },
  {
    icon: MdSyncLock,
    classIcon: "md",
    title: "useInterval",
    install: 'import { useInterval } from "use100hooks"',
    description: {
      short: "Execute a function at a specified interval.",
      long: `The useInterval hook allows you to repeatedly call a function at a specified interval. It takes a callback function and a delay value as parameters. The callback function is the function you want to be executed repeatedly, and the delay value represents the interval in milliseconds between each execution.`,
    },
    url: "/tools/useInterval",
    parameters: [
      {
        name: "callback",
        type: "function",
        description: "The function to be executed repeatedly at the interval",
      },
      {
        name: "delay",
        type: "number",
        description:
          "The interval in milliseconds between each execution. A value of null stops the interval.",
      },
    ],

    demo: Interval,
    example:
      'import { useInterval } from "use100hooks";import { useState } from "react";const Interval = () => {  const [count, setCount] = useState(0); useInterval(() => { setCount(count + 1);  }, 1000); return (<div><p>Count: {count}</p></div>);};export default Interval;',
  },
  {
    icon: MdDataArray,
    classIcon: "md",
    title: "useMetaTags",
    install: 'import { useMetaTags } from "use100hooks"',
    description: {
      short: "Apply a meta tags needed ",
      long: `The useMetaTags hook empowers you to effortlessly handle and update the meta tags within your React application. It simplifies the process of managing crucial metadata, including the page title, description, and image URL. Additionally, it allows you to optimize your website's appearance on social media platforms by customizing specific meta tags for Twitter and Facebook. By leveraging this hook, you can dynamically adjust the meta tags based on the current content, resulting in accurate and engaging previews when shared on social platforms. Whether you need to enhance the search engine optimization (SEO) of your website or ensure a consistent and appealing representation on social media, the useMetaTags hook provides a straightforward and efficient solution.`,
    },
    url: "/tools/useMetaTags",
    parameters: [
      {
        name: "metaTags",
        type: "object",
        description:
          "An object containing the metadata properties to be updated.",
      },
    ],

    demo: MetaTags,
    example:
      'import { useMetaTags } from "use100hooks";const MetaTags = () => {  const metaTags = { title: "",description: "",image: "", twitter: { card: "", site: "", creator: "", title: "", url: "", image: "", description: "", }, og: { title: "", description: "",imageUrl: "",url: "", }, };  useMetaTags(metaTags); return ( <div><h1>Welcome to My Awesome Website</h1><p>This website has great content for you to explore!</p></div>);};export default MetaTags;',
  },
  {
    icon: FaCartFlatbed,
    classIcon: "fa",
    title: "useLocalStorageCartEffect",
    install: 'import { useLocalStorageCartEffect } from "use100hooks"',
    description: {
      short: "Manages a shopping cart in local storage.",
      long: `The useLocalStorageCartEffect hook is a versatile tool for managing a shopping cart stored in the browser's local storage within a React application. It provides functionalities to add items to the cart, remove items from the cart, and update the quantity of specific items. By utilizing this hook, you can seamlessly handle the cart state while persisting it in the local storage for data persistence across page refreshes.`,
    },
    url: "/tools/useLocalStorageCartEffect",
    return: [
      {
        name: "cartItems",
        type: "array",
        description:
          "An array of CartItem objects representing the items in the cart.",
      },
      {
        name: "addToCart",
        type: "function",
        description:
          "A function that adds an item to the cart. It takes an object as a parameter.",
      },
      {
        name: "removeFromCart",
        type: "function",
        description:
          "A function that removes an item from the cart based on its ID. It takes the ID of the item as a parameter.",
      },
      {
        name: "updateCartItem",
        type: "function",
        description:
          "A function that updates the quantity of a specific item in the cart. It takes the ID of the item and the new quantity as parameters.",
      },
    ],
    demo: LocalStorageCartEffect,
    example:
      'import { useLocalStorageCartEffect, useUIDgenerator } from "use100hooks";const LocalStorageCartEffect = () => {  const [cartItems, addToCart, removeFromCart, updateCartItem] = useLocalStorageCartEffect(); const uuid = useUIDgenerator("v1");  const uuid2 = useUIDgenerator("v1");  const handleAddToCartProduct1 = () => {const item = { id: uuid,name: "Product 1", price: 10, quantity: 1,}; addToCart(item);}; const handleAddToCartProduct2 = () => { const item = { id: uuid2, name: "Product 2", price: 10, quantity: 1,}; addToCart(item);  };  const handleRemoveFromCart = (id: string) => { removeFromCart(id); }; const handleUpdateQuantity = (id: string, quantity: number) => { updateCartItem(id, quantity);};  return ( <div className="text-left"><div className="mb-4"><h1>Product 1</h1><button onClick={handleAddToCartProduct1}>Add to Cart</button></div><div className="mb-4"><h1>Product 2</h1><button onClick={handleAddToCartProduct2}>Add to Cart</button></div><ul>{cartItems.map((item) => (<li key={item.id} className="flex items-center mb-4">{item.name} - ${item.price} - Quantity: {item.quantity}<button onClick={() => handleRemoveFromCart(item.id)}>Remove</button><input type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value)) }/></li>))}</ul></div>);};export default LocalStorageCartEffect;',
  },
  {
    icon: BsCursorText,
    classIcon: "bs",
    title: "useTypingEffect",
    install: 'import { useTypingEffect } from "use100hooks"',
    description: {
      short: "Create a typing effect for text rendering.",
      long: `The useTypingEffect hook allows you to create a typing effect for displaying text in your React components. It takes a text parameter, which represents the full text you want to display, and an optional delay parameter, which specifies the delay between each character being typed. The hook initializes the displayText state as an empty string. It then sets up an effect that uses a timer to gradually update the displayText by appending each character from the text parameter. The delay parameter determines the time interval between each character being added.`,
    },
    url: "/tools/useTypingEffect",
    return: [
      {
        name: "displayText",
        type: "string",
        description: "The current display text being generated.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description:
          "The full text that will be displayed with the typing effect.",
      },
      {
        name: "delay",
        type: "number",
        description:
          "(Optional) The delay (in milliseconds) between each character being typed.",
      },
    ],

    demo: TypingEffect,
    example:
      'import { useTypingEffect } from "use100hooks";const TypingEffect = () => {  const text = "Hello World";  const displayText = useTypingEffect(text, 150);  return <h1>{displayText}</h1>;};export default TypingEffect;',
  },
  {
    icon: GiCardRandom,
    classIcon: "gi",
    title: "useRandomNumber",
    install: 'import { useRandomNumber } from "use100hooks"',
    description: {
      short:
        "Provides a simple way to generate random numbers within a specified range.",
      long: `The useRandNumber hook is designed to facilitate the generation of random numbers within a given range in a simple and efficient manner. It allows you to obtain a random number and provides a function that can be invoked to regenerate a new random number whenever desired. By utilizing this hook, you can easily incorporate random number generation into your React components without the need for complex logic or external libraries. Whether you need random numbers for game mechanics, data simulation, or any other scenario that requires randomness, this hook simplifies the process and enhances the reusability of your code.`,
    },
    url: "/tools/useRandomNumber",
    return: [
      {
        name: "randomNumber",
        type: "number",
        description:
          "The current randomly generated number within the specified range.",
      },
      {
        name: "generateRandomNumber",
        type: "function",
        description:
          "A function that can be invoked to regenerate a new random number within the specified range.",
      },
    ],
    parameters: [
      {
        name: "min",
        type: "number",
        description:
          "The minimum value of the desired range for the random number.",
      },
      {
        name: "max",
        type: "number",
        description:
          "The maximum value of the desired range for the random number.",
      },
    ],
    demo: RandomNumber,
    example:
      'import { useRandomNumber } from "use100hooks";const RandomNumber = () => { const [number, generateRandomNumber] = useRandomNumber(1, 10);const handleClick = () => { generateRandomNumber();}; return ( <div> <h1>Random Number: {number}</h1><button onClick={handleClick}>Generate Random Number</button></div>);};export default RandomNumber;',
  },
  {
    icon: TbArrowsRandom,
    classIcon: "tb",
    title: "useRandomChoice",
    install: 'import { useRandomChoice } from "use100hooks"',
    description: {
      short:
        "This hook provides a way to randomly select an element from an array of choices, inspired by Python's random.choice function.",
      long: `By using this hook, you can easily incorporate randomness into your React components. It takes an array of choices as input and returns a randomly selected element from that array. The selection is made by generating a random index based on the length of the choices array and then retrieving the element at that index.`,
    },
    url: "/tools/useRandomChoice",
    return: [
      {
        name: "randomChoice",
        type: "object | string",
        description: "The randomly selected element from the choices array.",
      },
    ],
    parameters: [
      {
        name: "choices",
        type: "array",
        description: "An array of choices from which to select one.",
      },
    ],
    demo: RandomChoice,
    example:
      'import { useRandomChoice } from "use100hooks";const RandomChoice = () => {  const fruits = ["Apple", "Banana", "Orange", "Mango"];  const randomFruit = useRandomChoice(fruits); return (<div><h1>Random Fruit: {randomFruit}</h1></div>);};export default RandomChoice;',
  },
  {
    icon: SiScrollreveal,
    classIcon: "si",
    title: "useLockScroll",
    install: 'import { useLockScroll } from "use100hooks"',
    description: {
      short:
        "Toggle Scrolling between enable and disable scroll in certain div or body",
      long: `The useLockScroll hook allows you to lock or unlock scrolling behavior within a specific HTML element, such as the body or a custom target element. It provides flexibility by allowing you to specify whether to disable scrolling horizontally (overflowX) and/or vertically (overflowY). This hook is useful in scenarios where you want to prevent scrolling in certain areas of your application, such as modals or overlays.`,
    },
    url: "/tools/useLockScroll",
    return: [
      {
        name: "lockScroll",
        type: "function",
        description:
          "A function that locks the scroll behavior of the specified element.",
      },
      {
        name: "unlockScroll",
        type: "function",
        description:
          "A function that unlocks the scroll behavior of the specified element.",
      },
      {
        name: "enableBodyScroll",
        type: "function",
        description: "A function that enables scroll for the body element.",
      },
      {
        name: "disableBodyScroll",
        type: "function",
        description: "A function that disables scroll for the body element.",
      },
    ],
    parameters: [
      {
        name: "targetRef",
        type: "React.RefObject<HTMLElement>",
        description:
          "A reference to the target HTML element where scrolling behavior should be controlled.",
      },
      {
        name: "options",
        type: "object",
        description:
          "An object containing options for controlling the scroll behavior",
      },
    ],

    demo: ScrollLock,
    example:
      'import { useScrollLock } from "use100hooks";import { useRef } from "react";const ScrollLock = () => {  const targetRef = useRef<HTMLDivElement>(null);  const { lockScroll, unlockScroll, enableBodyScroll, disableBodyScroll } =    useScrollLock(targetRef, { overflowX: true, overflowY: true, });  return ( <div><button onClick={lockScroll}>Lock Scroll</button><button onClick={unlockScroll}>Unlock Scroll</button><button onClick={disableBodyScroll}> Lock Scroll (Body)</button><button onClick={enableBodyScroll}> Unlock Scroll (Body)</button><div ref={targetRef}style={{height: "200px",overflow: "auto",border: "1px dashed black",}}><div style={{ height: "400px" }}></div></div></div> );};export default ScrollLock;',
  },
  {
    icon: BiRefresh,
    classIcon: "bi",
    title: "useContinuousRetry",
    install: 'import { useContinuousRetry } from "use100hooks"',
    description: {
      short:
        "Retry failed asynchronous operations with increasing delay until a successful response is received.",
      long: `The useContinuousRetry hook allows for continuous retrying of an asynchronous operation until a specified condition is met. It takes an asyncFunction as input, which should be a function that returns a Promise<boolean>. The hook manages the retry logic by executing the asyncFunction and retrying it until the condition evaluates to true. It provides a retry function that can be called manually to trigger a retry attempt.`,
    },
    url: "/tools/useContinuousRetry",
    return: [
      {
        name: "hasResolved",
        type: "boolean",
        description: "Indicates whether the retry condition has been resolved.",
      },
    ],
    parameters: [
      {
        name: "asyncFunction",
        type: "function",
        description:
          "An asynchronous function that will be retried until success.",
      },
      {
        name: "delay",
        type: "number",
        description: "The delay (in milliseconds) between each retry attempt.",
      },
    ],
    demo: ContinousRetry,
    example:
      'import { useContinuousRetry } from "use100hooks";import { useState } from "react";const ContinousRetry = () => { const [value, setValue] = useState(0); const hasResolved = useContinuousRetry(() => { console.log("Retry . . . ");return value > 10; }, 1000); return ( <section><h1>useContinuousRetry</h1> <button onClick={() => setValue(value + 1)}>{value}</button><pre>{JSON.stringify({ hasResolved, value }, null, 2)}</pre></section> );};export default ContinousRetry;',
  },
  {
    icon: IoLogoJavascript,
    classIcon: "io",
    title: "useScript",
    install: 'import { useScript } from "use100hooks"',
    description: {
      short: "Load external JavaScript files dynamically in React.",
      long: `The useScript hook is used to dynamically load an external JavaScript file into a React component. It takes a src parameter, which specifies the source URL of the script to be loaded. The hook adds the script to the <body> element of the document, and ensures that it is removed when the component is unmounted. This allows for easy integration of external scripts in a React application.`,
    },
    url: "/tools/useScript",
    parameters: [
      {
        name: "src",
        type: "string",
        description: "The source URL of the script to be loaded.",
      },
    ],
    demo: Script,
    example:
      'import { useScript } from "use100hooks";const Script = () => { useScript( "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" );  return ( <div><h1>useScript Example</h1><p>This is an example of using the useScript hook.</p><p>Added https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js</p></div>);};export default Script;',
  },
  {
    icon: SiRender,
    classIcon: "si",
    title: "useRenderInfo",
    install: 'import { useRenderInfo } from "use100hooks"',
    description: {
      short: "Retrieve rendering information for a React component.",
      long: `The useRenderInfo hook provides information about the rendering of a React component. It tracks the number of times the component has rendered and the timestamp of the most recent render. The hook takes a name parameter as input, which represents the name of the component. By utilizing this hook, you can easily access render-related information for debugging, performance monitoring, or other purposes.`,
    },
    url: "/tools/useRenderInfo",
    return: [
      {
        name: "name",
        type: "string",
        description: "The name of the component.",
      },
      {
        name: "renderCount",
        type: "number",
        description: "The number of times the component has rendered.",
      },
      {
        name: "renderTimestamp",
        type: "number",
        description: "The timestamp of the most recent render in milliseconds.",
      },
    ],
    parameters: [
      {
        name: "name",
        type: "string",
        description: "The name of the component for identification.",
      },
    ],
    demo: RenderInfo,
    example:
      'import { useRenderInfo } from "use100hooks";const RenderInfo = () => {  const renderInfo = useRenderInfo("RenderInfo"); return ( <div><h1>{renderInfo.name}</h1><p>Render Count: {renderInfo.renderCount}</p><p>Render Timestamp: {renderInfo.renderTimestamp}</p></div>);};export default RenderInfo;',
  },
  {
    icon: AiOutlineHistory,
    classIcon: "ai",
    title: "useStateHistory",
    install: 'import { useStateHistory } from "use100hooks"',
    description: {
      short: "State management with built-in undo and redo functionality.",
      long: `The useHistoryState hook allows you to manage a state value with built-in undo and redo functionality. It maintains a history of past states, present state, and future states. The hook provides functions like undo, redo, and update to navigate through the state history and update the present state. This can be useful for implementing undo/redo functionality or managing any state that requires tracking of historical changes.`,
    },
    url: "/tools/useStateHistory",
    return: [
      {
        name: "past",
        type: "array",
        description: "An array of past state values.",
      },
      {
        name: "present",
        type: "string | object | array",
        description: "The current state value.",
      },
      {
        name: "future",
        type: "array",
        description: "An array of future state values.",
      },
      {
        name: "undo",
        type: "function",
        description: "Function to undo the last state change.",
      },
      {
        name: "redo",
        type: "function",
        description: "Function to redo a previously undone state change.",
      },
      {
        name: "update",
        type: "function",
        description: "Function to update the present state with a new value.",
      },
    ],
    parameters: [
      {
        name: "initialState	",
        type: "any",
        description: "The initial state value.",
      },
    ],
    demo: StateHistory,
    example:
      'import React from "react";import { useHistoryState } from "use100hooks" ;export default function App() {  const { present, past, future, undo, redo, update } = useHistoryState("initial");  const handleInputChange = (event) => { update(event.target.value); };  return ( <div><h1>useHistoryState Example</h1><input type="text" value={present} onChange={handleInputChange} /><button onClick={undo} disabled={past.length === 0}>Undo</button><button onClick={redo} disabled={future.length === 0}>Redo</button><p>Past States: {JSON.stringify(past)}</p><p>Present State: {present}</p><p>Future States: {JSON.stringify(future)}</p></div>);}',
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
