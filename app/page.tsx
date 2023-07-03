import { titleHero, subtitleHero } from "@/lib/text";
import dynamic from "next/dynamic";
import TerminalLoader from "@/components/loader/Terminal";
import ListToolLoader from "@/components/loader/ListTools";

const ListTools = dynamic(() => import("@/components/ListTools"), {
  loading: () => <ListToolLoader />,
});

const Terminal = dynamic(() => import("@/components/Terminal"), {
  loading: () => <TerminalLoader />,
});

export default function Home() {
  const randomIndex = Math.floor(Math.random() * titleHero.length);

  return (
    <>
      <section className="mt-[80px]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="sm:leading-[1.1] text-4xl font-extrabold sm:text-7xl dark:text-white">
              {titleHero[randomIndex]}
              <strong className="text-sky-500 dark:bg-gradient-to-r dark:from-green-300 dark:via-sky-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent ">
                {" "}
                use100hooks
              </strong>
            </h1>
            <p className="mt-4 mb-12 sm:text-xl/relaxed text-slate-600  dark:text-slate-400 font-medium">
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
