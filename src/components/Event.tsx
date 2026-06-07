import React from 'react';

export const Event: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1a0f14] text-white py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-2" style={{ fontFamily: '"Playball", cursive' }}>
          Acara Pernikahan
        </h2>
        <p className="text-gray-300">Minggu, 25 Januari 2026</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl px-4 w-full justify-center">
        {/* Akad Nikah */}
        <div className="flex-1 bg-[#23151b] border border-[#5b2024] rounded-t-full p-8 flex flex-col items-center text-center shadow-lg shadow-black/50">
          <h3 className="text-2xl font-serif text-amber-500 mb-4" style={{ fontFamily: '"Playball", cursive' }}>Akad Nikah</h3>
          <p className="text-lg font-semibold mb-2">08:00 - 10:00 WIB</p>
          <p className="text-sm text-gray-300 mb-6">Kediaman Mempelai Wanita<br/>Jl. Dayak Merah No 123, Balikpapan</p>
          <button className="bg-[#5b2024] hover:bg-amber-500 hover:text-black transition-colors px-6 py-2 rounded-full text-sm font-semibold">
            Lihat Lokasi
          </button>
        </div>

        {/* Resepsi */}
        <div className="flex-1 bg-[#23151b] border border-[#5b2024] rounded-t-full p-8 flex flex-col items-center text-center shadow-lg shadow-black/50">
          <h3 className="text-2xl font-serif text-amber-500 mb-4" style={{ fontFamily: '"Playball", cursive' }}>Resepsi</h3>
          <p className="text-lg font-semibold mb-2">11:00 - Selesai</p>
          <p className="text-sm text-gray-300 mb-6">Gedung Pertemuan Balikpapan<br/>Jl. Jenderal Sudirman, Balikpapan</p>
          <button className="bg-[#5b2024] hover:bg-amber-500 hover:text-black transition-colors px-6 py-2 rounded-full text-sm font-semibold">
            Lihat Lokasi
          </button>
        </div>
      </div>
    </section>
  );
};
