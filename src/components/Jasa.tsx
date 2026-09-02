import type { CSSProperties } from "react";
import Image from "next/image";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";
import { Tombol } from "./Tautan";

export function Jasa() {
  const { jasa } = profil;

  return (
    <section
      id="jasa"
      className="lapis-kertas mx-auto max-w-[var(--shell)] px-6 pt-28 pb-28 md:px-10 md:pt-44 md:pb-44"
      style={{ "--lapis": "var(--ground-sunk)" } as CSSProperties}
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
            <article className="angkat flex h-full flex-col rounded-[16px] bg-ground-warm p-7 shadow-kartu md:p-9">
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

      {/* Bukti kerja ditaruh tepat setelah harga: harga dulu, lalu buktinya.
          Barisnya berselang-seling supaya tidak terbaca seperti tabel. */}
      <div className="mt-20 md:mt-28">
        <Reveal>
          <h3 className="d-2" style={{ marginLeft: "var(--nudge-1)" }}>
            {jasa.portofolio.judul}
          </h3>
        </Reveal>

        {jasa.portofolio.proyek.map((p, i) => (
          <Reveal key={p.src} delay={i * 90}>
            <article className="mt-10 grid items-center gap-6 border-t border-line pt-10 md:mt-14 md:grid-cols-12 md:gap-10 md:pt-14">
              <figure
                className={`angkat overflow-hidden rounded-[16px] bg-ground-sunk shadow-kartu md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2 md:col-start-6" : ""
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </figure>
              <div
                className={`md:col-span-4 ${
                  i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-9"
                }`}
              >
                <h4 className="d-3">{p.nama}</h4>
                <p className="meta mt-2">{p.jenis}</p>
                <p className="prose-body mt-4 text-ink-body">{p.isi}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div
          className="mt-16 border-t border-line pt-8 md:mt-24"
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
