"use client";

import { ToolsData } from "@/common.types";
import { useDebounce } from "@/dist/useDebounce";
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
        setListTools(toolsList);
      }
    };
    searchTools();
  }, [toolsList, debounceSearch]);

  return (
    <div className="hidden lg:block fixed z-20 top-[80px] w-[18rem] overflowy-auto navbar-tool-list">
      <nav className="lg:text-sm lg:leading-6 relative">
        <div className="h-10 bg-white dark:bg-slate-900"></div>
        <div className="bg-white relative">
          <div className="w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-2 dark:text-white"
              placeholder="Search"
              value={searchTool}
              onChange={(e) => setSearchTool(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-12 lg:mt-8">
          <h5 className="mb-8 lg:mb-3 font-semibold text-lg text-slate-900 dark:text-slate-200">
            List of Tools
          </h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            {listTools.map((d, i) => (
              <li key={i}>
                <Link
                  href={d.url}
                  className={`${
                    params.tools === d.title
                      ? 'block border-l pl-4 -ml-px  border-current font-semibold dark:text-sky-400"'
                      : "block text-md border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  }`}
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default ToolsNavbar;
