import { profil } from "@/content/profil";

/**
 * Pita berjalan berisi apa yang benar-benar dia ajarkan. Daftarnya ditulis
 * dua kali lalu digeser sejauh separuh lebar, jadi ujungnya menyambung
 * tanpa jeda. Salinan kedua disembunyikan dari pembaca layar.
 */
export function Sorot() {
  const daftar = profil.sorot;

  const isi = (salinan: boolean) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={salinan || undefined}
    >
      {daftar.map((kata) => (
        <li key={kata} className="flex items-center">
          <span className="d-2 px-7 whitespace-nowrap uppercase md:px-10">
            {kata}
          </span>
          <span
            aria-hidden
            className="size-1.5 shrink-0 rounded-full bg-accent"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Yang saya ajarkan"
      className="overflow-hidden border-y border-line py-6 md:py-8"
    >
      <div className="pita flex w-max">
        {isi(false)}
        {isi(true)}
      </div>
    </section>
  );
}
