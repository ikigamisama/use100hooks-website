"use client";

import { ToolsData } from "@/common.types";
import { inter } from "@/lib/fonts";
import { toolsList } from "@/lib/tools";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import useCustomState from "@/dist/useCategoryChoose";
import Link from "next/link";

const CardTools = ({
  icon: Icon,
  classIcon,
  title,
  description,
  url,
}: ToolsData) => {
  return (
    <Link href={url}>
      <div className="w-full bg-white h-48 drop-shadow-xl p-4 ease-in duration-300 hover:drop-shadow-2xl">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row items-center mb-4">
            <div className="rounded-full w-10 h-10 bg-blue-100 flex items-center justify-center">
              <Icon size={20} className={`tools-icons ${classIcon}`} />
            </div>
            <p
              className={`${inter.className} ml-2 font-semibold text-sky-500  text-lg`}
            >
              {title}
            </p>
          </div>
          <p className={`${inter.className} font-light text-base mb-4`}>
            {description.short}
          </p>
          <div className="flexEnd">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white"
            >
              <MdSubdirectoryArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ListTools = () => {
  const [search, setSearch] = useCustomState<string>("Name");
  return (
    <div className="mx-auto max-w-7xl mb-10 px-4">
      <div className="flexStart mb-6">
        <p>Search By:</p>
        <div className="ml-4 gap-4 relative">
          <input
            type="search"
            name="serch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-white h-10 border border-blue-200 px-5  rounded-full text-sm focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {toolsList.map((d, i) => (
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
