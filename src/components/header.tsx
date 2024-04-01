import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="border-b">
      <div className="flex flex-col w-full p-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-16 lg:items-center lg:justify-between lg:flex-row md:px-6">
        <div className="flex flex-row items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-playfair focus:outline-none focus:shadow-outline"
          >
            <Image
              src="/logo.svg"
              width={38}
              height={38}
              alt="logo"
              className="w-[38px] h-[38px]"
              priority={true}
            />
            <span className="uppercase font-bold text-[25px]">ziq</span>
          </Link>
          <button className="lg:hidden focus:outline-none flex items-center">
            <Image
              src="/assets/material/menu.webp"
              width={28}
              height={28}
              alt="menu"
              priority={true}
              loading="eager"
            />
          </button>
        </div>

        <nav className="flex-col font-playfair font-semibold items-end flex-grow hidden px-5 md:pb-0 lg:flex lg:justify-end lg:flex-row lg:space-x-4">
          <Link
            href="/"
            className="p-2 text-black transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
          >
            Project
          </Link>
          <Link
            href="/"
            className="p-2 text-black transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
          >
            Articles
          </Link>
          <Link
            href="/"
            className="inline-flex self-center font-inter items-center px-6 py-2 text-sm text-white transition-all duration-500 ease-in-out transform bg-black rounded-md hover:text-white md:mb-2 lg:mb-0 hover:border-white hover:bg-slate-800 focus:ring-2 ring-offset-current ring-offset-2"
          >
            Free Quote
          </Link>
        </nav>
      </div>
    </section>
  );
}
