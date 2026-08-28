import type { CSSProperties } from "react";
import Image from "next/image";

import { profil } from "@/content/profil";
import { Lensa } from "./Lensa";

/** Detik satu foto tampil penuh, dan detik silih gantinya. */
const SLOT = 4.5;
const LARUT = 1.1;

/**
 * Potret bulat dengan cincin bezel yang berputar pelan, satu putaran penuh
 * tiap 20 detik. Isinya diam, jadi wajah tidak pernah terbalik.
 *
 * Foto di dalamnya berganti sendiri: satu foto tampil 4,5 detik lalu larut
 * ke berikutnya. Tempo dan keyframe-nya dihitung dari jumlah foto, jadi
 * menambah atau mengurangi foto di profil.ts tidak perlu menyentuh CSS.
 *
 * Titik REC menumpang di cincin; tanpa penanda, cincin bundar yang simetris
 * sempurna akan terlihat diam walau sedang berputar. Semua gerakan berhenti
 * kalau pengunjung mengaktifkan prefers-reduced-motion.
 */
export function Potret({ className = "" }: { className?: string }) {
  const { potret, potretAlt } = profil;
  const jumlah = potret.length;
  const berganti = jumlah > 1;

  const siklus = jumlah * SLOT;
  const titik = (detik: number) => `${((detik / siklus) * 100).toFixed(3)}%`;
  const keyframes =
    `@keyframes salindia{0%{opacity:0}${titik(LARUT)}{opacity:1}` +
    `${titik(SLOT)}{opacity:1}${titik(SLOT + LARUT)}{opacity:0}100%{opacity:0}}`;

  return (
    <div className={`relative aspect-square ${className}`}>
      {/* Lapisan diam. */}
      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-lens-ring bg-lens">
        {jumlah > 0 ? (
          <>
            {berganti ? <style>{keyframes}</style> : null}
            {potret.map((src, i) => (
              <Image
                key={src}
                src={src}
                /* Hanya foto pertama yang bernama; sisanya orang yang sama,
                   dan pembaca layar tidak perlu mendengarnya berulang. */
                alt={i === 0 ? potretAlt : ""}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 26vw, 60vw"
                className={`object-cover${berganti ? " salindia" : ""}`}
                style={
                  berganti
                    ? ({
                        animationDuration: `${siklus}s`,
                        animationDelay: `${(i * SLOT - LARUT).toFixed(2)}s`,
                      } as CSSProperties)
                    : undefined
                }
              />
            ))}
          </>
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
