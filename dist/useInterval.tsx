import { useEffect, useRef } from "react";

export const useInterval = (
  callback: () => void,
  delay: number | null
): void => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [delay]);
};
