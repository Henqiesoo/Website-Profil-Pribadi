import { profil } from "@/content/profil";
import { Potret } from "./Potret";
import { Tombol } from "./Tautan";

/**
 * Tepi kiri sengaja bertangga: nama menempel garis grid, baris di bawahnya
 * masuk satu takik, paragraf dan tombol masuk dua takik. Potret bulat
 * diletakkan di luar sumbu itu, menimpa ruang kanan.
 */
export function Hero() {
  const { hero } = profil;

  return (
    <section
      id="atas"
      className="relative mx-auto max-w-[var(--shell)] px-6 pt-12 pb-24 md:px-10 md:pt-20 md:pb-40"
    >
      {/* Di layar kecil potret naik ke atas dan menabrak tepi kanan. */}
      <div className="rise mb-10 -mr-10 ml-auto w-[9.5rem] md:hidden">
        <Potret />
      </div>

      <div className="relative">
        {/* Dua lapisan: yang luar mengecil mengikuti gulir, yang dalam
            memainkan animasi masuk. Ditumpuk di satu elemen, keduanya
            sama-sama memakai properti `animation` dan saling menghapus. */}
        <div className="zoom-keluar">
          <h1 className="rise d-hero uppercase" style={{ animationDelay: "60ms" }}>
            {hero.baris1}
          </h1>
        </div>

        <p
          className="rise d-1 mt-4 text-ink-muted"
          style={{ marginLeft: "var(--nudge-1)", animationDelay: "150ms" }}
        >
          {hero.baris2.map((kata) => (
            <span key={kata} className="mr-[0.35em] inline-block">
              {kata}
            </span>
          ))}
        </p>

        <p
          className="rise lede mt-10 text-ink-body"
          style={{ marginLeft: "var(--nudge-2)", animationDelay: "240ms" }}
        >
          {hero.ringkasan}
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center gap-3"
          style={{ marginLeft: "var(--nudge-2)", animationDelay: "320ms" }}
        >
          <Tombol href="#kontak">Hubungi saya</Tombol>
          <Tombol nada="garis" href="#cerita">
            Lihat kanal cerita
          </Tombol>
        </div>
      </div>

      <div className="rise pointer-events-none absolute top-[14%] -right-6 hidden w-[clamp(12rem,22vw,18rem)] md:block lg:-right-12">
        <Potret />
      </div>
    </section>
  );
}
