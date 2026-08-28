import Image from "next/image";

import { profil } from "@/content/profil";
import { Lensa } from "./Lensa";

/**
 * Potret bulat dengan cincin bezel yang berputar pelan, satu putaran penuh
 * tiap 20 detik. Isinya sendiri diam, jadi foto wajah tidak pernah terbalik.
 *
 * Titik REC menumpang di cincin itu; tanpa penanda, cincin bundar yang
 * simetris sempurna akan terlihat diam walau sedang berputar. Cincin berhenti
 * kalau pengunjung mengaktifkan prefers-reduced-motion.
 */
export function Potret({ className = "" }: { className?: string }) {
  const { potret, potretAlt } = profil;

  return (
    <div className={`relative aspect-square ${className}`}>
      {/* Lapisan diam. */}
      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-lens-ring bg-lens">
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
          <span className="absolute top-1/2 left-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2">
            <Lensa className="block h-full w-full" />
          </span>
        )}
      </div>

      {/* Lapisan yang berputar: cincin bezel dan titiknya saja. */}
      <div className="putar absolute inset-0" aria-hidden>
        <span className="absolute inset-0 rounded-full border border-lens-ring" />
        <span className="absolute top-0 left-1/2 aspect-square w-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
}
