/**
 * Satu-satunya tempat untuk mengubah isi website.
 * Ganti nilai di bawah ini, tidak perlu menyentuh file lain.
 */

export const profil = {
  nama: "Hengky",
  brand: "Henqiesoo",

  hero: {
    baris1: "Hengky",
    baris2: ["Guru.", "Musisi.", "Pencerita."],
    ringkasan:
      "Mengajar di dua SMK, membuka kelas musik privat, menyiapkan kelas teologi, dan menuliskan kisah nyata orang biasa.",
  },

  /**
   * Foto untuk lingkaran di hero. Isinya berganti sendiri, satu foto
   * tampil 4,5 detik lalu larut ke foto berikutnya.
   *
   * Menambah atau mengurangi foto cukup di daftar ini, temponya ikut
   * menyesuaikan sendiri. Taruh berkasnya di folder `public/`.
   * Kalau daftarnya dikosongkan, yang tampil tanda lensa dari logo.
   *
   * Supaya pergantiannya halus, semua foto sudah dipotong kotak dengan
   * wajah pada ukuran dan posisi yang sama.
   */
  potret: [
    "/potret-1.jpg",
    "/potret-2.jpg",
    "/potret-3.jpg",
    "/potret-4.jpg",
    "/potret-5.jpg",
  ] as string[],
  potretAlt: "Hengky",

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
    whatsapp: {
      tampil: "0818 0827 4941",
      url: "https://wa.me/6281808274941",
    },
  },
} as const;

export type Kanal = (typeof profil.cerita.kanal)[number];
