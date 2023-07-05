import { useEffect, useState } from "react";

export const useScrollTop = (heightToShow: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const shouldShowButton = scrollTop > heightToShow;
      setIsVisible(shouldShowButton);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { isVisible, scrollToTop };
};
