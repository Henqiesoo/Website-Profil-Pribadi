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
      className="mx-auto max-w-[var(--shell)] px-6 pb-24 md:px-10 md:pb-40"
    >
      <Reveal>
        <div style={{ marginLeft: "var(--nudge-2)" }}>
          <h2 className="d-1">{mengajar.judul}</h2>
          <p className="prose-body mt-5 text-ink-muted">{mengajar.catatan}</p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <figure className="mt-14 overflow-hidden rounded-brand border border-line bg-ground-sunk md:mt-20">
          <Image
            src={mengajar.utama.src}
            alt={mengajar.utama.alt}
            width={mengajar.utama.w}
            height={mengajar.utama.h}
            sizes="(min-width: 768px) 82rem, 100vw"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Reveal>

      <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-12 md:gap-6">
        {mengajar.lain.map((f, i) => (
          <Reveal key={f.src} delay={140 + i * 70} className={kolom[i % kolom.length]}>
            <figure className="overflow-hidden rounded-brand border border-line bg-ground-sunk">
              <Image
                src={f.src}
                alt={f.alt}
                width={f.w}
                height={f.h}
                sizes="(min-width: 768px) 32vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
