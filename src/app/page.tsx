import { Bingkai } from "@/components/Bingkai";
import { Cerita } from "@/components/Cerita";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/Hero";
import { Jasa } from "@/components/Jasa";
import { Kontak } from "@/components/Kontak";
import { Mengajar } from "@/components/Mengajar";
import { Musik } from "@/components/Musik";
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
        <Mengajar />
        <Jasa />
        <Cerita />
        <Musik />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
