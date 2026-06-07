import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1a0f14] text-white py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-2" style={{ fontFamily: '"Playball", cursive' }}>
          Galeri Cinta
        </h2>
        <p className="text-gray-300">Momen Bahagia Kami</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl px-4 w-full">
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-1-e1766729171733.jpg" alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-2-e1766729217399.jpg" alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-6-e1766729200548.jpg" alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-2-e1766729217399.jpg" alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-6-e1766729200548.jpg" alt="Gallery 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-[#5b2024] shadow-lg">
          <img src="/Tema Adat Dayak_files/kaesang-gudono-1-e1766729171733.jpg" alt="Gallery 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
      </div>
    </section>
  );
};
