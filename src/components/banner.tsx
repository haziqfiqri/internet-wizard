"use client";
import { ReactTyped } from "react-typed";

export default function Banner() {
  const texts = [
    "<span class='text-rose-400'>System</span>",
    "<span class='text-emerald-400'>Website</span>",
    "<span class='text-blue-400'>Brand</span>",
    "<span class='text-yellow-400'>Design</span>",
    "<span class='text-purple-400'>Content</span>",
    "<span class='text-amber-400'>Visual</span>",
    "<span class='text-stone-400'>Motion</span>",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-duck">
      <div className="container relative w-full px-8 pt-32 pb-0 mx-auto lg:px-4">
        <div className="flex flex-col w-full text-left lg:text-center">
          <strong className="mb-4 text-xs font-inter font-semibold tracking-widest uppercase text-slate-500">
            software artisan
          </strong>
          <h1 className="mb-6 font-playfair text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
            Unlock;
            <br />
            new {""}
            <ReactTyped strings={texts} typeSpeed={80} backSpeed={80} loop />
          </h1>
          <p className="font-inter mx-auto text-md md:text-lg font-light leading-snug text-slate-500 lg:w-1/2">
            I craft tailored solutions, intuitive interfaces, scalable
            architectures, and robust functionality to your unique needs.
          </p>
        </div>
        <div className="flex md:hidden w-full mt-6 max-w-7xl lg:justify-center">
          <div className=" rounded-lg sm:mt-0">
            <a className="inline-flex font-inter font-medium items-center px-4 py-2 text-md md:text-lg text-white transition-all duration-500 ease-in-out transform bg-black border-2 border-black rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-slate-500 focus:ring-2 ring-offset-current ring-offset-2">
              Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
