import { useEffect, useState } from "react";

export const useClipboard = (): [boolean, (text: string) => void] => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (copied) {
      timerId = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timerId);
  }, [copied]);

  return [copied, copyToClipboard];
};
