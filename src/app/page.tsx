import Banner from "@/components/banner";
import Career from "@/components/career";
import Carousel from "@/components/carousel";
// import Link from "@/components/link";
// import Header from "@/components/header";
import Service from "@/components/service";
import Spotify from "@/components/spotify";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* <Header /> */}
      <Banner />
      <Service />
      <Carousel />
      <Career />
      <Spotify />
      {/* <Link /> */}
    </main>
  );
}
