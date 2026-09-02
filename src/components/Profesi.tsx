import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";

/** Tiap baris masuk sejauh takik yang berbeda, jadi tepi kirinya bergerigi. */
const takik = ["0rem", "var(--nudge-1)", "var(--nudge-2)", "var(--nudge-1)"];

export function Profesi() {
  return (
    <section
      id="profesi"
      className="mx-auto max-w-[var(--shell)] px-6 pt-24 pb-24 md:px-10 md:pt-36 md:pb-40"
    >
      <div className="md:grid md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <div className="judul-menempel">
              <span className="penanda">01 / 06</span>
              <h2 className="d-1 mt-6 max-w-[11ch]">Yang saya kerjakan</h2>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 md:col-span-8 md:mt-0">
        {profil.profesi.map((item, i) => (
          <Reveal key={item.peran} delay={i * 80}>
            <article
              className="border-t border-line pt-8 pb-10 md:pt-10 md:pb-14"
              style={{ marginLeft: takik[i % takik.length] }}
            >
              <div className="grid gap-4">
                <div>
                  <h3 className="d-2">{item.peran}</h3>
                  <p className="d-3 mt-3 text-ink-muted">{item.ringkas}</p>
                </div>
                <p className="prose-body mt-3 text-ink-body">
                  {item.detail}
                </p>
              </div>
            </article>
          </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
