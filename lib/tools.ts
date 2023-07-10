import { ToolsData } from "@/common.types";
import { GrDocumentConfig, GrSort } from "react-icons/gr";
import {
  LiaClipboard,
  LiaSortAmountDownSolid,
  LiaCookieSolid,
} from "react-icons/lia";
import {
  TbBounceRight,
  TbArrowsRandom,
  TbProgress,
  TbResize,
  TbPageBreak,
  TbLineDotted,
  TbHexagons,
  TbClearFormatting,
} from "react-icons/tb";
import {
  MdStorage,
  MdOutlinePages,
  MdAnimation,
  MdOutlineKeyboardHide,
  MdInput,
  MdSyncLock,
  MdDataArray,
  MdDataset,
  MdOutlineSignalWifiStatusbarNull,
  MdAccountBalance,
  MdTextFields,
  MdNumbers,
  MdOutlineFlipCameraAndroid,
  MdOutlineBreakfastDining,
} from "react-icons/md";
import {
  FaMoon,
  FaRegWindowMaximize,
  FaRegClone,
  FaTextHeight,
  FaGripLines,
} from "react-icons/fa";
import { VscSymbolParameter, VscSymbolString } from "react-icons/vsc";
import {
  BsDatabaseFillLock,
  BsFillGeoAltFill,
  BsFillCloudDownloadFill,
  BsBatteryCharging,
  BsFillStickyFill,
  BsCursorText,
  BsMemory,
  BsPercent,
  BsFillFileBinaryFill,
} from "react-icons/bs";
import { LuKeyboard, LuPanelBottomInactive, LuSpace } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TfiLayoutSidebarLeft } from "react-icons/tfi";
import {
  CgScrollV,
  CgArrowsScrollV,
  CgPlayListSearch,
  CgPassword,
  CgBatteryEmpty,
} from "react-icons/cg";
import { FaTowerObservation, FaCartFlatbed } from "react-icons/fa6";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
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
  PiPlaceholderFill,
  PiClockCountdownBold,
  PiImagesSquareFill,
  PiArrowsCounterClockwiseThin,
} from "react-icons/pi";
import {
  GiNetworkBars,
  GiFloatingPlatforms,
  GiCardRandom,
  GiCombinationLock,
} from "react-icons/gi";
import {
  AiTwotoneAudio,
  AiOutlineExpandAlt,
  AiOutlineHistory,
  AiOutlineLineChart,
  AiOutlineDotChart,
  AiOutlineBarChart,
  AiOutlineFieldString,
  AiOutlineGroup,
} from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import { ImPagebreak, ImStopwatch, ImFileWord } from "react-icons/im";
import { BiScreenshot, BiRefresh, BiSort } from "react-icons/bi";
import {
  SiScrollreveal,
  SiRender,
  SiPersistent,
  SiCountingworkspro,
  SiDevrant,
  SiCoderwall,
  SiLetsencrypt,
} from "react-icons/si";
import { IoLogoJavascript, IoMdReverseCamera } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";
import { RiDatabaseLine } from "react-icons/ri";

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
import Cookies from "@/components/demo/Cookies";
import Progress from "@/components/demo/Progress";
import Placeholder from "@/components/demo/Placeholder";
import StatePersist from "@/components/demo/StatePersist";
import MemoizedValue from "@/components/demo/MemoizedValue";
import MemoizedSearchFilter from "@/components/demo/MemoizedSearchFilter";
import WindowResize from "@/components/demo/WindowResize";
import Countdown from "@/components/demo/Countdown";
import Stopwatch from "@/components/demo/Stopwatch";
import ImageProcessLazy from "@/components/demo/ImageProcessLazy";
import Pagination from "@/components/demo/Pagination";
import Moment from "@/components/demo/Moment";
import Dataset from "@/components/demo/Dataset";
import DataFrame from "@/components/demo/DataFrame";
import Unique from "@/components/demo/Unique";
import RemoveNull from "@/components/demo/RemoveNull";
import Sort from "@/components/demo/Sort";
import Mean from "@/components/demo/Mean";
import Median from "@/components/demo/Median";
import Mode from "@/components/demo/Mode";
import Percentage from "@/components/demo/Percentage";
import Combination from "@/components/demo/Combination";
import CombinationString from "@/components/demo/CombinationString";
import Permutation from "@/components/demo/Permutation";
import Variance from "@/components/demo/Variance";
import TextUpsideDown from "@/components/demo/TextUpsideDown";
import MorseCode from "@/components/demo/MorseCode";
import PasswordGenerator from "@/components/demo/PasswordGenerator";
import Truncate from "@/components/demo/Truncate";
import LoremIpsum from "@/components/demo/LoremIpsum";
import TextMinifier from "@/components/demo/TextMinifier";
import StringBuilder from "@/components/demo/StringBuilder";
import WordReplace from "@/components/demo/WordReplace";
import ReverseString from "@/components/demo/ReverseString";
import Base32 from "@/components/demo/Base32";
import Base58 from "@/components/demo/Base58";
import Base64 from "@/components/demo/Base64";
import StringHex from "@/components/demo/StringHex";
import StringBinary from "@/components/demo/StringBinary";
import CaseConverter from "@/components/demo/CaseConverter";
import RemoveAccent from "@/components/demo/RemoveAccent";
import RemoveDuplicateLines from "@/components/demo/RemoveDuplicateLines";
import RemoveEmptyLines from "@/components/demo/RemoveEmptyLines";
import RemoveExtraSpace from "@/components/demo/RemoveExtraSpace";
import StringLength from "@/components/demo/StringLength";
import RemoveContain from "@/components/demo/RemoveContain";
import SortTextLines from "@/components/demo/SortTextLines";
import TextFilpper from "@/components/demo/TextFilpper";
import StringFormat from "@/components/demo/StringFormat";
import RemoveLineBreak from "@/components/demo/RemoveLineBreak";

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
        name: "ref",
        type: " React.RefObject<HTMLElement | null>",
        description: "Ref object of the target HTML element",
      },
    ],
    return: [
      {
        name: "loading",
        type: "boolean",
        description:
          "Indicates whether the screenshot is currently being captured",
      },
      {
        name: "screenshot",
        type: "string | null",
        description: "A data URL string representing the captured screenshot.",
      },
      {
        name: "captureScreenshot",
        type: "function",
        description: "Function to capture the screenshot",
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
    title: "useValidateForm",
    install: 'import { useValidateForm } from "use100hooks"',
    description: {
      short: "Validate form input fields and handle form submission.",
      long: `The useFocusTrap hook is a React hook that enables the creation of a focus trap within a specific container element. It ensures that the focus remains within the trapped area, preventing it from moving outside to other elements on the page. This is useful for modal dialogs, dropdown menus, or any component that requires user interaction without losing focus context. With this hook, you can easily implement a focus trap by providing a container ref and handling keyboard events to manage the focus behavior.`,
    },
    url: "/tools/useValidateForm",
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
    title: "useScrollLock",
    install: 'import { useScrollLock } from "use100hooks"',
    description: {
      short:
        "Toggle Scrolling between enable and disable scroll in certain div or body",
      long: `The useLockScroll hook allows you to lock or unlock scrolling behavior within a specific HTML element, such as the body or a custom target element. It provides flexibility by allowing you to specify whether to disable scrolling horizontally (overflowX) and/or vertically (overflowY). This hook is useful in scenarios where you want to prevent scrolling in certain areas of your application, such as modals or overlays.`,
    },
    url: "/tools/useScrollLock",
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
  {
    icon: LiaCookieSolid,
    classIcon: "lia",
    title: "useCookies",
    install: 'import { useCookies } from "use100hooks"',
    description: {
      short: "Handle or Manage Cookies",
      long: `The useCookies tool is a custom React hook that provides a simple way to manage cookies within a functional component. It returns the current cookies, allows you to set new cookies, and provides a function to remove cookies.`,
    },
    url: "/tools/useCookies",
    return: [
      {
        name: "cookies",
        type: "Object",
        description: "An object containing all the current cookies.",
      },
      {
        name: "setCookie",
        type: "function",
        description: "A function to set a new cookie.",
      },
      {
        name: "removeCookie",
        type: "function",
        description: "A function to remove a cookie.",
      },
    ],
    parameters: [
      {
        name: "name",
        type: "string",
        description: "The name of the cookie to set or remove.",
      },
      {
        name: "value",
        type: "string",
        description: "The value of the cookie to set.",
      },
      {
        name: "options",
        type: "Object",
        description:
          "Additional options for setting the cookie (e.g., path, expires, etc.).",
      },
    ],
    demo: Cookies,
    example:
      'import { useCookies } from "use100hooks";const Cookies = () => {  const [cookies, setCookie, removeCookie] = useCookies(); const handleSetCookie = () => { setCookie("myCookie", "Hello, World!", { expires: 7 });  }; const handleRemoveCookie = () => { removeCookie("myCookie");  };  return (    <div><h1>Cookie Example</h1><p>Current Cookie: {cookies.myCookie}</p><button onClick={handleSetCookie}>Set Cookie</button><button onClick={handleRemoveCookie}> Remove Cookie</button></div> );};export default Cookies;',
  },
  {
    icon: TbProgress,
    classIcon: "tb",
    title: "useProgress",
    install: 'import { useProgress } from "use100hooks"',
    description: {
      short:
        "Enables seamless tracking and updating of progress within the range of 0 to 100 in React.",
      long: `The useProgress hook is a versatile tool in React that allows you to effortlessly track and update progress within a range of 0 to 100. It provides a progress value and a setProgress function, making it easy to integrate progress tracking into your components.`,
    },
    url: "/tools/useProgress",
    return: [
      {
        name: "progress",
        type: "number",
        description: "The current progress value (ranging from 0 to 100).",
      },
      {
        name: "setProgress",
        type: "function",
        description: "A function to update the progress value.",
      },
    ],
    demo: Progress,
    example:
      'import { useProgress } from "use100hooks";import { useEffect } from "react";const Progress = () => { const { progress, setProgress } = useProgress(100); useEffect(() => {/**Simulate progress completion after 3 seconds**/ const timeout = setTimeout(() => { setProgress(99);}, 3000);return () => { clearTimeout(timeout);}; }, [setProgress]);  return ( <div><h1>Progress Example</h1><p>Progress: {progress}%</p><div style={{display: "flex",alignItems: "center",justifyContent: "center",}}><div style={{width: "100px",height: "20px",border: "1px solid black",}}><div style={{width: `${progress}%`,height: "100%",backgroundColor: "blue"}}></div></div></div></div>);};export default Progress;',
  },
  {
    icon: PiPlaceholderFill,
    classIcon: "pi",
    title: "usePlaceholder",
    install: 'import { usePlaceholder } from "use100hooks"',
    description: {
      short:
        "Create custom placeholder images easily with the placeholderGenerator hook, providing options for width, height, colors, and text.",
      long: `The usePlaceholder hook is a versatile tool in React that enables you to generate placeholder images dynamically. By specifying the width, height, background color, text color, and text content, this hook utilizes the HTML5 canvas element to produce data URLs representing the generated images.`,
    },
    url: "/tools/usePlaceholder",
    return: [
      {
        name: "dataUrlImg",
        type: "img",
        description: "The data URL of the generated placeholder image.",
      },
    ],
    parameters: [
      {
        name: "src",
        type: "object",
        description:
          "An object containing the configuration for the placeholder image.",
      },
    ],
    demo: Placeholder,
    example:
      'import { usePlaceholder } from "use100hooks"; export const Placeholder = () => { const options = { width: 300, height: 300, bgColor: "#f2f2f2", textColor: "#333", text: "300 x 300", }; const { dataUrlImg } = usePlaceholder(options); return ( <div><h1>Placeholder Example</h1><div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}><img src={dataUrlImg} alt="Placeholder"/></div></div> ); };',
  },

  {
    icon: SiPersistent,
    classIcon: "si",
    title: "useStatePersist",
    install: 'import { useStatePersist } from "use100hooks"',
    description: {
      short:
        "Persist and retrieve state values effortlessly with the statePersistence hook, providing automatic storage in local storage for seamless data persistence.",
      long: `The useStatePersist hook is a powerful tool in React that allows you to persist state values in local storage. It provides a convenient way to store and retrieve data, ensuring that the state remains intact even after a page refresh or closing the application. With the useStatePersist hook, you can easily implement local storage persistence for state values in your React components. This tool automatically saves the state value to local storage whenever it changes, and retrieves the persisted value on component mount, ensuring seamless data persistence.`,
    },
    url: "/tools/useStatePersist",
    return: [
      {
        name: "state",
        type: "any",
        description: "The persisted state value.",
      },
      {
        name: "setState",
        type: "function",
        description: "The data URL of the generated placeholder image.",
      },
    ],
    parameters: [
      {
        name: "key",
        type: "string",
        description: "The key to store the state value in local storage.",
      },
      {
        name: "initialValue",
        type: "any",
        description: "The initial value for the state.",
      },
    ],
    demo: StatePersist,
    example:
      'import { useStatePersist } from "use100hooks"; const StatePersist = () => { const [count, setCount] = useStatePersist("count", 0); const increment = () => { setCount((prevCount) => prevCount + 1); }; const decrement = () => { setCount((prevCount) => prevCount - 1);}; return ( <div><h1>Counter Example</h1><p>Count: {count}</p><button onClick={increment}> Increment</button><button onClick={decrement}>Decrement</button></div>); }; export default StatePersist;',
  },
  {
    icon: BsMemory,
    classIcon: "bs",
    title: "useMemoizedValue",
    install: 'import { useMemoizedValue } from "use100hooks"',
    description: {
      short:
        "Memoize complex values effortlessly with the valueMemoizer hook, ensuring efficient rendering by recalculating the value only when the input value changes.",
      long: `The useMemoizedValue hook is a versatile tool in React that allows you to memoize complex values, such as objects, arrays, or arrays of objects. It helps optimize performance by ensuring that the value is only recalculated when the input value changes.`,
    },
    url: "/tools/useMemoizedValue",
    return: [
      {
        name: "memoizedValue",
        type: "any",
        description:
          "The memoized value derived from the provided input value.",
      },
      {
        name: "setValue",
        type: "function",
        description: "A function to set a new value for the memoized value.",
      },
      {
        name: "resetValue",
        type: "function",
        description:
          "A function to reset the memoized value to the initial value.",
      },
    ],
    parameters: [
      {
        name: "initialValue",
        type: "any",
        description: "The initial value for memoization.",
      },
    ],
    demo: MemoizedValue,
    example:
      'import { useMemoizedValue } from "use100hooks"; const MemoizedValue = () => { const { memoizedValue, setValue, resetValue } = useMemoizedValue("Initial Value"); const handleChange = (e) => { setValue(e.target.value); }; const handleReset = () => { resetValue();}; return ( <div><h1>Memoized Value Example</h1><p>Current Value: {memoizedValue}</p> <input type="text" value={memoizedValue} onChange={handleChange}/><button onClick={handleReset}>Reset</button></div> );}; export default MemoizedValue;',
  },
  {
    icon: CgPlayListSearch,
    classIcon: "cg",
    title: "useMemoizedSearchFilter",
    install: 'import { useMemoizedSearchFilter } from "use100hooks"',
    description: {
      short:
        "Effortlessly implement search filtering functionality in React using the searchFilter hook, optimizing the filtering process for improved performance.",
      long: "The useMemoizedSearchFilter hook is a versatile tool in React that allows you to efficiently perform search filtering on an array of objects. By specifying the data array and the key of the object property to be used for filtering, this hook optimizes the filtering process and provides the filtered data based on the search value.",
    },
    url: "/tools/useMemoizedSearchFilter",
    return: [
      {
        name: "filteredData",
        type: "array",
        description:
          "The filtered data array based on the search value and the specified filter key.",
      },
      {
        name: "searchValue",
        type: "string",
        description: "The current search value.",
      },
      {
        name: "setSearchValue",
        type: "function",
        description:
          "A function to reset the memoized value to the initial value.",
      },
    ],
    parameters: [
      {
        name: "data",
        type: "array",
        description: "The original array of objects to be filtered.",
      },
    ],
    demo: MemoizedSearchFilter,
    example:
      'import { useMemoizedSearchFilter } from "use100hooks"; const MemoizedSearchFilter = () => { const data = [ { id: 1, name: "John Doe", email: "john@example.com" }, { id: 2, name: "Jane Smith", email: "jane@example.com" }, { id: 3, name: "Adam Johnson", email: "adam@example.com" }, ]; const keyFunction = (item) => item.name; const { filteredData, searchValue, setSearchValue } = useMemoizedSearchFilter( data, "id", keyFunction ); const handleSearchChange = (e) => { setSearchValue(e.target.value); }; return ( <div><h1>Search Filter Example</h1><input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search by Name" /><ul>{filteredData.map((item) => (<li key={item.id}>{item.name} - {item.email}</li>))}</ul></div> ); }; export default MemoizedSearchFilter;',
  },
  {
    icon: TbResize,
    classIcon: "tb",
    title: "useWindowResize",
    install: 'import { useWindowResize } from "use100hooks"',
    description: {
      short:
        "Easily handle window resize events in React with the windowResize hook, keeping your components responsive and up to date with the current window size",
      long: "The useWindowResize hook is a versatile tool in React that allows you to track and respond to window resize events. It provides an easy way to obtain and update the dimensions of the browser window, facilitating dynamic rendering and responsive behavior in your application. With the useWindowResize hook, you can effortlessly handle window resize events in your React components. This tool uses the useState and useEffect hooks to set up an event listener and update the window size whenever the window is resized, ensuring your components stay in sync with the changing dimensions.",
    },
    url: "/tools/useMemoizedSearchFilter",
    return: [
      {
        name: "windowSize",
        type: "object",
        description: "An object containing the current window dimensions.",
      },
    ],
    demo: WindowResize,
    example:
      'import { useWindowResize } from "use100hooks"; const WindowResize = () => { const { windowSize } = useWindowResize(); return ( <div><h1>Window Resize Example</h1><p>Window Width: {windowSize.width}px</p><p>Window Height: {windowSize.height}px</p></div>);}; export default WindowResize;',
  },
  {
    icon: PiClockCountdownBold,
    classIcon: "pi",
    title: "useCountdown",
    install: 'import { useCountdown } from "use100hooks"',
    description: {
      short:
        "Easily handle window resize events in React with the windowResize hook, keeping your components responsive and up to date with the current window size",
      long: "The useWindowResize hook is a versatile tool in React that allows you to track and respond to window resize events. It provides an easy way to obtain and update the dimensions of the browser window, facilitating dynamic rendering and responsive behavior in your application. With the useWindowResize hook, you can effortlessly handle window resize events in your React components. This tool uses the useState and useEffect hooks to set up an event listener and update the window size whenever the window is resized, ensuring your components stay in sync with the changing dimensions.",
    },
    url: "/tools/useCountdown",
    return: [
      {
        name: "years",
        type: "number",
        description: "The remaining years in the countdown.",
      },
      {
        name: "months",
        type: "number",
        description: "The remaining months in the countdown.",
      },
      {
        name: "days",
        type: "number",
        description: "The remaining days in the countdown.",
      },
      {
        name: "hours",
        type: "number",
        description: "The remaining hours in the countdown.",
      },
      {
        name: "minutes",
        type: "number",
        description: "The remaining minutes in the countdown.",
      },
      {
        name: "seconds",
        type: "number",
        description: "The remaining seconds in the countdown.",
      },
    ],
    parameters: [
      {
        name: "duration",
        type: "object",
        description: "An object specifying the duration for the countdown.",
      },
    ],
    demo: Countdown,
    example:
      'import { useCountdown } from "use100hooks"; const Countdown = () => { const countdownDuration = { years: 0, months: 0, days: 1, hours: 12, minutes: 0, seconds: 0, }; const countdown = useCountdown(countdownDuration); return ( <div><h1>Countdown Example</h1><p>Years: {countdown.years}</p> <p>Months: {countdown.months}</p><p>Days: {countdown.days}</p><p>Hours: {countdown.hours}</p><p>Minutes: {countdown.minutes}</p><p>Seconds: {countdown.seconds}</p></div> ); }; export default Countdown;',
  },
  {
    icon: ImStopwatch,
    classIcon: "im",
    title: "useStopwatch",
    install: 'import { useStopwatch } from "use100hooks"',
    description: {
      short:
        "Implement stopwatch functionalities effortlessly with the stopwatchTimer hook in React, enabling accurate time tracking and manipulation with start, stop, and reset functions.",
      long: "The useStopwatch hook is a versatile tool in React that allows you to create a stopwatch timer. It provides functions to start, stop, and reset the timer, along with the current running status and the elapsed time in seconds. This hook is ideal for various applications that require precise time measurement, such as timing events or performance monitoring.With the useStopwatch hook, you can easily implement stopwatch functionality in your React application. This hook leverages the useState and useEffect hooks to manage the running state and track the elapsed time. It offers a straightforward interface to control the stopwatch and access the elapsed time, enabling accurate time measurement and synchronization with other components.",
    },
    url: "/tools/useStopwatch",
    return: [
      {
        name: "years",
        type: "number",
        description: "The remaining years in the countdown.",
      },
      {
        name: "months",
        type: "number",
        description: "The remaining months in the countdown.",
      },
      {
        name: "start",
        type: "function",
        description: "Function where the stopwatch is start",
      },
      {
        name: "stop",
        type: "function",
        description: "Function where the stopwatch is stop",
      },
      {
        name: "reset",
        type: "function",
        description: "Function where the stopwatch is reset",
      },
    ],
    demo: Stopwatch,
    example:
      'import { useStopwatch } from "use100hooks"; const Stopwatch = () => { const { isRunning, elapsedTime, start, stop, reset } = useStopwatch(); return ( <div><h1>Stopwatch Example</h1> <p>Elapsed Time: {elapsedTime} seconds</p><button onClick={start} disabled={isRunning}>Start</button><button onClick={stop} disabled={!isRunning}>Stop</button><button onClick={reset} disabled={isRunning}>Reset</button></div> ); }; export default Stopwatch;',
  },
  {
    icon: PiImagesSquareFill,
    classIcon: "pi",
    title: "useImageProgressLazy",
    install: 'import { useImageProgressLazy } from "use100hooks"',
    description: {
      short:
        "Implement image loading progress tracking and lazy loading effortlessly with the imageProgressLazy hook in React, enhancing performance and user experience.",
      long: "The useImageProgressLazy hook is a powerful tool in React that allows you to track the loading progress of an image and lazily load it. It provides information about the current loading status and the progress in percentage, enabling you to implement smooth image loading and display in your application. This hook is particularly useful when working with large or high-resolution images that require progressive loading.",
    },
    url: "/tools/useImageProgressLazy",
    return: [
      {
        name: "isLoading",
        type: "boolean",
        description: "Indicates whether the image is still loading.",
      },
      {
        name: "progress",
        type: "number",
        description: "The loading progress of the image in percentage.",
      },
    ],
    parameters: [
      {
        name: "src",
        type: "string",
        description: "The source URL of the image.",
      },
    ],
    demo: ImageProcessLazy,
    example: `import { useImageProgressLazy } from "use100hooks"; const ImageProcessLazy = () => { const { isLoading, progress } = useImageProgressLazy("/mainlogo-dark.png"); return ( <div>{isLoading ? ( <div>Loading... {progress}%</div> ) : ( <image src="/mainlogo-dark.png" alt="image" width='75' height='75' /> )}</div> ); }; export default ImageProcessLazy;`,
  },
  {
    icon: TbPageBreak,
    classIcon: "tb",
    title: "usePagination",
    install: 'import { usePagination } from "use100hooks"',
    description: {
      short:
        "Effortlessly incorporate pagination functionality with the paginationHook in React, providing intuitive navigation, current page information, and dynamically updated paginated data.",
      long: "The usePagination hook is a powerful tool in React that enables seamless implementation of pagination logic for managing large datasets. It provides functions to navigate through pages, tracks the current page and total page count, and includes the paginated data for the current page. This versatile hook simplifies the process of handling paginated data, empowering you to deliver efficient and user-friendly pagination features in your application.",
    },
    url: "/tools/usePagination",
    return: [
      {
        name: "currentPage",
        type: "number",
        description: "The current page number.",
      },
      {
        name: "totalPages",
        type: "number",
        description:
          "The total number of pages based on the total items and items per page.",
      },
      {
        name: "data",
        type: "array",
        description: "The paginated data for the current page.",
      },
      {
        name: "goToPage",
        type: "function",
        description: "A function to navigate to a specific page.",
      },
      {
        name: "nextPage",
        type: "function",
        description: "A function to navigate to the next page.",
      },
      {
        name: "prevPage",
        type: "function",
        description: "A function to navigate to the previous page.",
      },
    ],
    parameters: [
      {
        name: "paginatedData",
        type: "object",
        description: "The source URL of the image.",
      },
      {
        name: "itemsPerPage",
        type: "number",
        description: "The number of items per page.",
      },
    ],
    demo: Pagination,
    example:
      'import { usePagination } from "use100hooks"; const generateData = (count: number) => { const data = []; for (let i = 1; i <= count; i++) { data.push({ id: i, name: `Item ${i}`, }); } return data; }; const data = generateData(50); const Pagination = () => { const itemsPerPage = 10; const { currentPage, totalPages, data: paginatedData, goToPage, nextPage, prevPage, } = usePagination({ data, totalItems: data.length }, itemsPerPage); return ( <div>{paginatedData.map((item) => ( <div key={item.id}>{/* Render your item data */}</div> ))}<div><button onClick={() => prevPage()} disabled={currentPage === 1}>Previous</button><button onClick={() => nextPage()} disabled={currentPage === totalPages} >Next</button></div><div><p>Page {currentPage} of {totalPages}</p><select value={currentPage} onChange={(e) => goToPage(parseInt(e.target.value))}>{Array.from({ length: totalPages }, (_, index) => ( <option key={index + 1} value={index + 1}>{index + 1}</option> ))}</select></div></div>); }; export default Pagination;',
  },
  {
    icon: IoTimerSharp,
    classIcon: "io",
    title: "useMoment",
    install: 'import { useMoment } from "use100hooks"',
    description: {
      short:
        "Calculates the elapsed time between a MySQL datetime and the current moment, providing a human-readable string representation of the time elapsed.",
      long: "The useMoment hook is a custom React hook that calculates the elapsed time between a given MySQL datetime string and the current moment. It returns a human-readable string representing the elapsed time in years, months, days, hours, minutes, and seconds. This hook enables you to effortlessly display the time elapsed since a specific point in your React application, providing an intuitive way to visualize temporal information.",
    },
    url: "/tools/useMoment",
    return: [
      {
        name: "elapsedTime",
        type: "string",
        description: "The human-readable string representing the elapsed time",
      },
    ],
    parameters: [
      {
        name: "datetime",
        type: "string",
        description: "The MySQL datetime string to calculate from.",
      },
    ],
    demo: Moment,
    example: `import { useMoment } from "use100hooks"; const Moment = () => { const datetime = '2023-01-01 12:00:00'; const { elapsedTime } = useMoment(datetime); return ( <div> <h1>Time Elapsed</h1> <p>{elapsedTime}</p></div> ); }; export default Moment;`,
  },
  {
    icon: MdDataset,
    classIcon: "md",
    title: "useDataset",
    install: 'import { useDataset } from "use100hooks"',
    description: {
      short:
        "Simplifies the handling and display of large data sets, managing loading states and errors for asynchronous data fetching.",
      long: "The useDataSet hook is a custom React hook that simplifies the handling and display of large data sets in a performant manner. By providing a getData function that returns a promise resolving to the data array, this hook manages the data fetching process, including loading state and error handling. It enables effortless integration of large data sets into your React components, making it easier to handle asynchronous data fetching and rendering.",
    },
    url: "/tools/useDataset",
    return: [
      {
        name: "data",
        type: "array",
        description: "The fetched data array.",
      },
      {
        name: "isLoading",
        type: "boolean",
        description: "Indicates whether the data is currently being fetched.",
      },
      {
        name: "error",
        type: "string",
        description:
          "The error message, if any, encountered during data fetching.",
      },
    ],
    parameters: [
      {
        name: "getData",
        type: "function",
        description:
          "A function that returns a promise resolving to the data array.",
      },
    ],
    demo: Dataset,
    example:
      'import { useDataset } from "use100hooks"; const fetchData = async () => { return new Promise((resolve) => { setTimeout(() => { const data = Array.from({ length: 5000 }, (_, index) => `Item ${index}`); resolve(data); }, 2000); }); }; const Dataset = () => { const { data, isLoading, error } = useDataset(fetchData); if (isLoading) { return <div>Loading...</div>; } if (error) { return <div>Error: {error}</div>; } return ( <div><h1>Data Set</h1><ul>{data.map((item) => (<li key={item}>{item}</li>))}</ul></div> ); }; export default Dataset;',
  },

  {
    icon: RiDatabaseLine,
    classIcon: "ri",
    title: "useDataFrame ",
    install: 'import { useDataFrame } from "use100hooks"',
    description: {
      short: "Enhance your React components' ability to handle tabular data",
      long: "The useDataFrame hook is a custom React hook that emulates basic DataFrame functionalities. It takes an initial data array as a parameter and returns the current state of the DataFrame, along with utility functions to perform operations such as extracting columns, filtering data based on column values, grouping data by columns, and adding new rows to the DataFrame. This hook facilitates the management and manipulation of tabular data within a React component.",
    },
    url: "/tools/useDataFrame",
    return: [
      {
        name: "dataFrame",
        type: "array",
        description: "The current state of the DataFrame.",
      },
      {
        name: "getColumn",
        type: "function",
        description: "Returns an array of values from a specified column.",
      },
      {
        name: "filterByColumnValue",
        type: "function",
        description: "Filters the DataFrame based on a column value.",
      },
      {
        name: "groupByColumn",
        type: "function",
        description: "Groups the DataFrame by a specific column.",
      },
      {
        name: "addRow",
        type: "function",
        description: "Adds a new row to the DataFrame.",
      },
    ],
    parameters: [
      {
        name: "data",
        type: "array",
        description: "The initial data for the DataFrame.",
      },
    ],
    demo: DataFrame,
    example:
      'import { useDataFrame } from "use100hooks"; import { useState } from "react"; const DataFrame = () => { const [data, setData] = useState([ { name: "John", age: 30, city: "New York" }, { name: "Jane", age: 25, city: "San Francisco" }, { name: "Bob", age: 35, city: "Chicago" }, ]); const { dataFrame, getColumn, filterByColumnValue, groupByColumn, addRow } = useDataFrame(data); const handleAddRow = () => { const newRow = { name: "Alice", age: 28, city: "London" }; addRow(newRow); }; return ( <div><h1>Data Frame</h1><button onClick={handleAddRow}>Add Row</button><ul>{dataFrame.map((row, index) => (<li key={index}>{JSON.stringify(row)}</li> ))}</ul><h2>Column: Name</h2><ul>{getColumn("name").map((value, index) => ( <li key={index}>{value}</li> ))}</ul><h2>Filtered Data (City: New York)</h2><ul>{filterByColumnValue("city", "New York").map( (row, index) => ( <li key={index}>{JSON.stringify(row)}</li> ))}</ul><h2>Grouped Data (By City)</h2>{Array.from(groupByColumn("city")).map( ([key, group], index: number) => ( <div key={index}><h3>{key}</h3><ul>{group.map((row, index) => ( <li key={index}>{JSON.stringify(row)}</li> ))}</ul></div> ) )}</div> ); }; export default DataFrame;',
  },

  {
    icon: FaRegClone,
    classIcon: "ri",
    title: "useUnique",
    install: 'import { useUnique } from "use100hooks"',
    description: {
      short:
        "Simplify the process of obtaining unique values from an array, providing a straightforward way to filter out duplicates",
      long: "The useUnique hook is a custom React hook that allows you to obtain unique values from an input array. It utilizes the useState and useEffect hooks to update the list of unique values whenever the input array changes. This hook is useful for scenarios where you need to filter out duplicate values and work with only the unique elements within an array.",
    },
    url: "/tools/useUnique",
    return: [
      {
        name: "uniqueValues",
        type: "array",
        description: "An array of unique values from the input array.",
      },
    ],
    parameters: [
      {
        name: "data",
        type: "array",
        description:
          "The input array of values. Can be an array of primitives or objects.",
      },
      {
        name: "key",
        type: "string",
        description:
          "(Optional) The key to use for finding unique values in an array of objects.",
      },
    ],
    demo: Unique,
    example:
      'import { useUnique } from "use100hooks"; const Unique = () => { const numbers = [1, 2, 3, 2, 4, 4, 5]; const uniqueNumbers = useUnique(numbers); const people: Person[] = [ { id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "John" }, { id: 4, name: "Bob" }, { id: 5, name: "Jane" }, ]; const uniquePeople = useUnique(people); return ( <div><h2>Unique Numbers</h2><ul>{uniqueNumbers.map((number, index) => ( <li key={index}>{number}</li> ))}</ul><h2>Unique People</h2><ul>{uniquePeople.map((person: Person) => (<li key={person.id}>{person.name}</li> ))}</ul></div> ); }; export default Unique;',
  },
  {
    icon: MdOutlineSignalWifiStatusbarNull,
    classIcon: "md",
    title: "useRemoveNull",
    install: 'import { useRemoveNull } from "use100hooks"',
    description: {
      short:
        "Effortlessly remove null values from arrays or arrays of objects ",
      long: "The useRemoveNull hook is a versatile utility for handling arrays or arrays of objects in React applications. It leverages React hooks such as useState, useEffect, useRef, useCallback, and useMemo to ensure optimal performance and data integrity. The hook accepts an initial array or array of objects and removes any null values from it. Whether dealing with simple arrays or complex objects, the hook efficiently filters out null values.",
    },
    url: "/tools/useRemoveNull",
    return: [
      {
        name: "processedData",
        type: "array",
        description:
          "The processed array or array of objects without null values.",
      },
    ],
    parameters: [
      {
        name: "initialData",
        type: "array",
        description: "The initial array or array of objects to process.",
      },
      {
        name: "key",
        type: "string",
        description:
          "(Optional) The key to use for finding unique values in an array of objects.",
      },
    ],
    demo: RemoveNull,
    example:
      'import { useRemoveNull } from "use100hooks"; const RemoveNull = () => { const numbers = [1, null, 3, null, 5]; const uniqueNumbers = useRemoveNull(numbers); const people: Person[] = [ { id: 1, name: "John" }, { id: 2, name: null }, { id: 3, name: "Jane" }, { id: 4, name: null }, { id: 5, name: "Bob" }, ]; const nonNullPeople = useRemoveNull(people); return ( <div><h2>Unique Numbers (without null values)</h2><ul>{uniqueNumbers.map((number: number, index: number) => ( <li key={index}>{number}</li> ))}</ul><h2>Non-Null People</h2><ul>{nonNullPeople.map((person: Person) => ( <li key={person.id}>{person.name}</li> ))}</ul></div>);}; export default RemoveNull;',
  },
  {
    icon: GrSort,
    classIcon: "gr",
    title: "useSort",
    install: 'import { useSort } from "use100hooks"',
    description: {
      short:
        "Effortlessly remove null values from arrays or arrays of objects ",
      long: "The useRemoveNull hook is a versatile utility for handling arrays or arrays of objects in React applications. It leverages React hooks such as useState, useEffect, useRef, useCallback, and useMemo to ensure optimal performance and data integrity. The hook accepts an initial array or array of objects and removes any null values from it. Whether dealing with simple arrays or complex objects, the hook efficiently filters out null values.",
    },
    url: "/tools/useSort",
    return: [
      {
        name: "sortedData",
        type: "array",
        description: "The sorted array or array of objects.",
      },
    ],
    parameters: [
      {
        name: "initialData",
        type: "array",
        description: "The initial array or array of objects to process.",
      },
      {
        name: "key",
        type: "string",
        description:
          "(Optional) The key to use for finding unique values in an array of objects.",
      },
      {
        name: "sortOrder",
        type: "string",
        description: "Choose between (asc) ascending or (desc) descending",
      },
    ],
    demo: Sort,
    example:
      'import { useSort } from "use100hooks"; const Sort = () => { const numbers = [3, 1, 5, 2, 4]; const sortedNumbers = useSort(numbers, null, "desc"); const people: Person[] = [ { id: 1, name: "John", age: 25 }, { id: 2, name: "Jane", age: 30 }, { id: 3, name: "Bob", age: 20 }, ]; const sortedPeople = useSort(people, "age", "asc"); return ( <div> <h2>Sorted Numbers (descending order)</h2> <ul> {sortedNumbers.map((number: number, index: number) => ( <li key={index}>{number}</li> ))} </ul> <h2>Sorted People (ascending order by age)</h2> <ul> {sortedPeople.map((person: Person) => ( <li key={person.id}> {person.name} - {person.age} years old </li> ))} </ul> </div> ); }; export default Sort;',
  },
  {
    icon: AiOutlineLineChart,
    classIcon: "ai",
    title: "useMean",
    install: 'import { useMean } from "use100hooks"',
    description: {
      short: "Easily calculate the mean value of numerical data ",
      long: "The useMean hook is a useful utility for calculating the mean (average) of an array of numbers in a React application. To to ensure accurate calculations and efficient updates. The hook accepts an array of numbers and calculates the mean value. It handles both simple arrays and arrays of objects, allowing for versatile usage. ",
    },
    url: "/tools/useMean",
    return: [
      {
        name: "mean",
        type: "number",
        description: "The calculated mean value of the input numbers.",
      },
    ],
    parameters: [
      {
        name: "numbers",
        type: "array",
        description: "The array of numbers to calculate the mean.",
      },
      {
        name: "recalculateMean",
        type: "function",
        description: "Function where recalculate the value of mean",
      },
    ],
    demo: Mean,
    example:
      'import { useMean } from "use100hooks"; const Mean = () => { const numbers = [5, 10, 15, 20, 25]; const mean = useMean(numbers); return ( <div><h2>Mean Calculation</h2><p>Numbers:{numbers.join(", ")}</p><p>Mean: {mean}</p></div> );}; export default Mean;',
  },
  {
    icon: AiOutlineDotChart,
    classIcon: "ai",
    title: "useMedian",
    install: 'import { useMedian } from "use100hooks"',
    description: {
      short: "Retrieve the middle value of an array of numbers as the median",
      long: "The useMedian hook is a useful utility for calculating the median value of an array of numbers in a React application. To ensure accurate calculations and efficient updates. The hook accepts an array of numbers and calculates the median value. It handles both simple arrays and arrays of objects, allowing for versatile usage.",
    },
    url: "/tools/useMedian",
    return: [
      {
        name: "median",
        type: "number",
        description: "The calculated median value of the input numbers.",
      },
      {
        name: "recalculateMedian",
        type: "function",
        description: "Function where recalculate the value of median",
      },
    ],
    parameters: [
      {
        name: "numbers",
        type: "array",
        description: "The array of numbers to calculate the median.",
      },
    ],
    demo: Median,
    example:
      'import { useMedian } from "use100hooks"; const Median = () => { const numbers = [5, 10, 15, 20, 25];  const [median, recalculateMedian] = useMedian(numbers); return ( <div><h2>Median Calculation</h2><p>Numbers: {numbers.join(", ")}</p><p>Median: {median}</p><button onClick={recalculateMedian}>Recalculate</button></div> ); }; export default Median;',
  },
  {
    icon: AiOutlineBarChart,
    classIcon: "ai",
    title: "useMode",
    install: 'import { useMode } from "use100hooks"',
    description: {
      short:
        "Obtain the number(s) that appear(s) most frequently in an array without hassle",
      long: "The useMedian hook is a useful utility for calculating the median value of an array of numbers in a React application. To ensure accurate calculations and efficient updates. The hook accepts an array of numbers and calculates the median value. It handles both simple arrays and arrays of objects, allowing for versatile usage.",
    },
    url: "/tools/useMode",
    return: [
      {
        name: "mode",
        type: "array",
        description: "The calculated mode(s) of the input numbers.",
      },
    ],
    parameters: [
      {
        name: "numbers",
        type: "array",
        description: "The array of numbers to calculate the mode.",
      },
    ],
    demo: Mode,
    example:
      'import { useMode } from "use100hooks"; const Mode = () => { const numbers = [1, 2, 2, 3, 4, 4, 4, 5]; const mode = useMode(numbers); return ( <div><h2>Mode Calculation</h2><p>Numbers: {numbers.join(", ")}</p><p>Mode: {mode ? mode.join(", ") : "No mode"}</p></div> ); }; export default Mode;',
  },
  {
    icon: BsPercent,
    classIcon: "bs",
    title: "usePercentage",
    install: 'import { usePercentage } from "use100hooks"',
    description: {
      short:
        "Effortlessly calculate percentages based on a numerator and denominato",
      long: "The usePercentage hook is a versatile utility for calculating percentages in a React application  The hook accepts a numerator and a denominator and calculates the percentage based on these values. It automatically recalculates the percentage whenever the numerator or denominator changes. The hook handles scenarios where the denominator is zero, ensuring that a undefined value is returned in such cases to avoid potential error",
    },
    url: "/tools/usePercentage",
    return: [
      {
        name: "percentage",
        type: "number",
        description: "The calculated percentage value.",
      },
    ],
    parameters: [
      {
        name: "numerator",
        type: "array",
        description: "The numerator value for the calculation.",
      },
      {
        name: "denominator",
        type: "number",
        description: "The denominator value for the calculation.",
      },
    ],
    demo: Percentage,
    example:
      'import { usePercentage } from "use100hooks"; const Percentage = () => { const numerator = 75; const denominator = 100; const percentage = usePercentage(numerator, denominator); return ( <div> <h2>Percentage Calculation</h2> <p>Numerator: {numerator}</p> <p>Denominator: {denominator}</p> <p>Percentage: {percentage ? `${percentage}%` : "N/A"}</p> </div> ); }; export default Percentage;',
  },
  {
    icon: GiCombinationLock,
    classIcon: "gi",
    title: "useCombination",
    install: 'import { useCombination } from "use100hooks"',
    description: {
      short: "A hook that computes combinations of numbers",
      long: "The useCombination hook is a versatile utility for generating combinations in a React application The hook accepts an array of items and a size representing the length of the combinations to be generated. It utilizes backtracking to generate all possible combinations of the given size from the provided items. The resulting combinations are then stored in the combinations state variable. By utilizing the useEffect hook and dependency tracking, the hook automatically generates the combinations whenever the input items or size change. The useCombination hook is a valuable tool for production-level applications that require generating combinations for various purposes.",
    },
    url: "/tools/useCombination",
    return: [
      {
        name: "combinations",
        type: "array",
        description: "The generated combinations of the items.",
      },
    ],
    parameters: [
      {
        name: "items",
        type: "array",
        description: "The array of items to combine.",
      },
      {
        name: "items",
        type: "array",
        description: "The array of items to combine.",
      },
    ],
    demo: Combination,
    example:
      'import { useCombination } from "use100hooks"; const Combination = () => { const items = [1, 2, 3, 4]; const size = 2; const combinations = useCombination(items, size); return ( <div><h2>Combinations</h2> {combinations ? ( <ul>{combinations.map((combination, index) => ( <li key={index}>{JSON.stringify(combination)}</li> ))}</ul> ) : ( <p>Generating combinations...</p> )}</div> ); }; export default Combination;',
  },
  {
    icon: PiArrowsCounterClockwiseThin,
    classIcon: "gi",
    title: "useCombinationString",
    install: 'import { useCombinationString } from "use100hooks"',
    description: {
      short:
        "Easily generate all possible combinations of characters in a string ",
      long: "The useCombinationString hook is a versatile utility for generating all possible string combinations in a React application. The hook accepts a string as input and generates all possible combinations of the characters in the string. It uses a backtracking algorithm to compute the combinations recursively. The resulting combinations are then stored in the combinations state variable. By utilizing the useEffect hook and dependency tracking, the hook automatically generates the combinations whenever the input string changes. The useCombinationString hook is a valuable tool for production-level applications that require generating all possible string combinations for various purposes.",
    },
    url: "/tools/useCombinationString",
    return: [
      {
        name: "combinations",
        type: "array",
        description: "The generated string combinations.",
      },
    ],
    parameters: [
      {
        name: "str",
        type: "string",
        description: "The input string to combine.",
      },
    ],
    demo: CombinationString,
    example:
      'import { useCombinationString } from "use100hooks"; const CombinationString = () => { const inputString = "abc"; const combinations = useCombinationString(inputString); return ( <div><h2>String Combinations</h2>{combinations ? ( <ul>{combinations.map((combination, index) => ( <li key={index}>{combination}</li> ))} </ul> ) : ( <p>Generating combinations...</p> )}</div> ); }; export default CombinationString;',
  },
  {
    icon: SiCountingworkspro,
    classIcon: "si",
    title: "usePermutation",
    install: 'import { usePermutation } from "use100hooks"',
    description: {
      short: "Compute permutations for an array of items without complexity ",
      long: "The useCombinationString hook is a versatile utility for generating all possible string combinations in a React application. The hook accepts a string as input and generates all possible combinations of the characters in the string. It uses a backtracking algorithm to compute the combinations recursively. The resulting combinations are then stored in the combinations state variable. By utilizing the useEffect hook and dependency tracking, the hook automatically generates the combinations whenever the input string changes. The useCombinationString hook is a valuable tool for production-level applications that require generating all possible string combinations for various purposes.",
    },
    url: "/tools/usePermutation",
    return: [
      {
        name: "permutations",
        type: "array",
        description: "The generated permutations of the items.",
      },
    ],
    parameters: [
      {
        name: "items",
        type: "array",
        description: "The array of items to permute.",
      },
    ],
    demo: Permutation,
    example:
      'import { usePermutation } from "use100hooks"; const Permutation = () => { const items = [1, 2, 3]; const permutations = usePermutation(items); return ( <div><h2>Permutations</h2> {permutations ? ( <ul>{permutations.map((permutation, index) => ( <li key={index}>{JSON.stringify(permutation)}</li> ))}</ul> ) : ( <p>Generating permutations...</p> )}</div> ); }; export default Permutation;',
  },
  {
    icon: MdAccountBalance,
    classIcon: "md",
    title: "useVariance",
    install: 'import { useVariance } from "use100hooks"',
    description: {
      short:
        "Calculate the variance value for a given array of numbers without complexity",
      long: "The useVariance hook is a utility that allows you to calculate the variance of an array of numbers in a React application.  The hook accepts an array of numbers and computes the variance value. It utilizes the formula for variance, which involves calculating the mean, squared differences, and averaging the squared differences. The resulting variance value is then stored in the variance state variable. By utilizing the useEffect hook and dependency tracking, the hook automatically recalculates the variance whenever the input numbers change. The useVariance hook is a useful tool for production-level applications that require variance calculations for statistical analysis.",
    },
    url: "/tools/useVariance",
    return: [
      {
        name: "variance",
        type: "number",
        description: "The calculated variance value.",
      },
    ],
    parameters: [
      {
        name: "numbers",
        type: "array",
        description: "The array of numbers.",
      },
    ],
    demo: Variance,
    example:
      'import { useVariance } from "use100hooks"; const Variance = () => { const numbers = [2, 4, 6, 8, 10]; const variance = useVariance(numbers); return ( <div><h2>Variance Calculation</h2>{variance !== undefined ? ( <p>The variance is: {variance}</p> ) : ( <p>Calculating variance...</p> )}</div> );}; export default Variance;',
  },
  {
    icon: SiDevrant,
    classIcon: "si",
    title: "useTextUpsideDown",
    install: 'import { useTextUpsideDown } from "use100hooks"',
    description: {
      short: "Transform text into its upside-down representation",
      long: "The useTextUpsideDown hook is a utility that allows you to flip text upside down in a React application The hook accepts a text string and generates an upside-down version of the text. It performs character replacement based on a predefined mapping of characters to their upside-down equivalents",
    },
    url: "/tools/useTextUpsideDown",
    return: [
      {
        name: "upsideDownText",
        type: "string",
        description: "The generated upside-down text.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text",
      },
    ],
    demo: TextUpsideDown,
    example:
      'import { useTextUpsideDown } from "use100hooks";const TextUpsideDown = () => { const inputText = "Hello, World!";  const upsideDownText = useTextUpsideDown(inputText);  return ( <div><h2>Text Upside Down Conversion</h2><p>Input Text: {inputText}</p><p>Upside Down Text: {upsideDownText}</p></div>  );};export default TextUpsideDown;',
  },

  {
    icon: SiCoderwall,
    classIcon: "si",
    title: "useMorseCode",
    install: 'import { useMorseCode } from "use100hooks"',
    description: {
      short:
        "Convert plain text to Morse code and vice versa without complexity ",
      long: "The useMorseCode hook is a tool that helps convert plain text into Morse code and vice versa. It takes a piece of text as input and returns an object with two properties: encryptedText and decryptedText.When you pass your text to the useMorseCode hook, it will convert each character into a series of dots and dashes based on the Morse code standard. For example, the letter A is represented as a dot followed by a dash, while B is represented as a dash followed by three dots.",
    },
    url: "/tools/useMorseCode",
    return: [
      {
        name: "encryptedText",
        type: "string",
        description: "The Morse code encryption of the input text.",
      },
      {
        name: "decryptedText",
        type: "string",
        description: "The decrypted text from the Morse code encryption.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text",
      },
    ],
    demo: MorseCode,
    example:
      'import { useMorseCode } from "use100hooks";const MorseCode = () => { const inputText = "Hello, World!";  const { encryptedText, decryptedText } = useMorseCode(inputText);  return (<div><h2>Morse Code Conversion</h2><p>Input Text: {inputText}</p><p>Encrypted Text (Morse Code): {encryptedText}</p><p>Decrypted Text: {decryptedText}</p></div> );};export default MorseCode;',
  },
  {
    icon: CgPassword,
    classIcon: "cg",
    title: "usePasswordGenerator",
    install: 'import { usePasswordGenerator } from "use100hooks"',
    description: {
      short:
        "The usePasswordGenerator hook generates random passwords with customizable options.",
      long: 'The usePasswordGenerator hook is a tool that generates random passwords for you. It takes a set of options as input to customize the generated password. With these options, you can define the desired length of the password, specify whether to include special characters like "$" or "@", and choose whether to include uppercase letters like "A" or "B". By adjusting these options, you can generate passwords that meet specific requirements or preferences. This hook ensures that the passwords generated are strong, secure, and suitable for different online platforms or accounts.',
    },
    url: "/tools/usePasswordGenerator",
    return: [
      {
        name: "generatedPassword",
        type: "string",
        description: "The generated password based on the specified options.",
      },
    ],
    parameters: [
      {
        name: "options.length",
        type: "number",
        description: "The desired length of the generated password.",
      },
      {
        name: "options.includeSpecialCharacters",
        type: "boolean",
        description:
          "Flag indicating whether to include special characters in the password.",
      },
      {
        name: "options.includeUpperCase",
        type: "boolean",
        description:
          "Flag indicating whether to include uppercase letters in the password.",
      },
    ],
    demo: PasswordGenerator,
    example:
      'import { usePasswordGenerator } from "use100hooks";const PasswordGenerator = () => { const options = { length: 12,includeSpecialCharacters: true,includeUpperCase: true, }; const generatedPassword = usePasswordGenerator(options);  return (    <div><h2>Password Generator</h2><p>Generated Password: {generatedPassword}</p></div> );};export default PasswordGenerator;',
  },
  {
    icon: TbLineDotted,
    classIcon: "cg",
    title: "useTruncate",
    install: 'import { useTruncate } from "use100hooks"',
    description: {
      short:
        "Control the length of the truncated text and provide a separator to ensure the truncated text ends at a logical point.",
      long: "The useTruncate hook allows you to truncate a given text string based on certain options. You can define the maximum length of the truncated text to control how many characters are displayed. Additionally, you have the option to specify a separator string that helps ensure the truncated text ends at a logical point, such as the end of a word or sentence.",
    },
    url: "/tools/useTruncate",
    return: [
      {
        name: "truncatedText",
        type: "string",
        description: "The truncated text based on the provided options.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The text to be truncated.",
      },
      {
        name: "length",
        type: "boolean",
        description: "The maximum length of the truncated text.",
      },
      {
        name: "separator",
        type: "boolean",
        description: "The separator used for truncation (optional).",
      },
    ],
    demo: Truncate,
    example:
      'import { useTruncate } from "use100hooks";const Truncate = () => {  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; const options = { length: 20, separator: "......" };  const truncatedText = useTruncate(text, options);  return (<div><h2>Truncated Text</h2><p>{truncatedText}</p></div>);};export default Truncate;',
  },
  {
    icon: ImFileWord,
    classIcon: "im",
    title: "useLoremIpsum",
    install: 'import { useLoremIpsum } from "use100hooks"',
    description: {
      short: "Generate Lorem Ipsum text based on the provided options",
      long: "The useLoremIpsum hook generates Lorem Ipsum text, which is commonly used as a placeholder in designs and prototypes. It accepts an options object that allows you to customize the generated text. You can specify the number of words, sentences, and paragraphs to generate.",
    },
    url: "/tools/useLoremIpsum",
    return: [
      {
        name: "loremIpsumText",
        type: "string",
        description:
          "The generated Lorem Ipsum text based on the provided options.",
      },
    ],
    parameters: [
      {
        name: "words",
        type: "number",
        description: "TThe number of words to generate ",
      },
      {
        name: "sentences",
        type: "number",
        description: "The number of sentences to generate",
      },
      {
        name: "paragraphs",
        type: "number",
        description: "The number of paragraphs to generate ",
      },
    ],
    demo: LoremIpsum,
    example:
      'import { useLoremIpsum } from "use100hooks";const LoremIpsum = () => { const loremIpsum = useLoremIpsum({ words: 50, sentences: 3, paragraphs: 2 });return ( <div><h2>Lorem Ipsum Text</h2><p>{loremIpsum}</p></div> );};export default LoremIpsum;',
  },
  {
    icon: HiMiniBarsArrowDown,
    classIcon: "hi",
    title: "useTextMinifier",
    install: 'import { useTextMinifer } from "use100hooks"',
    description: {
      short: "Minify text by removing spaces, tabs, and specified lines. ",
      long: "The useTextMinifier hook provides the ability to minify text by removing spaces, tabs, and specified lines. It accepts a text string and an options object that allows you to customize the minification process. By default, no minification is applied. However, you can enable specific minification options by setting the corresponding properties in the options object. For example, if removeSpace is set to true, all spaces within the text will be removed. Similarly, if removeTab is true, all tabs will be removed.",
    },
    url: "/tools/useTextMinifer",
    return: [
      {
        name: "minifiedText",
        type: "string",
        description: "The minified text based on the provided options.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The text to be minified.",
      },
      {
        name: "removeSpace",
        type: "boolean",
        description: "Whether to remove spaces from the text (optional).",
      },
      {
        name: "removeTab",
        type: "boolean",
        description: "Whether to remove tabs from the text (optional).",
      },
      {
        name: "removeLine",
        type: "number",
        description: "Specifies the interval of lines to remove ",
      },
    ],
    demo: TextMinifier,
    example:
      'import { useTextMinifier } from "use100hooks";const TextMinifier = () => {  const text = `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nulla ac fermentum ipsum,`;  const options = { removeSpace: true,removeTab: true,removeLine: true };  const minifiedText = useTextMinifier(text, options);  return ( <div><h2>Minified Text</h2><pre>{minifiedText}</pre></div>  );};export default TextMinifier;',
  },

  {
    icon: AiOutlineFieldString,
    classIcon: "ai",
    title: "useStringBuilder",
    install: 'import { useStringBuilder } from "use100hooks"',
    description: {
      short:
        "Allows you to dynamically build a string by accumulating new texts.",
      long: "The useStringBuilder hook provides the ability to dynamically build a string by accumulating new texts. It maintains an internal state that keeps track of the built string. By default, you can initialize the hook with an initial text, but its optional. You can pass an options object to customize the building process. The addNewLine option, when set to true, adds a new line before the new text. Similarly, the extraPaddedSpace option, when set to true, adds an extra padded space before the new text.",
    },
    url: "/tools/useStringBuilder",
    return: [
      {
        name: "minifiedText",
        type: "string",
        description: "The built string that accumulates new texts.",
      },
      {
        name: "buildText",
        type: "function",
        description: "A function to add new text to the builder.",
      },
    ],
    parameters: [
      {
        name: "initialText",
        type: "string",
        description: "The initial text to start with ",
      },
      {
        name: "addNewLine",
        type: "boolean",
        description:
          "Whether to add a new line before the new text (optional).",
      },
      {
        name: "extraPaddedSpace",
        type: "boolean",
        description:
          "Whether to add an extra padded space before the new text ",
      },
    ],
    demo: StringBuilder,
    example:
      'import { useStringBuilder } from "use100hooks";const StringBuilder = () => {  const [text, buildText] = useStringBuilder("Hello", { addNewLine: true,extraPaddedSpace: true, }); const handleClick = () => { buildText("world!");  };  return ( <div><h2>Text Builder Example</h2><pre>{text}</pre><button onClick={handleClick}>Add Text</button></div> );};export default StringBuilder;',
  },
  {
    icon: VscSymbolString,
    classIcon: "vsc",
    title: "useWordReplacer",
    install: 'import { useWordReplacer } from "use100hooks"',
    description: {
      short: "Replace specific words in a text with new words. ",
      long: "The useWordReplacer hook enables you to perform word replacement in a given text. It accepts the original text and an options object that contains the word to be replaced and the word to replace it with.To use the hook, provide the text parameter with the original text you want to modify. The options object should include the replaceWord and withWord properties. The replaceWord specifies the word you want to replace, while the withWord indicates the word you want to replace it with..",
    },
    url: "/tools/useWordReplacer",
    return: [
      {
        name: "replacedText",
        type: "string",
        description: "The text with the replaced words",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The original text to perform word replacement.",
      },
      {
        name: "replaceWord",
        type: "string",
        description: "The word to be replaced in the text.",
      },
      {
        name: "withWord",
        type: "string",
        description: "The word to replace the matched words with.",
      },
    ],
    demo: WordReplace,
    example:
      'import { useWordReplacer } from "use100hooks";const WordReplace = () => { const text = "The quick brown fox jumps over the lazy dog."; const options = { replaceWord: "fox", withWord: "cat" };  const replacedText = useWordReplacer(text, options);  return ( <div><h2>Word Replacer Example</h2><p>Original Text: {text}</p><p>Replaced Text: {replacedText}</p></div>);};export default WordReplace;',
  },
  {
    icon: IoMdReverseCamera,
    classIcon: "vsc",
    title: "useReverseString",
    install: 'import { useReverseString } from "use100hooks"',
    description: {
      short: "Reverse a given text.",
      long: "he useReverseString hook enables you to reverse a text string. It accepts a string as input, and it returns the reversed version of that string. To use the hook, provide the text parameter with the original text you want to reverse. The hook internally splits the text into individual characters, reverses the order of those characters, and then joins them back together to form the reversed text.",
    },
    url: "/tools/useReverseString",
    return: [
      {
        name: "reverseText",
        type: "string",
        description: "The reversed text.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The original text to be reversed.",
      },
    ],
    demo: ReverseString,
    example:
      'import { useReverseString } from "use100hooks";const ReverseString = () => {  const text = "Hello, world!";  const reversedText = useReverseString(text); return ( <div><h2>Reverse String Example</h2> <p>Original Text: {text}</p><p>Reversed Text: {reversedText}</p></div> );};export default ReverseString;',
  },
  {
    icon: SiLetsencrypt,
    classIcon: "si",
    title: "useBase32",
    install: 'import { useBase32 } from "use100hooks"',
    description: {
      short:
        "Provides functions to encode and decode text using the Base32 encoding scheme.",
      long: "The useBase32 hook allows you to encode and decode text using the Base32 encoding scheme. Base32 is a binary-to-text encoding that represents binary data as a series of ASCII characters.",
    },
    url: "/tools/useBase32",
    return: [
      {
        name: "encode",
        type: "function",
        description: "A function that encodes the input text to Base32.",
      },
      {
        name: "decode",
        type: "function",
        description: "A function that decodes the Base32-encoded text.",
      },
    ],
    demo: Base32,
    example:
      'import { useBase32 } from "use100hooks";const Base32 = () => { const { encode, decode } = useBase32();  const originalText = "Hello, world!";  const encodedText = encode(originalText);  const decodedText = decode(encodedText);  return ( <div><h2>Base32 Example</h2><p>Original Text: {originalText}</p><p>Encoded Text: {encodedText}</p><p>Decoded Text: {decodedText}</p></div>  );};export default Base32;',
  },
  {
    icon: SiLetsencrypt,
    classIcon: "si",
    title: "useBase58",
    install: 'import { useBase58 } from "use100hooks"',
    description: {
      short:
        "Provides functions to encode and decode text using the Base58 encoding scheme.",
      long: "The useBase58 hook allows you to encode and decode text using the Base58 encoding scheme. Base32 is a binary-to-text encoding that represents binary data as a series of ASCII characters.",
    },
    url: "/tools/useBase58",
    return: [
      {
        name: "encode",
        type: "function",
        description: "A function that encodes the input text to Base58.",
      },
      {
        name: "decode",
        type: "function",
        description: "A function that decodes the Base58-encoded text.",
      },
    ],
    demo: Base58,
    example:
      'import { useBase58 } from "use100hooks";const Base58 = () => { const { encode, decode } = useBase58();  const originalText = "Hello, world!";  const encodedText = encode(originalText);  const decodedText = decode(encodedText);  return ( <div><h2>Base58 Example</h2><p>Original Text: {originalText}</p><p>Encoded Text: {encodedText}</p><p>Decoded Text: {decodedText}</p></div>  );};export default Base58;',
  },
  {
    icon: SiLetsencrypt,
    classIcon: "si",
    title: "useBase64",
    install: 'import { useBase64 } from "use100hooks"',
    description: {
      short:
        "Provides functions to encode and decode text using the Base64 encoding scheme.",
      long: "The useBase64 hook allows you to encode and decode text using the Base64 encoding scheme. Base32 is a binary-to-text encoding that represents binary data as a series of ASCII characters.",
    },
    url: "/tools/useBase64",
    return: [
      {
        name: "encode",
        type: "function",
        description: "A function that encodes the input text to Base64.",
      },
      {
        name: "decode",
        type: "function",
        description: "A function that decodes the Base64-encoded text.",
      },
    ],
    demo: Base64,
    example:
      'import { useBase64 } from "use100hooks";const Base64 = () => { const { encode, decode } = useBase64();  const originalText = "Hello, world!";  const encodedText = encode(originalText);  const decodedText = decode(encodedText);  return ( <div><h2>Base64 Example</h2><p>Original Text: {originalText}</p><p>Encoded Text: {encodedText}</p><p>Decoded Text: {decodedText}</p></div>  );};export default Base64;',
  },
  {
    icon: TbHexagons,
    classIcon: "tb",
    title: "useStringHex",
    install: 'import { useStringHex } from "use100hooks"',
    description: {
      short:
        "Allows you to encode strings into hexadecimal representation and decode hexadecimal strings back to their original form.",
      long: "The useStringHex hook is a utility for encoding and decoding strings in hexadecimal format. It provides two functions: encode and decode. The encode function takes a string as input and converts it into its hexadecimal representation, where each character is converted into its corresponding Unicode code point in hexadecimal format. On the other hand, the decode function performs the reverse operation by converting a hexadecimal string back into its original string form. This hook can be useful in scenarios where you need to work with hexadecimal representations, such as encoding binary data or manipulating color values.",
    },
    url: "/tools/useStringHex",
    return: [
      {
        name: "encode",
        type: "function",
        description:
          "Function to encode a string to hexadecimal representation.",
      },
      {
        name: "decode",
        type: "function",
        description:
          "Function to decode a hexadecimal string back to its original string form.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The string to encode or decode.",
      },
      {
        name: "hexText",
        type: "string",
        description: "The hexadecimal string to decode.",
      },
    ],
    demo: StringHex,
    example:
      'import { useStringHex } from "use100hooks";const StringHex = () => { const { encode, decode } = useStringHex(); const originalText = "Hello, World!"; const encodedText = encode(originalText);  const decodedText = decode(encodedText); return ( <div><h2>Original Text:</h2><p>{originalText}</p><h2>Encoded Text:</h2><p>{encodedText}</p><h2>Decoded Text:</h2><p>{decodedText}</p></div> );};export default StringHex;',
  },
  {
    icon: BsFillFileBinaryFill,
    classIcon: "bs",
    title: "useStringBinary",
    install: 'import { useStringBinary } from "use100hooks"',
    description: {
      short: "Convert strings to binary representation and vice versa",
      long: "The useStringBinary hook is a utility that enables you to convert strings to binary representation and decode binary strings back to their original string form. It provides two functions: encode and decode. The encode function takes a string as input and converts each character into its corresponding binary representation. This is done by converting the Unicode code point of each character to an 8-bit binary value. On the other hand, the decode function performs the reverse operation by converting binary strings back to their original string form.",
    },
    url: "/tools/useStringBinary",
    return: [
      {
        name: "encode",
        type: "function",
        description: "Function to encode a string to binary representation.",
      },
      {
        name: "decode",
        type: "function",
        description:
          "Function to decode a binary string back to its original string form.",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The string to encode or decode.",
      },
      {
        name: "binaryText",
        type: "string",
        description: "The binary string to decode.",
      },
    ],
    demo: StringBinary,
    example:
      'import { useStringBinary } from "use100hooks";const StringBinary = () => {  const { encode, decode } = useStringBinary();const originalText = "Hello, World!";const encodedText = encode(originalText); const decodedText = decode(encodedText); return ( <div><h2>Original Text:</h2><p>{originalText}</p><h2>Encoded Text (Binary):</h2><p>{encodedText}</p><h2>Decoded Text:</h2><p>{decodedText}</p></div> );};export default StringBinary;',
  },
  {
    icon: FaTextHeight,
    classIcon: "fa",
    title: "useCaseConverter",
    install: 'import { useCaseConverter } from "use100hooks"',
    description: {
      short: "Convert strings to the type cases",
      long: "The useCaseConverter function is like a magic machine that can take some text and convert it to different styles. It understands four styles: Upper Case (all capital letters), Lower Case (all small letters), Title Case (capitalizing the first letter of each word), and Sentence Case (capitalizing the first letter of the sentence). It returns the converted text.",
    },
    url: "/tools/useCaseConverter",
    return: [
      {
        name: "convertedText",
        type: "string",
        description: "The converted text based on the selected case type",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The string to encode or decode.",
      },
      {
        name: "type",
        type: "string",
        description:
          "The selected case type for the conversion (e.g., Upper Case)",
      },
    ],
    demo: CaseConverter,
    example:
      'import { useCaseConverter } from "use100hooks";import { useState } from "react";const CaseConverter = () => { const [text, setText] = useState("");const [caseType, setCaseType] = useState("Upper Case");  const convertedText = useCaseConverter(text, caseType);  return (<div><input type="text" value={text} onChange={(event) => setText(event.target.value)} /><select value={caseType} onChange={(event) => setCaseType(event.target.value)}><option value="Upper Case">Upper Case</option><option value="Lower Case">Lower Case</option><option value="Title Case">Title Case</option><option value="Sentence Case">Sentence Case</option></select><p>{convertedText}</p></div> );};export default CaseConverter;',
  },
  {
    icon: MdTextFields,
    classIcon: "md",
    title: "useRemoveAccent",
    install: 'import { useRemoveAccent } from "use100hooks"',
    description: {
      short:
        "Converted text without accents is displayed in a paragraph element.",
      long: "The useRemoveAccent function is like a special tool that can take a piece of text and remove any accents from it. Accents are those small marks or symbols that appear above or below some letters, like the tilde (~) or the acute accent (´). This tool knows which non-accented letter corresponds to each accented letter. For example, it knows that 'á' should be converted to 'a' and 'é' should be converted to 'e'. It returns the text with all the accents removed.",
    },
    url: "/tools/useRemoveAccent",
    return: [
      {
        name: "convertedText",
        type: "string",
        description: "The converted text with accents removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with accented characters",
      },
    ],
    demo: RemoveAccent,
    example:
      'import { useRemoveAccent } from "use100hooks";import { useState } from "react";const RemoveAccent = () => { const [text, setText] = useState(""); const convertedText = useRemoveAccent(text);  return ( <div><input type="text" value={text} onChange={(event) => setText(event.target.value)}/><p>{convertedText}</p></div> );};export default RemoveAccent;',
  },
  {
    icon: FaGripLines,
    classIcon: "fa",
    title: "useRemoveDuplicateLines",
    install: 'import { useRemoveDuplicateLines } from "use100hooks"',
    description: {
      short: "It splits the text into lines, removes duplicate lines",
      long: "The useRemoveDuplicateLines function is like a special tool that can take a bunch of text with multiple lines and remove any duplicate lines from it. Imagine you have a list of items, and sometimes you accidentally write the same item twice. This tool helps you find those duplicates and removes them, so you have a clean list without any repetitions. It returns the text with duplicate lines removed.",
    },
    url: "/tools/useRemoveDuplicateLines",
    return: [
      {
        name: "convertedText",
        type: "string",
        description: "The converted text with accents removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with accented characters",
      },
    ],
    demo: RemoveDuplicateLines,
    example:
      'import { useRemoveDuplicateLines } from "use100hooks";import { useState } from "react";const RemoveDuplicateLines = () => { const [text, setText] = useState("");  const uniqueText = useRemoveDuplicateLInes(text);  return ( <div><textarea value={text} onChange={(event) => setText(event.target.value)}/><textarea value={uniqueText} readOnly /></div> );};export default RemoveDuplicateLines;',
  },

  {
    icon: CgBatteryEmpty,
    classIcon: "cg",
    title: "useRemoveEmptyLines",
    install: 'import { useRemoveEmptyLines } from "use100hooks"',
    description: {
      short:
        "Splits the text into lines, filters out the empty lines, and then joins the non-empty lines back together.",
      long: "The useRemoveEmptyLines function is like a helpful tool that can take a bunch of text with multiple lines and remove any empty lines from it. Empty lines are those lines that don't have any text; they are like blank spaces. This tool helps you get rid of those empty lines and keep your text tidy. It returns the text with empty lines removed.",
    },
    url: "/tools/useRemoveEmptyLines",
    return: [
      {
        name: "nonEmptyText",
        type: "string",
        description: "The text with empty lines removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with accented characters",
      },
    ],
    demo: RemoveEmptyLines,
    example:
      'import { useRemoveEmptyLines } from "use100hooks";import { useState } from "react";const RemoveEmptyLines = () => { const [text, setText] = useState(""); const nonEmptyText = useRemoveEmptyLines(text); return ( <div> <textarea value={text} onChange={event => setText(event.target.value)}/> <textarea value={nonEmptyText} readOnly /> </div>);};export default RemoveEmptyLines;',
  },
  {
    icon: LuSpace,
    classIcon: "lu",
    title: "useRemoveExtraSpace",
    install: 'import { useRemoveExtraSpace } from "use100hooks"',
    description: {
      short:
        "Replaces multiple consecutive spaces with a single space and trims any leading or trailing spaces.",
      long: "The useRemoveExtraSpace function is like a special tool that can take a piece of text and remove any extra spaces from it. Extra spaces are those additional spaces that might accidentally appear when you press the spacebar multiple times or when you copy and paste text from somewhere. This tool helps you clean up the text and make sure there's only one space between words. It returns the text without any extra spaces.",
    },
    url: "/tools/useRemoveExtraSpace",
    return: [
      {
        name: "textWithoutBreaks",
        type: "string",
        description: "The text with extra spaces removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with extra space",
      },
    ],
    demo: RemoveExtraSpace,
    example:
      'import { useRemoveExtraSpace } from "use100hooks";import { useState } from "react";const RemoveExtraSpace = () => { const [text, setText] = useState("");  const textWithoutBreaks = useRemoveExtraSpace(text); return ( <div><textarea value={text} onChange={(event) => setText(event.target.value)}/><textarea value={textWithoutBreaks} readOnly /></div> );};export default RemoveExtraSpace;',
  },
  {
    icon: MdNumbers,
    classIcon: "md",
    title: "useStringLength",
    install: 'import { useStringLength } from "use100hooks"',
    description: {
      short: "Count the string overall length",
      long: "The useStringLength function is like a magical tool that can tell you how long a piece of text is. Imagine you have a sentence, and you want to know the number of characters in that sentence. This tool helps you count the characters and tells you the length of the sentence. It returns the number of characters in the text.",
    },
    url: "/tools/useStringLength",
    return: [
      {
        name: "textLength",
        type: "string",
        description: "The length of the provided text string",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text to measure the length",
      },
    ],
    demo: StringLength,
    example:
      'import { useStringLength } from "use100hooks";import { useState } from "react";const StringLength = () => {  const [text, setText] = useState(""); const textLength = useStringLength(text);  return ( <div><input type="text" value={text} onChange={(event) => setText(event.target.value)} /><p>Length: {textLength}</p></div> );};export default StringLength;',
  },
  {
    icon: AiOutlineGroup,
    classIcon: "ai",
    title: "useRemoveLineContain",
    install: 'import { useRemoveLineContain } from "use100hooks"',
    description: {
      short:
        "Remove the filtered text by removing lines that contain the specified keyword",
      long: "The useRemoveLineContain function is like a clever tool that can take a bunch of text with multiple lines and remove any lines that contain a specific keyword. It's like having a text with several sentences, and you want to get rid of the sentences that mention a certain word. This tool helps you do that. It returns the text with the lines containing the keyword removed.",
    },
    url: "/tools/useRemoveLineContain",
    return: [
      {
        name: "filteredText",
        type: "string",
        description: "The text with lines containing the keyword removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with multiple lines",
      },
      {
        name: "keyword",
        type: "string",
        description: "The keyword to filter lines from the text",
      },
    ],
    demo: RemoveContain,
    example:
      'import { useRemoveLineContain } from "use100hooks";import { useState } from "react";const RemoveContain = () => {  const [text, setText] = useState("");  const [keyword, setKeyword] = useState(""); const filteredText = useRemoveLineContain(text, keyword); return ( <div><textarea  value={text} onChange={(event) => setText(event.target.value)} /><input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)}/><textarea value={filteredText} readOnly /></div> );};export default RemoveContain;',
  },
  {
    icon: BiSort,
    classIcon: "bi",
    title: "useSortTextLines",
    install: 'import { useSortTextLines } from "use100hooks"',
    description: {
      short:
        "It splits the text into lines, sorts the lines in alphabetical order, and then joins the sorted lines back together.",
      long: "The useSortTextLines function is like a magical tool that can take a bunch of text with multiple lines and sort those lines alphabetically. Imagine you have a list of items, and you want to organize them in alphabetical order. This tool helps you do that. It returns the text with the lines sorted in alphabetical order.",
    },
    url: "/tools/useSortTextLines",
    return: [
      {
        name: "sortedText",
        type: "string",
        description: "The text with lines sorted in alphabetical order",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with multiple lines",
      },
    ],
    demo: SortTextLines,
    example:
      'import { useSortTextLines } from "use100hooks";import { useState } from "react";const SortTextLines = () => { const [text, setText] = useState(""); const sortedText = useSortTextLines(text);  return ( <div><textarea value={text} onChange={(event) => setText(event.target.value)}/> <textarea value={sortedText} readOnly/></div> );};export default SortTextLines;',
  },
  {
    icon: MdOutlineFlipCameraAndroid,
    classIcon: "md",
    title: "useTextFilpper",
    install: 'import { useTextFilpper } from "use100hooks"',
    description: {
      short: "Reversing the order of characters in the provided input text",
      long: "The useTextFlipper function is like a special tool that can take a piece of text and flip the characters in it. Imagine you have a word, and you want to see it as if it were written in a mirror. This tool helps you achieve that effect. It returns the text with the characters flipped.",
    },
    url: "/tools/useTextFilpper",
    return: [
      {
        name: "flippedText",
        type: "string",
        description: "The text with the characters flipped",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text to flip the character",
      },
    ],
    demo: TextFilpper,
    example:
      'import { useTextFilpper } from "@/dist/useTextFilpper";import { useState } from "react";const TextFilpper = () => { const [text, setText] = useState(""); const flippedText = useTextFilpper(text);  return ( <div><input  type="text" value={text} onChange={(event) => setText(event.target.value)}/><p>{flippedText}</p></div> );};export default TextFilpper;',
  },
  {
    icon: MdOutlineBreakfastDining,
    classIcon: "md",
    title: "useRemoveLineBreak",
    install: 'import { useRemoveLineBreak } from "use100hooks"',
    description: {
      short: 'It replaces all line breaks ("\n") with a space character.',
      long: "The useRemoveLineBreaks function is like a helpful tool that can take a piece of text and remove any line breaks from it. Line breaks are like new lines that you create when you press the Enter or Return key on your keyboard. Sometimes you want to remove those line breaks and have all the text in one continuous line. This tool helps you do that. It returns the text without any line breaks.",
    },
    url: "/tools/useRemoveLineBreak",
    return: [
      {
        name: "textWithoutBreaks",
        type: "string",
        description: "The text with line breaks removed",
      },
    ],
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The input text with line breaks",
      },
    ],
    demo: RemoveLineBreak,
    example:
      'import { useRemoveLineBreak } from "use100hooks";import { useState } from "react";const RemoveLineBreak = () => { const [text, setText] = useState("");  const textWithoutBreaks = useRemoveLineBreak(text); return ( <div><textarea value={text} onChange={(event) => setText(event.target.value)}/><textarea value={textWithoutBreaks} readOnly /></div> );};export default RemoveLineBreak;',
  },
  {
    icon: TbClearFormatting,
    classIcon: "tb",
    title: "useStringFormat",
    install: 'import { useStringFormat } from "use100hooks"',
    description: {
      short: "Formatted text based on the provided format type",
      long: "The useStringFormat function is like a versatile tool that can take a piece of text and format it in different ways. You can think of it as a magical text transformer. It can format the text in four different styles: camelCase, kebabCase, snakeCase, and startCase. It returns the text formatted according to the chosen style.",
    },
    url: "/tools/useStringFormat",
    return: [
      {
        name: "formattedText",
        type: "string",
        description: "The text formatted based on the type",
      },
    ],
    parameters: [
      {
        name: "type",
        type: "string",
        description: "Type of format to convert",
      },
      {
        name: "text",
        type: "string",
        description:
          "The input text to convert in various type (e.g camelCase)",
      },
    ],
    demo: StringFormat,
    example:
      'import { useStringFormat } from "use100hooks";import { useState } from "react";const StringFormat = () => {  const [text, setText] = useState("");  const [formatType, setFormatType] = useState("camelCase");  const formattedText = useStringFormat({ type: formatType, text });  return (    <div>      <input type="text" value={text} onChange={(event) => setText(event.target.value)} /> <select value={formatType} onChange={(event) => setFormatType(event.target.value)}><option value="camelCase">camelCase</option><option value="kebabCase">kebabCase</option><option value="snakeCase">snakeCase</option> <option value="startCase">startCase</option></select><p>{formattedText}</p></div>);};export default StringFormat;',
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
