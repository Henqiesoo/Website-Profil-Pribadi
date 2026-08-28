/**
 * Satu-satunya tempat untuk mengubah isi website.
 * Ganti nilai di bawah ini, tidak perlu menyentuh file lain.
 */

export const profil = {
  nama: "Hengky",
  brand: "Henqiesoo",

  hero: {
    baris1: "Hengky",
    baris2: "Guru, musisi, pencerita.",
    ringkasan:
      "Mengajar di dua SMK, membuka kelas musik privat, menyiapkan kelas teologi, dan menuliskan kisah nyata orang biasa.",
  },

  /**
   * Foto potret untuk bagian hero.
   * Taruh file foto di folder `public/`, lalu isi path-nya di sini,
   * contoh: "/potret.jpg". Biarkan null kalau belum ada foto,
   * nanti tampil monogram huruf H sebagai gantinya.
   */
  potret: null as string | null,
  potretAlt: "Foto Hengky",

  profesi: [
    {
      peran: "Guru SMK",
      ringkas: "Mengajar di dua sekolah menengah kejuruan.",
      detail:
        "PJOK, Seni Musik, Pendidikan Agama Kristen, dan Prakarya & Kewirausahaan. Empat mata pelajaran yang berbeda jauh satu sama lain, dan justru di situ menariknya.",
    },
    {
      peran: "Teologi",
      ringkas: "Kandidat dosen STT Berea, mahasiswa STT Apollos.",
      detail:
        "Sedang menempuh studi lanjut sambil menyiapkan diri untuk mengajar di ruang kuliah. Belajar dan mengajar berjalan bersamaan.",
    },
    {
      peran: "Guru musik privat",
      ringkas: "Piano dan gitar, kelas satu per satu.",
      detail:
        "Materi disusun mengikuti murid, bukan sebaliknya. Terbuka untuk pemula yang belum pernah menyentuh alat musik sampai yang sudah main bertahun-tahun.",
    },
    {
      peran: "Content creator",
      ringkas: "HENQIESOO Storytelling.",
      detail:
        "Menceritakan ulang kisah nyata: yang dialami sendiri, yang didengar dari orang lain, yang biasanya lewat begitu saja tanpa sempat diceritakan.",
    },
  ],

  cerita: {
    judul: "HENQIESOO Storytelling",
    paragraf: [
      "Kisah nyata, diceritakan pelan-pelan. Bukan berita, bukan dramatisasi. Cerita orang biasa yang ternyata tidak biasa kalau didengarkan sampai habis.",
      "Kanal ini jalan berdampingan dengan pekerjaan mengajar. Banyak bahan ceritanya datang dari kelas, dari gereja, dan dari orang-orang yang saya temui.",
    ],
    /**
     * Isi `url` dengan link kanal yang sebenarnya.
     * Kanal dengan url kosong ("") tidak akan ditampilkan.
     */
    kanal: [
      { nama: "YouTube", handle: "@henqiesoo", url: "" },
      { nama: "TikTok", handle: "@henqiesoo", url: "" },
      { nama: "Instagram", handle: "@henqiesoo", url: "" },
    ],
  },

  kontak: {
    judul: "Terbuka untuk kelas musik baru, undangan mengajar, dan kerja sama konten.",
    catatan:
      "Email paling cepat dibalas. Untuk kelas privat, sebutkan alat musik dan level murid supaya saya bisa langsung jawab jadwalnya.",
    // Ganti dengan alamat email dan nomor yang mau kamu pakai secara publik.
    email: "hengkypianister@gmail.com",
    whatsapp: { tampil: "", url: "" }, // contoh: { tampil: "0812 3456 7890", url: "https://wa.me/628123456789" }
  },
} as const;

export type Kanal = (typeof profil.cerita.kanal)[number];
