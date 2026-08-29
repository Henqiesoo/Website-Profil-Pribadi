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
2. **Kontak.** Di bagian `kontak`: `email`, lalu `whatsapp` dan `toko` yang
   masing-masing punya `tampil` (teks yang terlihat) dan `url`. Untuk WhatsApp
   pakai format `https://wa.me/628...`. Baris yang `url`-nya dikosongkan tidak
   ditampilkan.
3. **Mengajar.** `mengajar` berisi satu foto utama lebar dan tiga foto
   pendamping. Tata letaknya sengaja lurus dan diam, beda dari kolase
   "Sehari-hari" yang miring dan hanyut, karena ini bukti kerja bukan hiasan.

4. **Jasa.** `jasa` berisi paket, harga, tempo, dan isi tiap paket, ditambah
   `portofolio` (contoh kerja), blok kelas privat, dan tiga janji kerja. Nomor
   WA di bagian ini nomor usaha, sengaja dipisah dari nomor pribadi di
   `kontak`.

   Untuk menambah contoh kerja, potong dulu tangkapan layarnya sampai bersih
   dari status bar HP, taskbar, dan badge alat bantu. Yang boleh terlihat cuma
   situsnya.

5. **Pita berjalan.** `sorot` berisi daftar kata yang lewat di bawah hero.

6. **Kolase musik.** `musik.foto` berisi kartu-kartunya. `lebar` itu lebar
   kartu di layar lebar, `putar` kemiringannya, `turun` seberapa jauh kartu
   digeser ke bawah supaya barisnya tidak rata. `w` dan `h` harus sama dengan
   ukuran asli berkasnya, dipakai untuk mencegah pergeseran tata letak saat
   gambar dimuat.

7. **Foto potret.** `potret` berisi daftar foto yang tampil bergantian di
   lingkaran hero. Taruh berkasnya di `public/`, lalu tulis path-nya di daftar
   itu. Menambah atau mengurangi foto cukup di daftar ini; tempo pergantiannya
   ikut menyesuaikan sendiri, tidak perlu menyentuh CSS. Kalau daftarnya
   dikosongkan, yang tampil tanda lensa dari logo.

   Supaya pergantiannya tidak terasa melompat, tiap foto perlu dipotong kotak
   dengan wajah pada ukuran dan posisi yang kira-kira sama. Foto yang ada
   sekarang sudah disiapkan begitu.

## Kartu pratinjau

`src/app/opengraph-image.jpg` adalah gambar yang muncul waktu link dibagikan
di WhatsApp atau media sosial. Ukurannya 1200x630. `metadataBase` di
`layout.tsx` diambil dari `VERCEL_PROJECT_PRODUCTION_URL` waktu di-deploy,
atau dari `NEXT_PUBLIC_SITE_URL` kalau mau dipaksa ke domain sendiri.

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
  Satu warna aksen saja, di atas kertas putih hangat.
- Halaman ini sengaja satu nada: terang. Mode gelapnya dilepas karena
  membuat halaman jadi bidang hitam yang datar, tanpa pemisah antar bagian.
  `color-scheme: light` memberi tahu browser supaya permukaan bawaannya
  ikut terang.
- Tepi kiri sengaja bertangga. Nilainya cuma tiga (`--nudge-1/2/3`) dan dipakai
  berulang, supaya ketidaksejajarannya terbaca sebagai irama, bukan kecelakaan.
- Judul dibuat jauh lebih besar dari body, sekitar 10:1 di desktop. Huruf
  tampilan Archivo (sumbu lebar dipakai), huruf isi Geist.
- Gerakan yang ada semuanya satu gagasan: halaman ini berlaku seperti kamera.
  Zoom, panning, parallax, dan lembar kontak foto. Bukan kumpulan efek lepas.
- Pita berjalan di bawah hero, berisi mata pelajaran dan bidang yang diajarkan.
- Nama di hero mengecil mengikuti gulir, seperti lensa yang menarik fokus.
- Kolase "Musik" hanyut pelan dengan tempo berbeda-beda tiap kartu, dan
  bergeser mengikuti gulir pada kecepatan berbeda supaya terasa berlapis.
  Tempo hanyutnya tidak berkelipatan, jadi kartunya tidak pernah kembali
  serentak dan gerakannya terbaca acak.
- Gerak berbasis gulir dibungkus `@supports`. Browser yang belum mendukung
  `animation-timeline` menampilkan halaman diam, bukan halaman rusak.
- Gerakan di lingkaran potret:
  - Cincin bezel di sekelilingnya berputar 360 derajat tiap 20 detik,
    sementara isinya diam, jadi wajah tidak pernah terbalik. Titik REC
    menumpang di cincin itu supaya putarannya kelihatan; cincin bundar yang
    simetris sempurna akan terlihat diam walau sedang berputar.
  - Fotonya berganti sendiri, satu foto 4,5 detik lalu larut 1,1 detik ke
    foto berikutnya.
- Foto orang lain, terutama murid yang masih di bawah umur, tidak dipasang
  tanpa izin tertulis dari orang tuanya.
- Semua teks lolos kontras WCAG AA.
- Semua animasi mati kalau pengunjung mengaktifkan `prefers-reduced-motion`.

## Deploy

Repo ini siap dipasang di Vercel tanpa konfigurasi tambahan: hubungkan repo,
pilih framework Next.js, lalu deploy. Perintah build-nya `npm run build`.
