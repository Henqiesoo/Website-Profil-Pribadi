import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import { profil } from "@/content/profil";
import "./globals.css";

/** Huruf tampilan: grotesk yang bisa dilebarkan, dipakai besar-besar. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const deskripsi =
  "Hengky (Henqiesoo). Guru SMK, kandidat dosen teologi, guru musik privat, dan pencerita kisah nyata.";

export const metadata: Metadata = {
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
    <html lang="id" className={`${GeistSans.variable} ${archivo.variable}`}>
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
