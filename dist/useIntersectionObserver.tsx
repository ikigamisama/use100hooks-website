import { useEffect, useRef, useState } from "react";

type IntersectionObserverHookResult = [React.RefObject<Element>, boolean];

export const useIntersectionObserver = (): IntersectionObserverHookResult => {
  const ref = useRef<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
};
