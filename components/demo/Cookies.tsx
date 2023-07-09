import { useCookies } from "use100hooks";

const Cookies = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  // Set a cookie
  const handleSetCookie = () => {
    setCookie("myCookie", "Hello, World!", { expires: 7 });
  };

  // Remove a cookie
  const handleRemoveCookie = () => {
    removeCookie("myCookie");
  };

  return (
    <div>
      <h1>Cookie Example</h1>
      <p>Current Cookie: {cookies.myCookie}</p>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleSetCookie}
      >
        Set Cookie
      </button>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={handleRemoveCookie}
      >
        Remove Cookie
      </button>
    </div>
  );
};
export default Cookies;
