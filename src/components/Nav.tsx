import { profil } from "@/content/profil";
import { Logo } from "./Logo";
import { Tombol } from "./Tautan";

const tautan = [
  { label: "Profesi", href: "#profesi" },
  { label: "Jasa", href: "#jasa" },
  { label: "Cerita", href: "#cerita" },
  { label: "Kontak", href: "#kontak" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-[72px] max-w-[var(--shell)] items-center justify-between gap-6 px-6 md:px-10"
      >
        <a href="#atas" className="shrink-0">
          <Logo lebar={168} label={profil.brand} priority />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {tautan.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="meta transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
          <Tombol href="#kontak" className="h-10 px-5">
            Hubungi saya
          </Tombol>
        </div>
      </nav>
    </header>
  );
}
