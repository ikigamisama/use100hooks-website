import { useOnClickOutside } from "use100hooks";
import { useRef, useState } from "react";

const ClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setvalue] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <div>
      <p className="mb-4">After you click the toggle then click outside</p>
      <p>Value: {value}</p>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>
      {isOpen && (
        <div ref={dropdownRef} className="dropdown">
          <ul>
            <li
              className="w-full p-2 bg-sky-300 hover:bg-sky-700 text-white cursor-pointer border-b border-sky-100"
              onClick={() => {
                setvalue("Option 1");
                setIsOpen(false);
              }}
            >
              Option 1
            </li>
            <li
              className="w-full p-2 bg-sky-300 hover:bg-sky-700 text-white cursor-pointer border-b border-sky-100"
              onClick={() => {
                setvalue("Option 2");
                setIsOpen(false);
              }}
            >
              Option 2
            </li>
            <li
              className="w-full p-2 bg-sky-300 hover:bg-sky-700 text-white cursor-pointer border-b border-sky-100"
              onClick={() => {
                setvalue("Option 3");
                setIsOpen(false);
              }}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default ClickOutside;
