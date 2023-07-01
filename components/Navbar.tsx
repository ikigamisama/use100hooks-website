import { satisfy } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-40">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center">
          <div className="flex-1 flexStart gap-10">
            <Link href="/" className="flex flex-row items-center">
              <Image
                src="/mainlogo.png"
                width={45}
                height={32}
                alt="main-logo"
                className="w-auto h-auto"
                blurDataURL={"/mainlogo.png"}
              />
              <p className={`${satisfy.className} ml-4 text-3xl`}>
                use100Hooks
              </p>
            </Link>
          </div>
          <div className="flexCenter gap-4">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <FaMoon size={20} />
            </button>
            <Link href="/">
              <RxGithubLogo size={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
