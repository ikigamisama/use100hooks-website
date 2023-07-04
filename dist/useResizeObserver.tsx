import { useEffect, useRef, useState } from "react";

type ResizeObserverCallback = (entries: ResizeObserverEntry[]) => void;

export const useResizeObserver = (
  targetRef: React.RefObject<Element>,
  callback: ResizeObserverCallback
) => {
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const handleResize: ResizeObserverCallback = (entries) => {
      callback(entries);
    };

    observerRef.current = new ResizeObserver(handleResize);
    observerRef.current.observe(target);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [targetRef, callback]);
};
