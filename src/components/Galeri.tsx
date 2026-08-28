import type { CSSProperties } from "react";
import Image from "next/image";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";

/** Tempo hanyut dibuat tidak sama dan tidak berkelipatan, supaya kartunya
 *  tidak pernah kembali serentak dan gerakannya terbaca acak. */
const TEMPO = ["17s", "23s", "19s", "27s", "21s", "25s", "18s"];
const JEDA = ["0s", "-3s", "-7s", "-1s", "-5s", "-9s", "-2s"];
/** Jarak parallax; makin besar makin terasa dekat ke pembaca. */
const JAUH = ["34px", "14px", "40px", "20px", "44px", "16px", "30px"];

export function Galeri() {
  const { galeri } = profil;

  return (
    <section
      id="galeri"
      className="mx-auto max-w-[var(--shell)] overflow-hidden px-6 py-24 md:px-10 md:py-36"
    >
      <Reveal>
        <div style={{ marginLeft: "var(--nudge-1)" }}>
          <h2 className="d-1">{galeri.judul}</h2>
          <p className="prose-body mt-5 text-ink-muted">{galeri.catatan}</p>
        </div>
      </Reveal>

      <ul className="mt-16 flex flex-wrap items-start justify-center gap-x-5 gap-y-10 md:mt-24 md:gap-x-8">
        {galeri.foto.map((f, i) => (
          <li
            key={f.src}
            className="lapis"
            style={
              {
                "--jauh": JAUH[i % JAUH.length],
                "--lebar": f.lebar,
                marginTop: f.turun,
                zIndex: i % 2 === 0 ? 2 : 1,
              } as CSSProperties
            }
          >
            <figure
              className="kartu overflow-hidden rounded-brand border border-line bg-ground-sunk shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)]"
              style={
                {
                  "--putar": f.putar,
                  "--tempo": TEMPO[i % TEMPO.length],
                  "--jeda": JEDA[i % JEDA.length],
                } as CSSProperties
              }
            >
              <Image
                src={f.src}
                alt={f.alt}
                width={f.w}
                height={f.h}
                sizes="(min-width: 768px) 28vw, 44vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
