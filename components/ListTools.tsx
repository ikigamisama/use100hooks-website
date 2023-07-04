"use client";

import { ToolsData } from "@/common.types";
import { inter } from "@/lib/fonts";
import { toolsList } from "@/lib/tools";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import useCustomState from "@/dist/useCategoryChoose";
import { useDebounce } from "use100hooks";

const CardTools = ({
  icon: Icon,
  classIcon,
  title,
  description,
  url,
}: ToolsData) => {
  return (
    <Link href={url}>
      <div className="w-full bg-white  dark:bg-gradient-to-l dark:from-sky-400 dark:to-blue-500 h-48 drop-shadow-xl p-4 ease-in duration-300 hover:drop-shadow-2xl">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row items-center mb-4">
            <div className="rounded-full w-10 h-10 bg-blue-100 dark:bg-white flex items-center justify-center">
              <Icon size={20} className={`tools-icons ${classIcon}`} />
            </div>
            <p
              className={`${inter.className} ml-2 font-semibold text-sky-500 dark:text-white text-lg`}
            >
              {title}
            </p>
          </div>
          <p
            className={`${inter.className} font-light text-base mb-4 text-black-900 dark:text-white`}
          >
            {description.short}
          </p>
          <div className="flexEnd">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-sky-500  dark:bg-white flex items-center justify-center text-white"
            >
              <MdSubdirectoryArrowRight
                size={20}
                className="dark:fill-sky-500"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ListTools = () => {
  const [search, setSearch] = useCustomState<string>("");
  const [listTools, setListTools] = useState<ToolsData[]>(toolsList);
  const debounceSearch = useDebounce(search, 250);

  useEffect(() => {
    const searchTools = () => {
      if (debounceSearch) {
        const filteredTools = toolsList.filter((tool) => {
          const { title, description } = tool;
          const searchValue = debounceSearch.toLowerCase();

          return (
            title.toLowerCase().includes(searchValue) ||
            description.short.toLowerCase().includes(searchValue) ||
            description.long.toLowerCase().includes(searchValue)
          );
        });
        setListTools(filteredTools);
      }

      if (search === "") {
        setListTools(toolsList);
      }
    };
    searchTools();
  }, [toolsList, debounceSearch]);

  return (
    <div className="mx-auto max-w-7xl mb-10 px-4">
      <div className="flexStart mb-6">
        <p className="text-black-800 dark:text-white">Search By:</p>
        <div className="ml-4 gap-4 relative">
          <input
            type="search"
            name="serch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-transparent h-10 border border-black-500 text-slate-900 dark:text-white dark:border-white px-5 rounded-full text-sm focus:outline-none focus:border-black-800 dark:focus:border-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listTools.map((d, i) => (
          <CardTools
            key={i}
            classIcon={d.classIcon}
            icon={d.icon}
            title={d.title}
            description={d.description}
            url={d.url}
          />
        ))}
      </div>
    </div>
  );
};
export default ListTools;
