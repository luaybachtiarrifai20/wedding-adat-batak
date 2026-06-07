import React from 'react';

export const Couple: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1a0f14] text-white py-16 flex flex-col items-center overflow-hidden">
      {/* Top Ornament */}
      <div className="w-full max-w-4xl px-4 mb-12">
        <img 
          src="/Tema Adat Dayak_files/25DK702-ORNAMEN-AB-scaled-e1765876061184.png" 
          alt="Ornament" 
          className="w-full h-auto"
        />
      </div>

      {/* Main Couple Image */}
      <div className="relative w-full max-w-md px-6 mb-8 flex flex-col items-center">
        <div className="rounded-t-full overflow-hidden border-4 border-[#5b2024] shadow-2xl shadow-black">
          <img 
            src="/Tema Adat Dayak_files/kaesang-gudono-1-e1766729171733.jpg" 
            alt="Kaesang & Erina" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Wedding Intro */}
      <div className="text-center mb-16 px-4">
        <h3 className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-amber-500">The Wedding Of</h3>
        <h2 className="text-5xl md:text-6xl font-serif text-white mb-4" style={{ fontFamily: '"Playball", cursive' }}>
          Kaesang & Erina
        </h2>
        <p className="text-lg md:text-xl text-gray-300 tracking-wider">Minggu, 25 Januari 2026</p>
      </div>

      {/* Quote Section */}
      <div className="flex flex-col items-center text-center max-w-2xl px-6 mb-20">
        <img 
          src="/Tema Adat Dayak_files/25DK702-RUMAH-DAYAK-MERAH.png" 
          alt="Rumah Dayak" 
          className="w-48 md:w-64 mb-8"
        />
        <p className="text-sm md:text-base italic leading-relaxed text-gray-300 mb-4">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>
        <p className="text-sm font-semibold text-amber-500">(QS. Ar-Rum : 21)</p>
      </div>

      {/* Groom & Bride Details */}
      <div className="w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
        
        {/* Groom */}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <h3 className="text-amber-500 tracking-widest uppercase text-sm mb-6">Pengantin Pria</h3>
          <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-t-full border-2 border-amber-500 mb-6 p-1">
            <img 
              src="/Tema Adat Dayak_files/kaesang-gudono-6-e1766729200548.jpg" 
              alt="Kaesang" 
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          <h2 className="text-4xl font-serif mb-2" style={{ fontFamily: '"Playball", cursive' }}>Kaesang</h2>
          <p className="text-sm text-gray-300 mb-4">Anak Kedua dari <br/>Bapak Joko & Ibu Atik</p>
          <a href="#" className="w-10 h-10 rounded-full bg-[#5b2024] flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>

        {/* Separator */}
        <div className="text-6xl font-serif text-amber-500" style={{ fontFamily: '"Playball", cursive' }}>&</div>

        {/* Bride */}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <h3 className="text-amber-500 tracking-widest uppercase text-sm mb-6">Pengantin Wanita</h3>
          <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-t-full border-2 border-amber-500 mb-6 p-1">
            <img 
              src="/Tema Adat Dayak_files/kaesang-gudono-2-e1766729217399.jpg" 
              alt="Erina" 
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          <h2 className="text-4xl font-serif mb-2" style={{ fontFamily: '"Playball", cursive' }}>Erina</h2>
          <p className="text-sm text-gray-300 mb-4">Anak Kedua dari <br/>Bapak Anwar & Ibu Reni</p>
          <a href="#" className="w-10 h-10 rounded-full bg-[#5b2024] flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>

      </div>
    </section>
  );
};
