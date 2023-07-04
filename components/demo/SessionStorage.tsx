import { useSessionStorage } from "use100hooks";

const SessionStorage = () => {
  const { set, get, remove } = useSessionStorage("session", "isLogin");

  const handleIsLogin = () => {
    set("isLogin");
  };
  const handleSetIsLogout = () => {
    set("isLogout");
  };

  const handleGet = () => {
    console.log(get());
  };

  const handleRemove = () => {
    remove();
  };

  return (
    <section>
      <div className="mb-4">
        <button
          className="text-white w-auto mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleIsLogin}
        >
          Set isLogin
        </button>
        <button
          className="text-white w-auto mt-4 ml-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleSetIsLogout}
        >
          Set isLogout
        </button>
        <button
          className="text-white w-auto mt-4 ml-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleGet}
        >
          Get
        </button>
        <button
          className="text-white w-auto mt-4 ml-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
      <p>Value: {get()}</p>
    </section>
  );
};
export default SessionStorage;
