import { profil } from "@/content/profil";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[var(--shell)] flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <Logo lebar={124} label={profil.brand} />
        <p className="meta">
          {profil.nama} &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
