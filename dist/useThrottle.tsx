import { useEffect, useRef, useState } from "react";

export const useThrottle = <T,>(
  func: (...args: T[]) => void,
  delay: number
): ((...args: T[]) => void) => {
  const [throttledValue, setThrottledValue] = useState<T | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (throttledValue === null) return;

    const timer = setTimeout(() => {
      func(throttledValue);
      setThrottledValue(null);
    }, delay);

    return () => clearTimeout(timer);
  }, [throttledValue, delay, func]);

  const handleThrottle = (...args: T[]): void => {
    setThrottledValue(args[0]);
  };

  return handleThrottle;
};
