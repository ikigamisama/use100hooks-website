import { useEffect, useRef } from "react";

type FrameCallback = (value: number) => void;

export const useAnimationFrame = (
  callback: FrameCallback,
  animationSpeed: number
): void => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>(Date.now());
  const valueRef = useRef<number>(0);

  const animate = () => {
    const currentTime = Date.now();
    const deltaTime = currentTime - previousTimeRef.current;
    previousTimeRef.current = currentTime;
    valueRef.current += deltaTime * animationSpeed;
    callback(valueRef.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Only runs on mount and unmount
};
