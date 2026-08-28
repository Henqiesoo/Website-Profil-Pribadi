import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";

import { profil } from "@/content/profil";

const ikon = {
  YouTube: YoutubeLogoIcon,
  TikTok: TiktokLogoIcon,
  Instagram: InstagramLogoIcon,
} as const;

export function Cerita() {
  const { cerita } = profil;
  const kanal = cerita.kanal.filter((k) => k.url.length > 0);

  return (
    <section id="cerita" className="bg-block text-block-ink">
      <div className="mx-auto max-w-[var(--shell)] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="display-md text-block-ink">{cerita.judul}</h2>
          </div>

          <div className="space-y-6 md:col-span-5 md:col-start-8">
            {cerita.paragraf.map((p) => (
              <p key={p} className="prose-body text-block-muted">
                {p}
              </p>
            ))}

            {kanal.length === 0 ? (
              <p className="border-t border-block-line pt-6 text-[0.9375rem] leading-relaxed text-block-muted">
                Link kanal sedang disiapkan. Sementara ini silakan hubungi lewat
                email di bawah.
              </p>
            ) : null}
          </div>
        </div>

        {kanal.length > 0 ? (
          <ul className="mt-16 border-t border-block-line md:mt-24">
            {kanal.map((k) => {
              const Ikon = ikon[k.nama as keyof typeof ikon];
              return (
                <li key={k.nama} className="border-b border-block-line">
                  <a
                    href={k.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-5 py-6 transition-[padding-left,color] duration-300 [transition-timing-function:var(--ease-out)] hover:pl-3 md:py-7"
                  >
                    {Ikon ? (
                      <Ikon
                        size={26}
                        weight="regular"
                        className="shrink-0 text-block-muted transition-colors duration-300 [transition-timing-function:var(--ease-out)] group-hover:text-block-ink"
                      />
                    ) : null}
                    <span className="display-sm text-block-ink">{k.nama}</span>
                    <span className="text-[0.9375rem] text-block-muted">
                      {k.handle}
                    </span>
                    <ArrowUpRightIcon
                      size={20}
                      weight="regular"
                      aria-hidden
                      className="ml-auto shrink-0 text-block-muted transition-[color,transform] duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-block-ink"
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
