import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import { profil } from "@/content/profil";
import "./globals.css";

/** Huruf isi: serif teks. Dipakai untuk paragraf dan judul bagian, supaya
 *  halaman terbaca seperti terbitan, bukan seperti dasbor aplikasi. */
const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

/** Huruf tampilan: grotesk yang bisa dilebarkan. Sekarang tinggal dipakai
 *  untuk nama besar di hero, nav, tombol, dan label kecil. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const deskripsi =
  "Hengky (Henqiesoo). Guru SMK, kandidat dosen teologi, guru musik privat, dan pengajaran lewat kisah nyata.";

/** Dipakai untuk menyusun URL mutlak pada kartu pratinjau. Di Vercel
 *  diisi otomatis; saat dijalankan lokal jatuh ke localhost. */
const asal =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(asal),
  title: `${profil.nama} (${profil.brand})`,
  description: deskripsi,
  openGraph: {
    title: `${profil.nama} (${profil.brand})`,
    description: deskripsi,
    type: "profile",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${archivo.variable} ${serif.variable}`}>
      <body>
        {/* Tanpa JavaScript, isi halaman tetap terbaca penuh. */}
        <noscript>
          <style>{".reveal,.rise{opacity:1;transform:none;animation:none}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
