import Image from "next/image";

import { profil } from "@/content/profil";
import { Lensa } from "./Lensa";

/**
 * Potret bulat yang berputar pelan, satu putaran penuh tiap 20 detik.
 *
 * Selama foto asli belum ada, isinya tanda lensa dari logo ditambah satu
 * titik REC yang mengorbit. Titik itu yang membuat putarannya kelihatan:
 * cakram yang simetris sempurna akan terlihat diam walau sedang berputar.
 * Semua gerakan berhenti kalau prefers-reduced-motion aktif.
 */
export function Potret({ className = "" }: { className?: string }) {
  const { potret, potretAlt } = profil;

  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="putar absolute inset-0 overflow-hidden rounded-full bg-lens">
        {potret ? (
          <Image
            src={potret}
            alt={potretAlt}
            fill
            priority
            sizes="(min-width: 768px) 26vw, 60vw"
            className="object-cover"
          />
        ) : (
          <>
            <span
              aria-hidden
              className="absolute inset-[11%] rounded-full border border-[rgba(237,240,243,0.22)]"
            />
            <span className="absolute top-1/2 left-1/2 aspect-square w-[54%] -translate-x-1/2 -translate-y-1/2">
              <Lensa className="block h-full w-full" />
            </span>
            <span
              aria-hidden
              className="absolute top-[4.5%] left-1/2 aspect-square w-[5%] -translate-x-1/2 rounded-full bg-accent"
            />
          </>
        )}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border border-lens-ring"
      />
    </div>
  );
}
