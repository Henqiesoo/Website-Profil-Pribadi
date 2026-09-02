import Image from "next/image";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";

/** Lebar tidak sama supaya barisnya tidak terasa seperti tabel. */
const kolom = ["md:col-span-5", "md:col-span-4", "md:col-span-3"];

export function Mengajar() {
  const { mengajar } = profil;

  return (
    <section
      id="mengajar"
      className="terang mx-auto max-w-[var(--shell)] px-6 pt-24 pb-24 md:px-10 md:pt-32 md:pb-16"
    >
      <Reveal>
        <div style={{ marginLeft: "var(--nudge-2)" }}>
          <span className="penanda">02 / 06</span>
          <h2 className="d-1 mt-6">{mengajar.judul}</h2>
          <p className="prose-body mt-5 text-ink-muted">{mengajar.catatan}</p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <figure className="bentang mt-14 overflow-hidden bg-ground-sunk md:mt-20">
          <Image
            src={mengajar.utama.src}
            alt={mengajar.utama.alt}
            width={mengajar.utama.w}
            height={mengajar.utama.h}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Reveal>

      <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-12 md:gap-6">
        {mengajar.lain.map((f, i) => (
          <Reveal key={f.src} delay={140 + i * 70} className={kolom[i % kolom.length]}>
            {/* Tinggi disamakan, lebar dibiarkan beda. Sebelumnya rasio yang
                sama pada lebar berbeda menyisakan lubang kosong di bawah dua
                foto terakhir, dan itu terbaca belum jadi. */}
            <figure className="angkat relative h-[clamp(17rem,30vw,25rem)] overflow-hidden rounded-[16px] bg-ground-sunk ">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 768px) 32vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
