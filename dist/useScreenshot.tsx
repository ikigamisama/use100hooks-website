import { useEffect, useState } from "react";

export const useScreenshot = (
  targetRef: React.RefObject<HTMLElement | null>
) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const captureScreenshot = () => {
    const targetElement = targetRef.current || document.documentElement;

    const html2canvasPromise = import("html2canvas");

    html2canvasPromise.then((html2canvas) => {
      html2canvas.default(targetElement).then((canvas: HTMLCanvasElement) => {
        const dataURL = canvas.toDataURL();
        setScreenshot(dataURL);
      });
    });
  };

  return { screenshot, captureScreenshot };
};
