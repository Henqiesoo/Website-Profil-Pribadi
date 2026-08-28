import { EnvelopeSimpleIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";
import { TautanTeks } from "./Tautan";

export function Kontak() {
  const { kontak } = profil;

  return (
    <section
      id="kontak"
      className="mx-auto max-w-[var(--shell)] px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <h2 className="display-md max-w-[22ch]">{kontak.judul}</h2>
      </Reveal>

      <Reveal delay={80}>
        <a
          href={`mailto:${kontak.email}`}
          className="group mt-12 flex items-baseline gap-4 text-ink transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent md:mt-16"
        >
          <EnvelopeSimpleIcon
            size={28}
            weight="regular"
            aria-hidden
            className="hidden shrink-0 translate-y-1 text-ink-muted transition-colors duration-200 [transition-timing-function:var(--ease-out)] group-hover:text-accent sm:block"
          />
          <span className="text-[clamp(1.375rem,4.4vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.035em] break-all">
            {kontak.email}
          </span>
        </a>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-start md:justify-between md:gap-16">
          <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {kontak.catatan}
          </p>

          {kontak.whatsapp.url ? (
            <TautanTeks
              href={kontak.whatsapp.url}
              target="_blank"
              rel="noreferrer noopener"
              className="shrink-0 text-[0.9375rem] whitespace-nowrap"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsappLogoIcon size={20} weight="regular" aria-hidden />
                WhatsApp {kontak.whatsapp.tampil}
              </span>
            </TautanTeks>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
