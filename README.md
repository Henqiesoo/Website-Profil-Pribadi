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
3. **Foto potret.** Taruh file foto di folder `public/`, lalu isi `potret`
   dengan path-nya, misalnya `"/potret.jpg"`. Selama masih `null`, yang tampil
   adalah blok monogram huruf H.

## Catatan desain

- Palet: kertas bone dengan tinta hijau hutan. Satu warna aksen saja.
- Mode terang dan gelap mengikuti setelan sistem pengunjung, keduanya sudah dicek.
- Radius sudut 4px dipakai konsisten di semua elemen.
- Animasi dibatasi pada masuknya konten saat di-scroll dan umpan balik tombol,
  dan mati sepenuhnya kalau pengunjung mengaktifkan `prefers-reduced-motion`.

## Deploy

Repo ini siap dipasang di Vercel tanpa konfigurasi tambahan: hubungkan repo,
pilih framework Next.js, lalu deploy. Perintah build-nya `npm run build`.
