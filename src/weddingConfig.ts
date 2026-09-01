import couplePhoto from "./assets/couple_cartun.png";
import photoGroom from "./assets/mempelai_pria.png";
import photoBride from "./assets/mempelai_wanita.png";
import photo1 from "./assets/couple02.png";
import photo2 from "./assets/cewek01.jpeg";
import photo3 from "./assets/cowok01.jpeg";

export const weddingConfig = {
  // Front
  front: {
    names: "Wayan & Yuni",
    photo: couplePhoto,
  },

  // Couple Section
  couple: {
    names: "Wayan & Yuni",
    date: "Rabu, 16 September 2026",
    photo: couplePhoto,
  },

  // Mempelai Section
  mempelai: {
    quote:
      "Dan diatas Segalanya kenakanlah Kasih, Sebagai pengingat yang mempersatukan dan menyempurnakan",
    quoteReference: "(Kolose 3 : 21)",
    groom: {
      name: "I WAYAN ARTAYASA",
      description:
        "Anak Ke-1 dari<br/>Bapak I Wayan Musja &amp; Almh Ibu Ni Wayan Sadri",
      photo: photoGroom,
      instagram: "https://instagram.com/kharta_borneoz",
    },
    bride: {
      name: "WAHYUNI SATRIA",
      description:
        "Anak Ke-2 dari<br/>Bapak Tuket &amp; Almh Ibu Normah",
      photo: photoBride,
      instagram: "https://instagram.com/fransiiska_evha",
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date("2026-09-16T08:00:00"),
    akadNikah: {
      title: "Upacara Adat Manusa yadnya pawiwahan",
      date: "Rabu, 16 September 2026",
      time: "08.00 WIB s/d Selesai",
      location: "Br. Balu, Desa Abian Tuwung, Kediri, Tabanan, Bali ( Rumah No 47 )",
      mapsUrl: "https://www.google.com/maps/place/8%C2%B033'10.6%22S+115%C2%B009'18.7%22E/@-8.552947,115.1526221,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.552947!4d115.155197?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    },
    // resepsi: {
    //   title: "Resepsi Pernikahan",
    //   date: "Rabu, 16 September 2026",
    //   time: "10.00 WIB s/d Selesai",
    //   location: "Rumah Kediaman Ibu Ancela susilawati (Sui Jawa)",
    //   mapsUrl: "https://maps.app.goo.gl/3hL7MxwyeR7TkJ3D9",
    // },
  },

  // Galeri Section
  galeri: {
    photos: [photo1, photo2, photo3],
  },

  // Penutup Section
  penutup: {
    names: "Wayan & Yuni",
    socialMedia: {
      instagram: "https://www.instagram.com/",
      whatsapp: "https://wa.me/message/",
    },
  },

  // Gift Section
  gift: {
    bankAccount: {
      bankName: "BANK BRI",
      accountNumber: "711601000780503",
      accountName: "I Wayan Artayasa",
      chipImage: "chip-atm-1-2-1-1-1-1.png",
      bankLogo: "BANK-BRI-1.png",
    },
    giftShipping: {
      recipientName: "Yuni",
      phoneNumber: "081350391523",
      address:
        "Jln. Trans Kalimantan Dusun Jaya Paraya, Rt/Rw : 001/001 Desa Korek",
    },
  },
};
