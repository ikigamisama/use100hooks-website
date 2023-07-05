"use client";

import Link from "next/link";
import ToolsContentList from "./ToolsContentList";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "next/navigation";
import { toSearchTools, toSearchToolsKeyObject } from "@/lib/tools";
import { useDocumentTitle, useMetaTags } from "use100hooks";
import "highlight.js/styles/night-owl.css";

import dynamic from "next/dynamic";
import TerminalLoader from "./loader/Terminal";
import SourceCodeLoader from "./loader/SourceCode";

const Terminal = dynamic(() => import("./Terminal"), {
  loading: () => <TerminalLoader />,
});

const SourceCode = dynamic(() => import("./SourceCode"), {
  loading: () => <SourceCodeLoader />,
});

const MainToolsInfo = () => {
  const params = useParams();

  const toolInfo = toSearchTools(params.tools);
  const toolKeyInfo = toSearchToolsKeyObject(params.tools);

  useDocumentTitle(`${params.tools} - use100Hooks`);

  const metaTags = {
    title: `${params.tools} - use100Hooks`,
    description: toolInfo.description.short,
    image: `${window.location.protocol}//${window.location.host}/main-banner.jpg`,
    twitter: {
      card: "summary_large_image",
      site: `@iikgiami`,
      creator: "@iikgiami",
      title: `${params.tools} - use100Hooks`,
      url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
      image: `${window.location.protocol}//${window.location.host}/main-banner.jpg`,
      description: `${toolInfo.description.short}`,
    },
    og: {
      title: `${params.tools} - use100Hooks`,
      description: `${toolInfo.description.short}`,
      imageUrl: `${window.location.protocol}//${window.location.host}/main-banner.jpg`,
      url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
    },
  };

  const ifKeyExists = (key: string): boolean => {
    if (toolKeyInfo.includes(key)) {
      return true;
    }
    return false;
  };

  useMetaTags(metaTags);

  return (
    <section className="relative z-20 mt-[80px] mb-8 max-w-3xl mx-auto">
      <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:pr-8">
        <div className="block xl:hidden mb-4">
          <Link href="/" className="flexStart">
            <AiOutlineArrowLeft size={20} />
            <p className="text-md font-black-900 ml-2">Go Back</p>
          </Link>
        </div>

        <h1 className="inline-block text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {params.tools}
        </h1>
        <p className="mt-2 text-lg text-slate-700 dark:text-white">
          {toolInfo.description.short}
        </p>

        <div className="mt-8" id="install-section">
          <p className="mb-4 text-lg text-sky-500 font-semibold">Install</p>
          <Terminal text={toolInfo.install} />
        </div>

        <div className="mt-8" id="description-section">
          <p className="mb-4 text-lg text-sky-500 font-semibold">Description</p>
          <p className="leading-normal text-slate-900 dark:text-white">
            {toolInfo.description.long}
          </p>
        </div>

        {ifKeyExists("parameters") && (
          <div className="mt-8 relative" id="parameters-section">
            <p className="mb-4 text-lg text-sky-500 font-semibold">
              Parameters
            </p>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm text-left border border-sky-500">
                <thead className="text-xs text-white uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toolInfo.parameters?.map((d, i) => (
                    <tr
                      key={i}
                      className="bg-transparent border-b text-slate-800 dark:text-white border-sky-500"
                    >
                      <td className="px-6 py-4">{d.name}</td>
                      <td className="px-6 py-4">{d.type}</td>
                      <td className="px-6 py-4">{d.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {ifKeyExists("return") && (
          <div className="mt-8 relative" id="return-section">
            <p className="mb-4 text-lg text-sky-500 font-semibold">Return</p>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm text-left border border-sky-500">
                <thead className="text-xs text-white uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toolInfo.return?.map((d, i) => (
                    <tr
                      key={i}
                      className="bg-transparent border-b text-slate-800 dark:text-white border-sky-500 "
                    >
                      <td className="px-6 py-4">{d.name}</td>
                      <td className="px-6 py-4">{d.type}</td>
                      <td className="px-6 py-4">{d.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {toolInfo.demo && (
          <div className="mt-8" id="demo-section">
            <p className="mb-4 text-lg text-sky-500 font-semibold">Demo</p>
            <div className="h-full mb-8 p-8 text-center w-full bg-transparent dark:bg-white">
              <toolInfo.demo />
            </div>
          </div>
        )}

        <SourceCode code={toolInfo.example} />

        <ToolsContentList toolKeyInfo={toolKeyInfo} />
      </div>
    </section>
  );
};
export default MainToolsInfo;
