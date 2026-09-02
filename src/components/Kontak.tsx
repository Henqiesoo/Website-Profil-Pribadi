import {
  EnvelopeSimpleIcon,
  StorefrontIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";
import { TautanTeks } from "./Tautan";

export function Kontak() {
  const { kontak } = profil;

  // WhatsApp yang paling cepat dibalas, jadi nomornya yang dibesarkan.
  // Email dan toko turun jadi baris kecil di bawahnya.
  const tautan = [
    {
      kunci: "email",
      Ikon: EnvelopeSimpleIcon,
      label: kontak.email,
      href: `mailto:${kontak.email}`,
      keluar: false,
    },
    {
      kunci: "toko",
      Ikon: StorefrontIcon,
      label: kontak.toko.tampil,
      href: kontak.toko.url,
      keluar: true,
    },
  ].filter((t) => t.href.length > 0);

  return (
    <section
      id="kontak"
      className="terang mx-auto max-w-[var(--shell)] px-6 py-24 md:px-10 md:py-36"
    >
      <Reveal>
        <span className="penanda">06 / 06</span>
        <h2 className="d-1 mt-6 max-w-[18ch]">{kontak.judul}</h2>
      </Reveal>

      {/* Nomornya didorong jauh ke kanan; ruang kosong di kirinya yang
          membuat baris ini terbaca lebih dulu, bukan ukurannya saja. */}
      <Reveal delay={90} className="md:[margin-left:var(--nudge-3)]">
        <a
          href={kontak.whatsapp.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-14 inline-block max-w-full text-ink transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent md:mt-20"
        >
          <span className="meta flex items-center gap-2 text-accent">
            <WhatsappLogoIcon size={16} weight="regular" aria-hidden />
            WhatsApp
          </span>
          <span className="d-email mt-3 block break-words">
            {kontak.whatsapp.tampil}
          </span>
          <span
            aria-hidden
            className="mt-4 block h-px w-full origin-left bg-line-strong transition-colors duration-500 [transition-timing-function:var(--ease-out)] group-hover:bg-accent"
          />
        </a>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
          <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {kontak.catatan}
          </p>

          <ul className="flex shrink-0 flex-col items-start gap-3">
            {tautan.map(({ kunci, Ikon, label, href, keluar }) => (
              <li key={kunci}>
                <TautanTeks
                  href={href}
                  {...(keluar
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="text-[0.9375rem] break-all"
                >
                  <span className="inline-flex items-center gap-2">
                    <Ikon size={20} weight="regular" aria-hidden />
                    {label}
                  </span>
                </TautanTeks>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
