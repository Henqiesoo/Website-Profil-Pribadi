import { Bingkai } from "@/components/Bingkai";
import { Cerita } from "@/components/Cerita";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Kontak } from "@/components/Kontak";
import { Nav } from "@/components/Nav";
import { Profesi } from "@/components/Profesi";

export default function Home() {
  return (
    <>
      <Bingkai />
      <Nav />
      <main>
        <Hero />
        <Profesi />
        <Cerita />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
