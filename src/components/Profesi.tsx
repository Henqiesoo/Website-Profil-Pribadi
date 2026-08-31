import type { CSSProperties } from "react";
import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";

/** Tiap baris masuk sejauh takik yang berbeda, jadi tepi kirinya bergerigi. */
const takik = ["0rem", "var(--nudge-1)", "var(--nudge-2)", "var(--nudge-1)"];

export function Profesi() {
  return (
    <section
      id="profesi"
      className="lapis-kertas mx-auto max-w-[var(--shell)] px-6 pt-24 pb-24 md:px-10 md:pt-36 md:pb-40"
      style={{ "--lapis": "var(--ground-sunk)" } as CSSProperties}
    >
      <Reveal>
        <h2 className="d-1 max-w-[14ch]">Yang saya kerjakan</h2>
      </Reveal>

      <div className="mt-16 md:mt-24">
        {profil.profesi.map((item, i) => (
          <Reveal key={item.peran} delay={i * 80}>
            <article
              className="border-t border-line pt-8 pb-10 md:pt-10 md:pb-14"
              style={{ marginLeft: takik[i % takik.length] }}
            >
              <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5">
                  <h3 className="d-2">{item.peran}</h3>
                  <p className="d-3 mt-3 text-ink-muted">{item.ringkas}</p>
                </div>
                <p className="prose-body text-ink-body md:col-span-6 md:col-start-7">
                  {item.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
