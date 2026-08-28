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
        "Main piano, gitar, dan saksofon; yang diajarkan piano dan gitar. Materi disusun mengikuti murid, bukan sebaliknya. Terbuka untuk pemula yang belum pernah menyentuh alat musik sampai yang sudah main bertahun-tahun.",
    },
    {
      peran: "Content creator",
      ringkas: "HENQIESOO Storytelling.",
      detail:
        "Menceritakan ulang kisah nyata: yang dialami sendiri, yang didengar dari orang lain, yang biasanya lewat begitu saja tanpa sempat diceritakan.",
    },
  ],

  /**
   * Foto mengajar dan berkhotbah. Ini bukti kerja, bukan hiasan, jadi
   * tata letaknya sengaja lurus dan diam, beda dari kolase "Sehari-hari"
   * yang miring dan hanyut.
   */
  mengajar: {
    judul: "Mengajar",
    catatan:
      "Komsel, mimbar, dan ruang kelas. Bagian pekerjaan yang paling sering, dan paling jarang sempat difoto.",
    utama: {
      src: "/ajar-komsel-lebar.jpg",
      w: 1500,
      h: 675,
      alt: "Hengky mengajar komsel di depan papan tulis, di ruang keluarga",
    },
    lain: [
      {
        src: "/ajar-mimbar-dekat.jpg",
        w: 760,
        h: 950,
        alt: "Hengky berkhotbah memegang mikrofon, dengan papan tulis berisi catatan",
      },
      {
        src: "/ajar-mimbar-penuh.jpg",
        w: 760,
        h: 950,
        alt: "Hengky berdiri di belakang mimbar kayu",
      },
      {
        src: "/ajar-mimbar-jemaat.jpg",
        w: 760,
        h: 950,
        alt: "Hengky berkhotbah di hadapan jemaat",
      },
    ],
  },

  /**
   * Jasa yang dibuka. Harga dan tempo diambil dari brosur HENQIESOO.
   * Nomor WA di sini nomor usaha, beda dari nomor pribadi di `kontak`.
   */
  jasa: {
    judul: "Jasa",
    catatan:
      "Dikerjakan sendiri dari awal sampai jadi, bukan template yang tinggal ganti nama.",
    paket: [
      {
        nama: "Undangan digital",
        harga: "Mulai Rp 100rb",
        tempo: "Jadi dalam 2 hari",
        isi: ["RSVP otomatis", "Musik latar", "Peta lokasi", "Galeri foto"],
      },
      {
        nama: "Website UMKM dan profil perusahaan",
        harga: "Mulai Rp 1,5jt",
        tempo: "Siap dalam 7 hari",
        isi: [
          "Profil usaha",
          "Katalog produk",
          "Tombol WhatsApp",
          "Rapi di HP dan laptop",
        ],
      },
    ],
    /**
     * Contoh kerja. Tangkapan layarnya sengaja dipotong bersih dari status
     * bar, taskbar, dan badge alat bantu, supaya yang terlihat cuma situsnya.
     */
    portofolio: {
      judul: "Pernah dikerjakan",
      proyek: [
        {
          nama: "VL Craft Souvenir",
          jenis: "Profil perusahaan",
          isi: "Perajin tas dan dompet batik. Halaman profil, edukasi batik, dan katalog produk per kategori.",
          src: "/kerja-vlcraft.jpg",
          w: 1440,
          h: 688,
          alt: "Beranda website VL Craft Souvenir",
        },
        {
          nama: "GBSI Cibinong",
          jenis: "Website gereja",
          isi: "Gereja Berea Sungrak Indonesia cabang Cibinong. Jadwal ibadah, acara, surat gembala, renungan, dan galeri.",
          src: "/kerja-gbsi.jpg",
          w: 1440,
          h: 811,
          alt: "Beranda website GBSI Cibinong",
        },
      ],
    },

    kelas: {
      nama: "Kelas privat",
      isi: "Piano, gitar, dan cara memakai Claude AI. Satu per satu, materinya mengikuti murid.",
    },
    janji: [
      "Dikerjakan langsung, bukan template massal",
      "Revisi sampai sesuai",
      "Harga jelas dari awal, tanpa nego berlarut",
    ],
    wa: { tampil: "0851 5766 9630", url: "https://wa.me/6285157669630" },
  },

  /** Pita berjalan di bawah hero. Isinya apa yang benar-benar dia ajarkan. */
  sorot: [
    "PJOK",
    "SENI MUSIK",
    "PENDIDIKAN AGAMA KRISTEN",
    "PRAKARYA & KEWIRAUSAHAAN",
    "PIANO",
    "GITAR",
    "TEOLOGI",
    "KISAH NYATA",
  ],

  /**
   * Kolase musik. Mekanismenya sama seperti sebelumnya (miring dan hanyut),
   * isinya diganti dari selfie lama ke foto benar-benar bermain: kolase yang
   * berenergi cocok untuk panggung, tidak cocok untuk foto liburan.
   */
  musik: {
    judul: "Musik",
    catatan:
      "Mengiringi di gereja, main di panggung, dan latihan di rumah. Sebagian foto sudah lama.",
    foto: [
      { src: "/musik-grand-senyum.jpg", w: 660, h: 495, alt: "Hengky duduk di depan grand piano", lebar: "28%", putar: "-4deg", turun: "0rem" },
      { src: "/musik-tangan-angkat.jpg", w: 495, h: 660, alt: "Hengky mengangkat kedua tangan di belakang keyboard", lebar: "19%", putar: "3deg", turun: "3rem" },
      { src: "/musik-panggung-topi.jpg", w: 495, h: 660, alt: "Hengky di belakang keyboard, dengan set drum di belakangnya", lebar: "21%", putar: "-2.5deg", turun: "-1.5rem" },
      { src: "/musik-latihan-hoodie.jpg", w: 660, h: 495, alt: "Hengky berlatih piano di rumah", lebar: "25%", putar: "4.5deg", turun: "4rem" },
      { src: "/musik-ibadah-band.jpg", w: 626, h: 417, alt: "Hengky mengiringi di grand piano bersama tim musik gereja", lebar: "27%", putar: "-6deg", turun: "-2rem" },
      { src: "/musik-roland.jpg", w: 495, h: 660, alt: "Hengky bermain keyboard Roland", lebar: "18%", putar: "2deg", turun: "2.5rem" },
      { src: "/musik-keyboard-kuning.jpg", w: 495, h: 660, alt: "Hengky bermain keyboard", lebar: "20%", putar: "-3.5deg", turun: "-1rem" },
    ],
  },

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
      {
        nama: "YouTube",
        handle: "@ceritaduniabyme",
        url: "https://www.youtube.com/@ceritaduniabyme",
      },
      {
        nama: "Instagram",
        handle: "@henqiesoo",
        url: "https://www.instagram.com/henqiesoo",
      },
      {
        nama: "TikTok",
        handle: "@sohen322",
        url: "https://www.tiktok.com/@sohen322",
      },
      // Menambah kanal: tulis satu baris lagi di sini. Kanal dengan `url`
      // kosong tidak ditampilkan. Nama yang sudah ada ikonnya:
      // YouTube, Instagram, TikTok, Facebook.
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
    // Toko. Dikosongkan `url`-nya kalau tidak mau ditampilkan.
    toko: {
      tampil: "Toko Shopee",
      url: "https://id.shp.ee/1rdjfc1y?smtt=0.0.9",
    },
  },
} as const;

export type Kanal = (typeof profil.cerita.kanal)[number];
