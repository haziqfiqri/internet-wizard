import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <h2 className="sr-only">Footer</h2>
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-12 lg:pb-24">
        <div className="flex flex-col">
          <div className="flex flex-col text-right">
            <span className="text-lg font-bold text-black lg:text-2xl">
              <div className="inline-flex items-center">
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
              </div>
            </span>
            <div className="pt-1 text-sm text-black font-inter font-light">
              Persiaran Setia Alam 40170 <br />
              Shah Alam Selangor, Malaysia
            </div>
          </div>

          <div className="flex grid-cols-3 justify-around pt-12 lg:pt-24">
            <div className="flex flex-col">
              <h1 className="text-md text-black font-playfair font-bold pb-2">
                Links
              </h1>
              <Link
                href="/"
                className="text-sm text-black font-inter font-light"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Projects
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Articles
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md text-black font-playfair font-bold pb-2">
                Support
              </h1>
              <Link
                href="/"
                className="text-sm text-black font-inter font-light"
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Terms Service
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md text-black font-playfair font-bold pb-2">
                Beep
              </h1>
              <Link
                href="/"
                className="text-sm text-black font-inter font-light"
              >
                Lorem
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Ipsum
              </Link>
              <Link
                href="/"
                className="pt-1 text-sm text-black font-inter font-light"
              >
                Doler
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
