import { ToolsContentListProps } from "@/common.types";
import Link from "next/link";
import { useEffect, useState } from "react";

const ToolsContentList = ({ toolKeyInfo }: ToolsContentListProps) => {
  const [toolsList, setToolsList] = useState<string[]>([]);
  const [currentScroll, setCurrentScroll] = useState("Install");

  useEffect(() => {
    const capitalizeFirstLetter = (str: string): string => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const removeNotNeedKey = (keys: string[]) => {
      const elementsToRemove: string[] = ["icon", "classIcon", "title", "url"];

      const filteredArray: string[] = keys.filter(
        (element) => !elementsToRemove.includes(element)
      );

      const capitalizedArray: string[] = filteredArray.map((element) =>
        capitalizeFirstLetter(element)
      );

      setToolsList(capitalizedArray);
    };
    removeNotNeedKey(toolKeyInfo);
  }, [toolKeyInfo]);

  return (
    <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[18rem] py-10 overflow-y-auto hidden xl:block">
      <div className="px-8">
        <h4 className="text-slate-900 font-semibold mb-4 text-sm leading-6">
          On this Page
        </h4>
        <ul className="text-slate-700 text-sm leading-6">
          {toolsList.map((d, i) => (
            <li key={i}>
              <Link
                href={`#${d.toLowerCase()}-section`}
                scroll={false}
                onClick={() => setCurrentScroll(d)}
                className={`${
                  currentScroll === d
                    ? "block py-1 font-bold text-sky-500"
                    : "block py-1 font-medium hover:text-slate-900"
                } `}
              >
                {d}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToolsContentList;
