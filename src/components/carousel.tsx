import Marquee from "react-fast-marquee";
import Image from "next/image";

const images = [
  {
    src: "/assets/tech/wordpress.webp",
    alt: "wordpress",
  },
  {
    src: "/assets/tech/shopify.webp",
    alt: "shopify",
  },
  {
    src: "/assets/tech/figma.webp",
    alt: "figma",
  },
  {
    src: "/assets/tech/material.webp",
    alt: "material",
  },
  {
    src: "/assets/tech/tailwind.webp",
    alt: "tailwind",
  },
  {
    src: "/assets/tech/react.webp",
    alt: "react",
  },
  {
    src: "/assets/tech/vue.webp",
    alt: "vue",
  },
  {
    src: "/assets/tech/alpine.webp",
    alt: "alpine",
  },
  {
    src: "/assets/tech/lit.webp",
    alt: "lit",
  },
  {
    src: "/assets/tech/node.webp",
    alt: "node",
  },
  {
    src: "/assets/tech/javascript.webp",
    alt: "javascript",
  },
  {
    src: "/assets/tech/nest.webp",
    alt: "nest",
  },
  {
    src: "/assets/tech/typescript.webp",
    alt: "typescript",
  },
  {
    src: "/assets/tech/laravel.webp",
    alt: "laravel",
  },
  {
    src: "/assets/tech/php.webp",
    alt: "php",
  },
  {
    src: "/assets/tech/redux.webp",
    alt: "redux",
  },
  {
    src: "/assets/tech/vuex.webp",
    alt: "vuex",
  },
  {
    src: "/assets/tech/mysql.webp",
    alt: "mysql",
  },
  {
    src: "/assets/tech/postgre.webp",
    alt: "postgre",
  },
  {
    src: "/assets/tech/mongo.webp",
    alt: "mongo",
  },
  {
    src: "/assets/tech/redis.webp",
    alt: "redis",
  },
  {
    src: "/assets/tech/jenkins.webp",
    alt: "jenkins",
  },
  {
    src: "/assets/tech/docker.webp",
    alt: "docker",
  },
  {
    src: "/assets/tech/aws.webp",
    alt: "aws",
  },
  {
    src: "/assets/tech/do.webp",
    alt: "do",
  },
  {
    src: "/assets/tech/git.webp",
    alt: "git",
  },
];

export default function Carousel() {
  return (
    <section className="container px-5 py-10 mx-auto lg:px-24">
      <Marquee>
        <div className="flex w-full overflow-hidden overflow-x-auto scroll-smooth scroll-auto gap-10 mr-10">
          {images.map((item, index) => {
            return (
              <div
                className="flex-shrink-0 object-cover object-center w-[50px] h-[50px] relative"
                key={index}
              >
                <Image
                  src={item.src}
                  width={50}
                  height={50}
                  alt={item.alt}
                  priority={true}
                  loading="eager"
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}
