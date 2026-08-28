import Image from "next/image";

import { profil } from "@/content/profil";
import { Tombol } from "./Tautan";

export function Hero() {
  const { hero, potret, potretAlt, nama } = profil;

  return (
    <section
      id="atas"
      className="mx-auto max-w-[var(--shell)] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32"
    >
      <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h1 className="rise display-xl" style={{ animationDelay: "40ms" }}>
            {hero.baris1}
            <span className="mt-3 block display-lg text-ink-muted">
              {hero.baris2}
            </span>
          </h1>

          <p
            className="rise lede mt-8 text-ink-body"
            style={{ animationDelay: "160ms" }}
          >
            {hero.ringkasan}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Tombol href="#kontak">Hubungi saya</Tombol>
            <Tombol nada="garis" href="#cerita">
              Lihat kanal cerita
            </Tombol>
          </div>
        </div>

        <div
          className="rise md:col-span-5"
          style={{ animationDelay: "320ms" }}
          aria-hidden={potret ? undefined : true}
        >
          {potret ? (
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-brand border border-line bg-paper-sunk md:aspect-4/5">
              <Image
                src={potret}
                alt={potretAlt}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            /* Monogram sementara. Isi `potret` di src/content/profil.ts
               begitu foto asli sudah siap, blok ini otomatis diganti foto. */
            <div className="flex aspect-3/2 w-full items-center justify-center rounded-brand border border-line bg-block md:aspect-4/5">
              <span
                className="text-[clamp(4.5rem,14vw,11rem)] leading-none font-medium tracking-[-0.04em] text-block-ink"
                aria-hidden
              >
                {nama.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
