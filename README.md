# Website profil Hengky (Henqiesoo)

Website profil satu halaman: perkenalan singkat, ringkasan profesi, kanal konten,
dan cara kontak. Dibuat dengan Next.js dan Tailwind CSS.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Mengubah isi website

Semua teks, link, dan kontak ada di satu file:

```
src/content/profil.ts
```

Ubah file itu saja, tidak perlu menyentuh file lain. Yang perlu diisi:

1. **Link kanal konten.** Di bagian `cerita.kanal`, isi `url` masing-masing kanal.
   Kanal yang `url`-nya masih kosong tidak ditampilkan, dan kalau semuanya kosong
   halaman menampilkan catatan singkat sebagai gantinya.
2. **Email dan WhatsApp.** Di bagian `kontak`. Untuk WhatsApp, isi `tampil`
   (nomor yang terlihat) dan `url` (format `https://wa.me/628...`). Kalau `url`
   dikosongkan, baris WhatsApp tidak muncul.
3. **Foto potret.** `potret` berisi daftar foto yang tampil bergantian di
   lingkaran hero. Taruh berkasnya di `public/`, lalu tulis path-nya di daftar
   itu. Menambah atau mengurangi foto cukup di daftar ini; tempo pergantiannya
   ikut menyesuaikan sendiri, tidak perlu menyentuh CSS. Kalau daftarnya
   dikosongkan, yang tampil tanda lensa dari logo.

   Supaya pergantiannya tidak terasa melompat, tiap foto perlu dipotong kotak
   dengan wajah pada ukuran dan posisi yang kira-kira sama. Foto yang ada
   sekarang sudah disiapkan begitu.

## Berkas logo

| Berkas | Dipakai di |
| --- | --- |
| `public/logo-henqiesoo.png` | latar terang (tinta gelap asli) |
| `public/logo-henqiesoo-terang.png` | latar gelap (tinta diterangkan, merah tetap) |
| `src/app/icon.png` | favicon, dari tanda lensa di atas navy |

Keduanya transparan. Komponen `Logo` memasang dua-duanya lalu memilih lewat
media query warna, jadi tidak ada kedipan saat halaman dimuat. Untuk blok gelap
`Storytelling`, versi terang dipakai paksa lewat `nada="terang"`.

Tanda lensa juga ada sebagai vektor di `src/components/Lensa.tsx` supaya tetap
tajam di ukuran besar.

## Catatan desain

Arahnya jendela bidik, diambil dari bingkai REC di logo sendiri.

- Warna diambil dari logo: navy bingkai, arang wordmark, merah tanda lensa.
  Satu warna aksen saja.
- Tepi kiri sengaja bertangga. Nilainya cuma tiga (`--nudge-1/2/3`) dan dipakai
  berulang, supaya ketidaksejajarannya terbaca sebagai irama, bukan kecelakaan.
- Judul dibuat jauh lebih besar dari body, sekitar 10:1 di desktop. Huruf
  tampilan Archivo (sumbu lebar dipakai), huruf isi Geist.
- Gerakan dipusatkan di satu tempat, yaitu lingkaran potret:
  - Cincin bezel di sekelilingnya berputar 360 derajat tiap 20 detik,
    sementara isinya diam, jadi wajah tidak pernah terbalik. Titik REC
    menumpang di cincin itu supaya putarannya kelihatan; cincin bundar yang
    simetris sempurna akan terlihat diam walau sedang berputar.
  - Fotonya berganti sendiri, satu foto 4,5 detik lalu larut 1,1 detik ke
    foto berikutnya.
- Mode terang dan gelap mengikuti setelan sistem, keduanya lolos kontras
  WCAG AA pada semua teks yang diperiksa.
- Semua animasi mati kalau pengunjung mengaktifkan `prefers-reduced-motion`.

## Deploy

Repo ini siap dipasang di Vercel tanpa konfigurasi tambahan: hubungkan repo,
pilih framework Next.js, lalu deploy. Perintah build-nya `npm run build`.
