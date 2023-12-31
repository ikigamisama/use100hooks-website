"use client";

import { ToolsData } from "@/common.types";
import { useDebounce } from "use100hooks";
import { toolsList } from "@/lib/tools";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ToolsNavbar = () => {
  const params = useParams();
  const [searchTool, setSearchTool] = useState<string>("");
  const [listTools, setListTools] = useState<ToolsData[]>(toolsList);
  const debounceSearch = useDebounce(searchTool, 250);

  useEffect(() => {
    const searchTools = () => {
      if (debounceSearch) {
        const filteredTools = toolsList.filter((tool) => {
          const { title } = tool;
          const searchValue = debounceSearch.toLowerCase();

          return title.toLowerCase().includes(searchValue);
        });
        setListTools(filteredTools);
      }
      if (searchTool === "") {
        const sortedList = [...listTools].sort((a, b) => {
          const letterA = a.title.toLowerCase();
          const letterB = b.title.toLowerCase();

          if (letterA < letterB) {
            return -1;
          }
          if (letterA > letterB) {
            return 1;
          }
          return 0;
        });

        setListTools(sortedList);
      }
    };
    searchTools();
  }, [toolsList, debounceSearch]);

  return (
    <div className="hidden xl:block fixed z-20 top-[80px] w-[18rem] navbar-tool-list">
      <nav className="lg:text-sm lg:leading-6 relative">
        <div className="h-10"></div>
        <div className="relative">
          <div className="w-full">
            <div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 stroke-slate-500 dark:stroke-white dark:fill-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-transparent border border-gray-300 dark:border-white text-slate-800 dark:text-white font-semibold text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-2 "
              placeholder="Search"
              value={searchTool}
              onChange={(e) => setSearchTool(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-12 lg:mt-8 ">
          <h5 className="mb-8 lg:mb-4 font-semibold text-xl text-slate-900 dark:text-white">
            List of Tools
          </h5>
          <div className="overflow-y-auto h-[45rem]">
            <ul className="space-y-6 lg:space-y-2 border-l-2 border-sky-100 dark:border-[#16181A] ">
              {listTools.map((d, i) => (
                <li key={i}>
                  <Link
                    href={d.url}
                    className={`${
                      params.tools === d.title
                        ? 'block border-l-4 pl-4 -ml-[3px] border-current font-semibold text-slate-800 dark:text-sky-500 border-sky-500 dark:border-gray-500"'
                        : "block border-l-4 pl-4 -ml-[3px] border-transparent font-normal hover:border-sky-500 text-slate-600 dark:text-slate-400"
                    } text-md`}
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ToolsNavbar;
