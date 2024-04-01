import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-flower2">
      <div className="container relative w-full px-8 pt-32 pb-0 mx-auto lg:px-4">
        <div className="flex flex-col w-full text-left lg:text-center">
          <h1 className="mb-6 font-playfair text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-9xl">
            404;
          </h1>
          <p className="font-inter mx-auto text-md md:text-lg font-light leading-snug text-slate-500 lg:w-1/2">
            Oops.. I think you are not supposed to be here. Maybe try different
            link?
          </p>
        </div>
        <div className="flex w-full mt-6 max-w-7xl lg:justify-center">
          <div className=" rounded-lg sm:mt-0">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-md md:text-lg font-medium font-inter text-white transition-all duration-500 ease-in-out transform bg-black border-2 border-black rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-slate-500 focus:ring-2 ring-offset-current ring-offset-2"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
