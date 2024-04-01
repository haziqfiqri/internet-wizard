import Image from "next/image";

const services = [
  // {
  //   title: "Custom Apps",
  //   description:
  //     "Development tailored to propel your digital business forward.",
  //   icon: "construction",
  // },
  // {
  //   title: "Commerce Site",
  //   description: " Storefront development that captivate fast online presence.",
  //   icon: "store",
  // },
  // {
  //   title: "UI/UX Design",
  //   description:
  //     "Intuitive interface and seamless experience of digital delight.",
  //   icon: "palette",
  // },
  // {
  //   title: "Motion Craft",
  //   description:
  //     "Captivate story in cinematic motion with narrative that engage.",
  //   icon: "play_circle",
  // },
  // {
  //   title: "Visual Craft",
  //   description:
  //     "Elevate visual with creative design and professional photography.",
  //   icon: "image",
  // },
  // {
  //   title: "Content Craft",
  //   description: "Create content that connects to your business and customers.",
  //   icon: "looks",
  // },
  {
    title: "API Construction",
    description: "Custom backend system to propel your new digital business.",
    icon: "/assets/material/construction.webp",
    alt: "construction",
  },
  {
    title: "API Integration",
    description: "Connect your existing system with new 3rd party data source.",
    icon: "/assets/material/hub.webp",
    alt: "hub",
  },
  {
    title: "UI/UX Prototype",
    description: "Turn your creative and intuitive website designs come alive.",
    icon: "/assets/material/palette.webp",
    alt: "palette",
  },
  {
    title: "eCommerce Site",
    description:
      "Online storefront development that captivate online presence.",
    icon: "/assets/material/storefront.webp",
    alt: "storefront",
  },
  {
    title: "PC Master Race",
    description:
      "From part picking, assemble, test, troubleshoot to consultation.",
    icon: "/assets/material/reset_wrench.webp",
    alt: "reset_wrench",
  },
  {
    title: "Documentation",
    description: "Unlock the power of API through clear and concise resource.",
    icon: "/assets/material/edit_note.webp",
    alt: "edit_note",
  },
];

const page = {
  title: "Code Whisperer",
  description:
    "Let me translate your brilliant ideas into something that live on the internet.",
};

export default function Service() {
  return (
    <section className="container px-5 py-32 mx-auto lg:px-24">
      <div className="flex flex-col w-full mb-12 text-left lg:text-center">
        <h2 className="mb-6 font-playfair text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
          {page.title}
        </h2>
        <p className="mx-auto font-inter text-md md:text-lg leading-snug text-slate-500 lg:w-1/2">
          {page.description}
        </p>
      </div>
      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
        {services.map((item, index) => {
          return (
            <div className="flex p-4 lg:w-1/3" key={index}>
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-white rounded-full bg-black relative">
                <Image
                  src={item.icon}
                  width={25}
                  height={25}
                  alt={item.alt}
                  priority={true}
                  className="invert"
                  loading="eager"
                />
              </div>
              <div className="flex-grow pl-6">
                <h3 className="font-playfair text-2xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-6 font-inter text-md md:text-md text-slate-500 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
