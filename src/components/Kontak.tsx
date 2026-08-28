import { StorefrontIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";
import { TautanTeks } from "./Tautan";

export function Kontak() {
  const { kontak } = profil;

  // Baris yang `url`-nya kosong tidak ikut ditampilkan.
  const tautan = [
    {
      kunci: "whatsapp",
      Ikon: WhatsappLogoIcon,
      label: `WhatsApp ${kontak.whatsapp.tampil}`,
      href: kontak.whatsapp.url,
    },
    {
      kunci: "toko",
      Ikon: StorefrontIcon,
      label: kontak.toko.tampil,
      href: kontak.toko.url,
    },
  ].filter((t) => t.href.length > 0);

  return (
    <section
      id="kontak"
      className="mx-auto max-w-[var(--shell)] px-6 py-24 md:px-10 md:py-40"
    >
      <Reveal>
        <h2 className="d-1 max-w-[18ch]">{kontak.judul}</h2>
      </Reveal>

      {/* Alamat surel didorong jauh ke kanan; ruang kosong di kirinya
          yang membuat baris ini terbaca lebih dulu daripada ukurannya saja. */}
      <Reveal delay={90} className="md:[margin-left:var(--nudge-3)]">
        <a
          href={`mailto:${kontak.email}`}
          className="group mt-14 inline-block max-w-full text-ink transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent md:mt-20"
        >
          <span className="d-email break-words">{kontak.email}</span>
          <span
            aria-hidden
            className="mt-4 block h-px w-full origin-left scale-x-100 bg-line-strong transition-[transform,background-color] duration-500 [transition-timing-function:var(--ease-out)] group-hover:bg-accent"
          />
        </a>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
          <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {kontak.catatan}
          </p>

          {tautan.length > 0 ? (
            <ul className="flex shrink-0 flex-col items-start gap-3">
              {tautan.map(({ kunci, Ikon, label, href }) => (
                <li key={kunci}>
                  <TautanTeks
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[0.9375rem] whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Ikon size={20} weight="regular" aria-hidden />
                      {label}
                    </span>
                  </TautanTeks>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
