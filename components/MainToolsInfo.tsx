"use client";

import Link from "next/link";
import ToolsContentList from "./ToolsContentList";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "next/navigation";
import { toSearchTools, toSearchToolsKeyObject } from "@/lib/tools";
import Terminal from "./Terminal";
import { useDocumentTitle } from "@/dist/useDocumentTitle";
import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserBabel from "prettier/parser-babel";
hljs.registerLanguage("javascript", javascript);

const MainToolsInfo = () => {
  const params = useParams();

  const toolInfo = toSearchTools(params.tools);
  const toolKeyInfo = toSearchToolsKeyObject(params.tools);

  useDocumentTitle(`${params.tools} - use100Hooks`);

  const ifKeyExists = (key: string): boolean => {
    if (toolKeyInfo.includes(key)) {
      return true;
    }
    return false;
  };

  const prettifyCode = (code: string | undefined) => {
    if (code) {
      const prettifiedCode = prettier.format(code, {
        parser: "babel",
        plugins: [parserHtml, parserBabel],
      });
      return prettifiedCode;
    }
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <section className="mt-[80px] max-w-3xl mx-auto">
      <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:pr-8">
        <div className="block xl:hidden mb-4">
          <Link href="/" className="flexStart">
            <AiOutlineArrowLeft size={20} />
            <p className="text-md font-black-900 ml-2">Go Back</p>
          </Link>
        </div>

        <h1 className="inline-block text-3xl sm:text-3xl font-extrabold text-slate-900 tracking-tight ">
          {params.tools}
        </h1>
        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
          {toolInfo.description.short}
        </p>

        <div className="mt-8">
          <p className="mb-4 text-lg text-sky-500 font-semibold">Install</p>
          <Terminal text={toolInfo.install} />
        </div>

        <div className="mt-8">
          <p className="mb-4 text-lg text-sky-500 font-semibold">Description</p>
          <p className="leading-normal">{toolInfo.description.long}</p>
        </div>

        {ifKeyExists("parameters") && (
          <div className="mt-8 relative">
            <p className="mb-4 text-lg text-sky-500 font-semibold">
              Parameters
            </p>

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
                  <tr key={i} className="bg-white border-b border-sky-500 ">
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.type}</td>
                    <td className="px-6 py-4">{d.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {toolInfo.demo && (
          <div className="mt-8">
            <p className="mb-4 text-lg text-sky-500 font-semibold">Demo</p>
            <div className="h-full mb-4 text-center w-full">
              <toolInfo.demo />
            </div>
          </div>
        )}

        <div className="mt-8">
          <p className="mb-4 text-lg text-sky-500 font-semibold">Example</p>
          <pre>
            <code className="js">{prettifyCode(toolInfo.example)}</code>
          </pre>
        </div>

        <ToolsContentList toolKeyInfo={toolKeyInfo} />
      </div>
    </section>
  );
};
export default MainToolsInfo;
