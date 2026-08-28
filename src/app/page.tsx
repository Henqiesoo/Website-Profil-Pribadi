import { Bingkai } from "@/components/Bingkai";
import { Cerita } from "@/components/Cerita";
import { Footer } from "@/components/Footer";
import { Galeri } from "@/components/Galeri";
import { Hero } from "@/components/Hero";
import { Jasa } from "@/components/Jasa";
import { Kontak } from "@/components/Kontak";
import { Nav } from "@/components/Nav";
import { Profesi } from "@/components/Profesi";
import { Sorot } from "@/components/Sorot";

export default function Home() {
  return (
    <>
      <Bingkai />
      <Nav />
      <main>
        <Hero />
        <Sorot />
        <Profesi />
        <Jasa />
        <Cerita />
        <Galeri />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
