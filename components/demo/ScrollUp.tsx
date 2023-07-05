import { useScrollTop } from "use100hooks";

const ScrollUp = () => {
  const { isVisible, scrollToTop } = useScrollTop(200);

  return (
    <section>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={scrollToTop}
      >
        Scroll to Top
      </button>

      <p>Scrollup feature will appear {isVisible.toString()}</p>
    </section>
  );
};
export default ScrollUp;
