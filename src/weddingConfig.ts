import couplePhoto from './assets/couple.png';
import photoGroom from './assets/cowok01.jpeg';
import photoBride from './assets/cewek01.jpeg';
import photo1 from './assets/couple02.png';
import photo2 from './assets/cewek01.jpeg';
import photo3 from './assets/cowok01.jpeg';

export const weddingConfig = {
  // Couple Section
  couple: {
    names: 'Karta & Asih',
    date: 'Minggu, 26 Juli 2026',
    photo: couplePhoto,
  },

  // Mempelai Section
  mempelai: {
    quote: 'Dan diatas Segalanya kenakanlah Kasih, Sebagai pengingat yang mempersatukan dan menyempurnakan',
    quoteReference: '(Kolose 3 : 21)',
    groom: {
      name: 'Kaharta Karta, SP',
      description: 'Anak Ke-3 dari<br/>Bapak Johanes Djemini &amp; Ibu Rosapia (Alm)',
      photo: photoGroom,
      instagram: 'https://instagram.com/kharta_borneoz',
    },
    bride: {
      name: 'Fransiska Eva Kurniasih, S.Pd',
      description: 'Anak Ke-4 dari<br/>Bapak John Adil, S.Pd (Alm) &amp; Ibu Ancela Susilawati, S.Pd',
      photo: photoBride,
      instagram: 'https://instagram.com/fransiiska_evha',
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date('2026-07-26T08:00:00'),
    akadNikah: {
      title: 'Acara Pernikahan',
      date: 'Minggu, 26 Juli 2026',
      time: '13.00 WIB s/d Selesai',
      location: 'Rumah Kediaman Ibu Ancela susilawati (Sui Jawa)',
      mapsUrl: 'https://maps.app.goo.gl/PTNeCWsfhzkpH9Ww9',
    },
    resepsi: {
      title: 'Resepsi Pernikahan',
      date: 'Minggu, 26 Juli 2026',
      time: '13.00 WIB s/d Selesai',
      location: 'Rumah Kediaman Ibu Ancela susilawati (Sui Jawa)',
      mapsUrl: 'https://maps.app.goo.gl/PTNeCWsfhzkpH9Ww9',
    },
  },

  // Galeri Section
  galeri: {
    photos: [photo1, photo2, photo3],
  },

  // Penutup Section
  penutup: {
    names: 'Karta & Asih',
    socialMedia: {
      instagram: 'https://www.instagram.com/',
      whatsapp: 'https://wa.me/message/',
    },
  },

  // Gift Section
  gift: {
    bankAccount: {
      bankName: 'BANK BRI',
      accountNumber: '056901052237506',
      accountName: 'Fransiska Eva Kurniasih',
      chipImage: 'chip-atm-1-2-1-1-1-1.png',
      bankLogo: 'BANK-BRI-1.png',
    },
    giftShipping: {
      recipientName: 'Karta',
      phoneNumber: '0815xxxx',
      address: 'Jln Trans Kalimantan Dusun Jaya Paraya Desa Korek',
    },
  },
};
