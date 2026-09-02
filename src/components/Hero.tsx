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
      className="relative mx-auto flex min-h-[78svh] max-w-[var(--shell)] flex-col justify-center px-6 pt-10 pb-20 md:px-10 md:pt-16 md:pb-28"
    >
      {/* Di layar kecil potret naik ke atas. Margin negatifnya dibuat persis
          sebesar padding section supaya lingkarannya mencium tepi layar,
          bukan melewatinya dan membuat halaman bisa digeser mendatar. */}
      <div className="rise mb-10 -mr-6 ml-auto w-[9.5rem] md:hidden">
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

        {/* Dibatasi lebarnya di layar besar supaya baris ini berhenti
            sebelum lingkaran potret, bukan tersapu di belakangnya. */}
        <p
          className="rise d-1 mt-4 text-ink-muted md:max-w-[60%] lg:max-w-[58%]"
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

      {/* right-0 akan menempel ke tepi border section, bukan tepi isinya,
          sehingga titik REC yang mengorbit terpotong layar. Jaraknya
          disamakan dengan padding section. */}
      <div className="rise pointer-events-none absolute top-1/2 right-6 hidden w-[clamp(13rem,24vw,19rem)] -translate-y-1/2 md:right-10 md:block lg:right-16">
        <Potret />
      </div>
    </section>
  );
}
