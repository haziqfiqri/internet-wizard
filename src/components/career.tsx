"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const careers = [
  {
    company: "Orius Digital",
    role: "L4 Software Egnineer",
    description: "Creative Digital Agency",
    link: "https://oriusdigital.com/",
    image: "/assets/company/orius.webp",
    alt: "orius",
    content:
      "Empower digital agency that expands more than just creative e-commerce and digital marketing.",
  },
  {
    company: "Photobook",
    role: "L4 Software Egnineer",
    description: "Personalise Photo Print",
    link: "https://www.photobook.com.my/",
    image: "/assets/company/photobook.webp",
    alt: "photobook",
    content:
      "Leveraging software engineering and cloud orchestrating by donning two hats in orchestration team.",
  },
  {
    company: "Clazzy",
    role: "L3 Software Engineer",
    description: "Tech Learning Platform",
    link: "https://clazzy.my/",
    image: "/assets/company/clazzy.webp",
    alt: "clazzy",
    content:
      "A distinguished endeavor on an outsourced recruitment platform project for an Oil and Gas company.",
  },
  {
    company: "Carsome",
    role: "L2 Software Engineer",
    description: "#1 SEA Car Marketplace",
    link: "https://www.carsome.my/",
    image: "/assets/company/carsome.webp",
    alt: "carsome",
    content:
      "Pioneer, maintain and enhance Core microservices and bolstered internal and 3rd party integration.",
  },
  {
    company: "Hatiolab",
    role: "L1 Software Egnineer",
    description: "APAC Cloud Supply Chain",
    link: "https://www.hatiolab.com/",
    image: "/assets/company/hatiolab.webp",
    alt: "hatio",
    content:
      "Build solutions for the future of logistics that optimizes the flow of goods and smarter supply chain.",
  },
];

export default function Career() {
  const [isOpen, setOpen] = useState(Array(careers.length).fill(false));

  const toggleAccordion = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setOpen(newIsOpen);
  };

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
      <div className="flex flex-col w-full">
        {careers.map((item, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <div
                className={`flex justify-between border-b ${
                  index === 0 ? "pb-6" : "py-6"
                }`}
              >
                <div className="flex gap-5 items-center">
                  <Link href={item.link} target="_blank">
                    <div className="flex-shrink-0 object-cover object-center w-12 h-12 relative">
                      <Image
                        src={item.image}
                        fill
                        alt={item.alt}
                        sizes="100%"
                        className="rounded-full"
                        priority={true}
                        loading="eager"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col">
                    <Link href={item.link} target="_blank">
                      <h3 className="font-playfair text-2xl font-semibold text-black">
                        {item.company}
                      </h3>
                    </Link>
                    <p className="mt-1 font-inter text-md md:text-lg leading-snug text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button
                  className="flex items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <Image
                    src="/assets/material/chevron_up.webp"
                    width={25}
                    height={25}
                    alt="chevron_up"
                    priority={true}
                    className={`transition ease-out duration-300 ${
                      isOpen[index] ? "rotate-180" : ""
                    }`}
                    loading="eager"
                  />
                </button>
              </div>
              <div
                className={`flex flex-col transition-max-height duration-200 ease-in-out ${
                  isOpen[index] ? "max-h-auto py-6" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="font-inter text-md md:text-lg leading-snug text-slate-600 font-light">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
