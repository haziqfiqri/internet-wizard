// import Article from "@/components/Article";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

export default async function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Article />
      <Work />
      <Footer />
    </main>
  );
}
