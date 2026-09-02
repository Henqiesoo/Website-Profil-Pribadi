import type { Metadata } from "next";
import { Inter_Tight, Roboto_Mono } from "next/font/google";

import { profil } from "@/content/profil";
import "./globals.css";

/** Satu huruf untuk semua tampilan dan isi, satu bobot saja. Hierarki
 *  dipahat lewat ukuran dan rapatnya jarak huruf, bukan lewat tebal. */
const tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-tight",
});

/** Huruf mesin ketik untuk label teknis: nav, penanda bagian, tombol,
 *  dan keterangan kecil. Ini satu-satunya lawan bicara huruf utama. */
const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});

const deskripsi =
  "Hengky (Henqiesoo). Guru SMK, kandidat dosen teologi, guru musik privat, pembuat website, dan pencerita kisah nyata.";

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
    <html lang="id" className={`${tight.variable} ${mono.variable}`}>
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
