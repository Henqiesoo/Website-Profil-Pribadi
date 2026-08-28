import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";
import { Tombol } from "./Tautan";

export function Jasa() {
  const { jasa } = profil;

  return (
    <section
      id="jasa"
      className="mx-auto max-w-[var(--shell)] px-6 pb-24 md:px-10 md:pb-40"
    >
      <Reveal>
        <div style={{ marginLeft: "var(--nudge-1)" }}>
          <h2 className="d-1">{jasa.judul}</h2>
          <p className="prose-body mt-5 text-ink-muted">{jasa.catatan}</p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-8">
        {jasa.paket.map((p, i) => (
          <Reveal key={p.nama} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col rounded-brand border border-line bg-ground-sunk p-7 md:p-9">
              <h3 className="d-2">{p.nama}</h3>
              <p className="d-2 mt-5 text-accent">{p.harga}</p>
              <p className="meta mt-3">{p.tempo}</p>

              <ul className="mt-8 border-t border-line">
                {p.isi.map((x) => (
                  <li
                    key={x}
                    className="border-b border-line py-3.5 text-[0.9375rem] text-ink-body"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div
          className="mt-12 border-t border-line pt-8 md:mt-16"
          style={{ marginLeft: "var(--nudge-2)" }}
        >
          <h3 className="d-2">{jasa.kelas.nama}</h3>
          <p className="prose-body mt-4 text-ink-body">{jasa.kelas.isi}</p>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <ul className="mt-14 md:mt-20">
          {jasa.janji.map((j) => (
            <li
              key={j}
              className="border-t border-line py-5 text-[0.9375rem] text-ink-muted md:py-6"
            >
              {j}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={280}>
        <div className="mt-12">
          <Tombol href={jasa.wa.url} target="_blank" rel="noreferrer noopener">
            <span className="inline-flex items-center gap-2">
              <WhatsappLogoIcon size={20} weight="regular" aria-hidden />
              Tanya jasa {jasa.wa.tampil}
            </span>
          </Tombol>
        </div>
      </Reveal>
    </section>
  );
}
