import Link from "next/link";
import Image from "next/image";

export default function Links() {
  return (
    <footer className="bg-white border-t bottom-0">
      <div className="px-5 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-12">
        <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0 font-medium font-inter text-black text-2xl">
          <Link
            className="flex items-center"
            href="https://www.linkedin.com/in/haziqfiqri/"
            target="_blank"
          >
            <span className="sr-only">Linkedin</span>
            <Image
              src="/assets/lineicon/linkedin.webp"
              width={25}
              height={25}
              alt="linkedin"
              priority={true}
              loading="eager"
            />
          </Link>
          <Link
            className="flex items-center"
            href="https://github.com/haziqfiqri"
            target="_blank"
          >
            <span className="sr-only">Github</span>
            <Image
              src="/assets/lineicon/github.webp"
              width={25}
              height={25}
              alt="github"
              priority={true}
              loading="eager"
            />
          </Link>
          <Link className="flex items-center" href="/">
            <span className="sr-only">Discord</span>
            <Image
              src="/assets/lineicon/discord.webp"
              width={25}
              height={25}
              alt="discord"
              priority={true}
              loading="eager"
            />
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-sm text-center font-inter font-light text-black">
            Haziq © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
