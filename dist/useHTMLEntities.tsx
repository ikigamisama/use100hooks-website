import { useEffect, useState } from "react";

export const useHTMLEntities = () => {
  const [escapedValue, setEscapedValue] = useState<string | undefined>("");
  const [unescapedValue, setUnescapedValue] = useState<string | undefined>("");
  const [miniEscapeValue, setMiniEscaptValue] = useState<string | undefined>(
    ""
  );

  const escapeHTML = (value: string | undefined) => {
    const escapeMap: { [key: string]: string } = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    if (value) return value.replace(/[&<>"']/g, (match) => escapeMap[match]);
  };

  const miniEscapeHTML = (value: string | undefined) => {
    const escapeMap: { [key: string]: string } = {
      "<": "&lt;",
      ">": "&gt;",
    };

    if (value)
      return value.replace(/[<>]/g, (match) => {
        if (match === "<" || match === ">") {
          return escapeMap[match];
        } else {
          return match;
        }
      });
  };

  const unescapeHTML = (value: string | undefined) => {
    const unescapeMap: { [key: string]: string } = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'",
    };

    if (value)
      return value.replace(
        /&amp;|&lt;|&gt;|&quot;|&#039;/g,
        (match) => unescapeMap[match]
      );
  };

  useEffect(() => {
    setEscapedValue(escapeHTML(unescapedValue));
  }, [unescapedValue]);

  useEffect(() => {
    setUnescapedValue(unescapeHTML(escapedValue));
  }, [escapedValue]);

  useEffect(() => {
    setMiniEscaptValue(miniEscapeHTML(miniEscapeValue));
  }, [miniEscapeValue]);

  return { escapeHTML, miniEscapeHTML, unescapeHTML };
};
