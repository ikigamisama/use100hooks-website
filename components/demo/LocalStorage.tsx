"use client";
import { useLocalStorage } from "use100hooks";
import { useState } from "react";

const LocalStorage = () => {
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
  });

  const [data, setData, removeData] = useLocalStorage("name", "");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let d = JSON.stringify({
      first_name: info.first_name,
      last_name: info.last_name,
    });
    setData(d);
  };
  return (
    <section className="w-full">
      <form method="post" onSubmit={handleOnSubmit}>
        <div className="relative mb-2">
          <label
            htmlFor="first_name"
            className="block mb-2 text-left text-sm font-bold text-sky-500"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            value={info.first_name}
            onChange={(e) => setInfo({ ...info, first_name: e.target.value })}
            className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative mb-2">
          <label
            htmlFor="last_name"
            className="block mb-2 text-left text-sm font-bold text-sky-500"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            value={info.last_name}
            onChange={(e) => setInfo({ ...info, last_name: e.target.value })}
            className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
          Submit
        </button>
      </form>

      {data && (
        <div className="my-8">
          <p className="text-left font-bold mb-2">Localstorage Value</p>
          <p className="text-left font-bold mb-2">
            First Name: {JSON.parse(data).first_name}
          </p>
          <p className="text-left font-bold mb-2">
            Last Name: {JSON.parse(data).last_name}
          </p>

          <button
            type="button"
            onClick={removeData}
            className="mt-4 text-white w-auto bg-red-600 px-5 py-2.5 rounded-sm"
          >
            Remove Localstorage
          </button>
        </div>
      )}
    </section>
  );
};
export default LocalStorage;
