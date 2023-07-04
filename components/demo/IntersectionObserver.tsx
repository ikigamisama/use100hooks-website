import { useIntersectionObserver } from "use100hooks";

const IntersectionObserver = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const divRef = ref as React.RefObject<HTMLDivElement>;

  console.log(isIntersecting);
  return (
    <section>
      <p>Check The Console.log to see the progress</p>
      <div ref={divRef}>
        {isIntersecting ? "Element is visible" : "Element is not visible"}
      </div>
    </section>
  );
};
export default IntersectionObserver;
