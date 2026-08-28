import Image from "next/image";

const RASIO = 1116 / 394;

type Props = {
  /** `auto` mengikuti mode warna; `terang` selalu versi terang untuk blok gelap. */
  nada?: "auto" | "terang";
  /** Lebar tampil dalam piksel CSS. */
  lebar: number;
  /** Diisi kalau logo ini jadi satu-satunya nama dari sebuah tautan. */
  label?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Wordmark HENQIESOO. Kedua berkas dipasang sekaligus lalu dipilih lewat
 * media query warna, jadi tidak ada kedipan saat halaman dimuat. Gambarnya
 * sendiri selalu `alt=""` supaya pembaca layar tidak menyebut logo dua kali;
 * namanya dibawa oleh `label`.
 */
export function Logo({ nada = "auto", lebar, label, className = "", priority }: Props) {
  const tinggi = Math.round(lebar / RASIO);
  const umum = { width: lebar, height: tinggi, priority } as const;

  return (
    <span
      className={className}
      style={{ display: "inline-block", width: lebar, lineHeight: 0 }}
    >
      {nada === "terang" ? (
        <Image
          {...umum}
          alt=""
          src="/logo-henqiesoo-terang.png"
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <>
          <Image
            {...umum}
            alt=""
            src="/logo-henqiesoo.png"
            className="logo-gelap"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            {...umum}
            alt=""
            src="/logo-henqiesoo-terang.png"
            className="logo-terang"
            style={{ width: "100%", height: "auto" }}
          />
        </>
      )}
      {label ? <span className="sr-only">{label}</span> : null}
    </span>
  );
}
