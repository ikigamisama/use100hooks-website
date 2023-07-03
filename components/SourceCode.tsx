import hljs from "highlight.js";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserBabel from "prettier/parser-babel";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
hljs.registerLanguage("javascript", javascript);

const SourceCode = ({ code }: { code: string | undefined }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const prettifyCode = (code: string | undefined) => {
    if (code) {
      const prettifiedCode = prettier.format(code, {
        parser: "babel",
        plugins: [parserHtml, parserBabel],
      });
      return prettifiedCode;
    }
  };

  //   if (code) {
  //     const returnStartIndex = code.indexOf("return (");
  //     const returnEndIndex = code.lastIndexOf(");");
  //     const htmlString = code.slice(returnStartIndex + 8, returnEndIndex).trim();
  //   }

  return (
    <div className="mt-8" id="example-section">
      <p className="mb-4 text-lg text-sky-500 font-semibold">Example</p>
      <pre>
        <code className="js">{prettifyCode(code)}</code>
      </pre>
    </div>
  );
};
export default SourceCode;
