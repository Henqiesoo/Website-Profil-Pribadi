import { profil } from "@/content/profil";
import { Tombol } from "./Tautan";

const tautan = [
  { label: "Profesi", href: "#profesi" },
  { label: "Cerita", href: "#cerita" },
  { label: "Kontak", href: "#kontak" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-[68px] max-w-[var(--shell)] items-center justify-between gap-6 px-6 md:px-10"
      >
        <a
          href="#atas"
          className="text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent"
        >
          {profil.brand}
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {tautan.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="text-[0.9375rem] text-ink-body transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
          <Tombol href="#kontak" className="h-10 px-4">
            Hubungi saya
          </Tombol>
        </div>
      </nav>
    </header>
  );
}
