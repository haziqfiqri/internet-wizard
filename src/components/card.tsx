import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <section className="container px-5 py-24 mx-auto lg:px-24">
      <div className="flex flex-col w-full mb-12 text-left lg:text-center">
        <h2 className="mb-6 font-playfair text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
          Let Him Cook
        </h2>
        <p className="mx-auto font-inter text-md md:text-lg leading-snug text-slate-500 lg:w-1/2">
          3+ years of forging software engineering foundation in professional
          scene.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="w-full p-4 md:w-1/3">
          <div className="p-6 border rounded-3xl">
            <a className="inline-flex items-center mb-2">
              <div className="flex-shrink-0 object-cover object-center w-8 h-8 relative">
                <Image
                  src="/assets/company/orius.jpg"
                  fill
                  alt="orius"
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
              <span className="flex flex-col flex-grow pl-4">
                <span className="text-xs uppercase text-slate-600">
                  Orius Digital
                </span>
                <span className="text-xs text-slate-400">
                  L4 Software Engineer
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500">
              Creative eCommerce Agency
            </p>
          </div>
          <div className="p-6 mt-4 border rounded-3xl">
            <a className="inline-flex items-center mb-2">
              <div className="flex-shrink-0 object-cover object-center w-8 h-8 relative">
                <Image
                  src="/assets/company/photobook.jpg"
                  fill
                  alt="photobook"
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
              <span className="flex flex-col flex-grow pl-4">
                <span className="text-xs uppercase text-slate-600">
                  Photobook
                </span>
                <span className="text-xs text-slate-400">
                  L3 Software Engineer
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500">
              Global Personalised Merchandise
            </p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <div className="p-6 border rounded-3xl">
            <a className="inline-flex items-center mb-2">
              <div className="flex-shrink-0 object-cover object-center w-8 h-8 relative">
                <Image
                  src="/assets/company/clazzy.png"
                  fill
                  alt="clazzy"
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
              <span className="flex flex-col flex-grow pl-4">
                <span className="text-xs uppercase text-slate-600">Clazzy</span>
                <span className="text-xs text-slate-400">
                  L3 Software Engineer
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500">
              Economizing Education Sector
            </p>
          </div>
          <div className="p-6 mt-4 border rounded-3xl">
            <a className="inline-flex items-center mb-2">
              <div className="flex-shrink-0 object-cover object-center w-8 h-8 relative">
                <Image
                  src="/assets/company/carsome.jpg"
                  fill
                  alt="carsome"
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
              <span className="flex flex-col flex-grow pl-4">
                <span className="text-xs uppercase text-slate-600">
                  Carsome
                </span>
                <span className="text-xs text-slate-400">
                  L2 Software Engineer
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500">
              #1 Used Cars Buying/Selling Platform
            </p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <div className="p-6 border rounded-3xl">
            <a className="inline-flex items-center mb-2">
              <div className="flex-shrink-0 object-cover object-center w-8 h-8 relative">
                <Image
                  src="/assets/company/hatiolab.png"
                  fill
                  alt="hatio"
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
              <span className="flex flex-col flex-grow pl-4">
                <span className="text-xs uppercase text-slate-600">
                  Hatiolab
                </span>
                <span className="text-xs text-slate-400">
                  L1 Software Engineer
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500">
              Cloud Supply Chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
