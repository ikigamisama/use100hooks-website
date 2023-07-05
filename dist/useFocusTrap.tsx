import { useEffect, useRef } from "react";

export const useFocusTrap = (isEnabled: boolean = true) => {
  const trapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const trapElement = trapRef.current;

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusableElements = trapElement?.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement?.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);

    return () => {
      document.removeEventListener("keydown", handleFocusTrap);
    };
  }, [isEnabled]);

  return trapRef;
};
