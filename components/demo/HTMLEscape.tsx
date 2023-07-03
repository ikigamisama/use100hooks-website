import { useHTMLentities } from "use100hooks";
import { useState } from "react";

const HTMLEscape = () => {
  const { escapeHTML, unescapeHTML } = useHTMLentities();
  const [code] = useState(`<p>This is a paragraph Text</p>`);

  const convertEscape = (text: string) => {
    return escapeHTML(text);
  };

  const convertUnescape = (text: string) => {
    return unescapeHTML(text);
  };
  return (
    <section>
      <p className="text-left my-4">HTML Code: {code}</p>

      <p className="text-left my-4">
        Escape HTML Convert: {convertEscape(code)}
      </p>

      <p className="text-left my-4">
        Unescape HTML Convert: {convertUnescape(code)}
      </p>
    </section>
  );
};
export default HTMLEscape;
