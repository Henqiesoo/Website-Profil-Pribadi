import { profil } from "@/content/profil";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[var(--shell)] flex-col gap-2 px-6 py-10 text-[0.875rem] text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          {profil.nama} <span className="text-line-strong">/</span>{" "}
          {profil.brand}
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
