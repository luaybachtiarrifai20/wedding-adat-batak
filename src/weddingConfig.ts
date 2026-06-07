import couplePhoto from './assets/kaesang-gudono-1-e1766729171733.jpg';
import photoGroom from './assets/kaesang-gudono-6-e1766729200548.jpg';
import photoBride from './assets/kaesang-gudono-2-e1766729217399.jpg';
import photo1 from './assets/kaesang-gudono-1-e1766729171733.jpg';
import photo2 from './assets/kaesang-gudono-2-e1766729217399.jpg';
import photo3 from './assets/kaesang-gudono-6-e1766729200548.jpg';

export const weddingConfig = {
  // Couple Section
  couple: {
    names: 'Kaesang & Erina',
    date: 'Minggu, 25 Januari 2026',
    photo: couplePhoto,
  },

  // Mempelai Section
  mempelai: {
    quote: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
    quoteReference: '(QS. Ar-Rum : 21)',
    groom: {
      name: 'Kaesang',
      description: 'Anak Kedua dari<br/>Bapak Joko &amp; Ibu Atik',
      photo: photoGroom,
      instagram: 'https://instagram.com/kaesangp',
    },
    bride: {
      name: 'Erina',
      description: 'Anak Kedua dari<br/>Bapak Anwar &amp; Ibu Reni',
      photo: photoBride,
      instagram: 'https://instagram.com/erinagudono',
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date('2026-01-25T08:00:00'),
    akadNikah: {
      title: 'Akad Nikah',
      date: 'Minggu, 25 Januari 2026',
      time: '08.00 WIB s/d Selesai',
      location: 'Kediaman Mempelai Wanita',
      mapsUrl: 'https://maps.app.goo.gl/PTNeCWsfhzkpH9Ww9',
    },
    resepsi: {
      title: 'Resepsi',
      date: 'Minggu, 25 Januari 2026',
      time: '09.00 WIB s/d Selesai',
      location: 'Kediaman Mempelai Wanita',
      mapsUrl: 'https://maps.app.goo.gl/PTNeCWsfhzkpH9Ww9',
    },
  },

  // Galeri Section
  galeri: {
    photos: [photo1, photo2, photo3],
  },

  // Penutup Section
  penutup: {
    names: 'Kaesang & Erina',
    socialMedia: {
      instagram: 'https://www.instagram.com/wekita.id/',
      whatsapp: 'https://wa.me/message/46S77EFCZCJAN1',
    },
  },

  // Gift Section
  gift: {
    bankAccount: {
      bankName: 'BANK BRI',
      accountNumber: '457401019331538',
      accountName: 'KAESANG',
      chipImage: 'chip-atm-1-2-1-1-1-1.png',
      bankLogo: 'BANK-BRI-1.png',
    },
    giftShipping: {
      recipientName: 'Kaesang',
      phoneNumber: '0815xxxx',
      address: 'Surakata',
    },
  },
};
