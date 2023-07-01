import ListTools from "@/components/ListTools";
import Terminal from "@/components/Terminal";
import { titleHero, subtitleHero } from "@/lib/text";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * titleHero.length);
  const theme = "light";

  return (
    <>
      <section className="mt-[80px]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="sm:leading-[1.1] text-5xl font-extrabold sm:text-7xl ">
              {titleHero[randomIndex]}
              <strong
                className={`${
                  theme === "light"
                    ? "text-sky-500"
                    : "bg-gradient-to-r from-green-300 via-sky-500 to-purple-600 bg-clip-text text-transparent "
                } font-extrabold sm:block ml-2`}
              >
                use100hooks
              </strong>
            </h1>

            <p className="mt-4 mb-12 sm:text-xl/relaxed text-[#7E868C] font-medium">
              {subtitleHero[randomIndex]}
            </p>

            <Terminal text="" />
          </div>
        </div>
      </section>

      <ListTools />
    </>
  );
}
