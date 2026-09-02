import {
  ArrowUpRightIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";
import { Logo } from "./Logo";

const ikon = {
  YouTube: YoutubeLogoIcon,
  TikTok: TiktokLogoIcon,
  Instagram: InstagramLogoIcon,
  Facebook: FacebookLogoIcon,
} as const;

export function Cerita() {
  const { cerita } = profil;
  const kanal = cerita.kanal.filter((k) => k.url.length > 0);

  return (
    <section id="cerita" className="bg-deep text-deep-ink">
      <div className="mx-auto max-w-[var(--shell)] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6" style={{ marginLeft: "var(--nudge-1)" }}>
            <span className="penanda">04 / 06</span>
            <h2 className="mt-6">
              <Logo nada="terang" lebar={320} className="max-w-full" label="HENQIESOO" />
              <span className="d-1 mt-5 block text-deep-ink">Storytelling</span>
            </h2>
          </div>

          <div className="space-y-6 md:col-span-5 md:col-start-8">
            {cerita.paragraf.map((p) => (
              <p key={p} className="prose-body text-deep-body">
                {p}
              </p>
            ))}

            {kanal.length === 0 ? (
              <p className="border-t border-deep-line pt-6 text-[0.9375rem] leading-relaxed text-deep-body">
                Link kanal sedang disiapkan. Sementara ini silakan hubungi lewat
                email di bawah.
              </p>
            ) : null}
          </div>
        </div>

        {kanal.length > 0 ? (
          <ul
            className="mt-20 border-t border-deep-line md:mt-28"
            style={{ marginLeft: "var(--nudge-2)" }}
          >
            {kanal.map((k) => {
              const Ikon = ikon[k.nama as keyof typeof ikon];
              return (
                <li key={k.nama} className="border-b border-deep-line">
                  <a
                    href={k.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-5 py-6 transition-[padding-left] duration-300 [transition-timing-function:var(--ease-out)] hover:pl-4 md:py-8"
                  >
                    {Ikon ? (
                      <Ikon
                        size={28}
                        weight="regular"
                        className="shrink-0 text-deep-body transition-colors duration-300 [transition-timing-function:var(--ease-out)] group-hover:text-deep-accent"
                      />
                    ) : null}
                    <span className="d-2 text-deep-ink">{k.nama}</span>
                    <span className="meta text-deep-body">{k.handle}</span>
                    <ArrowUpRightIcon
                      size={22}
                      weight="regular"
                      aria-hidden
                      className="ml-auto shrink-0 text-deep-body transition-[color,transform] duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-deep-accent"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
