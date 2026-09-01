import React from "react";
import bgAll from "../assets/bg_utama.png";
import { weddingConfig } from "../weddingConfig";

export const PageGaleri: React.FC = () => {
  const { photos } = weddingConfig.galeri;
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgAll})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "#570B10",
      }}
    >
      <div
        className="w-full flex flex-col items-center px-5 py-10 gap-5"
        style={{ backgroundColor: "rgba(87,11,16,0.83)" }}
      >
        <h2
          className="text-[#F8BB63] text-[36px] font-normal"
          style={{ fontFamily: "Imperial Script, cursive" }}
        >
          Our Moments
        </h2>

        {/* Gallery Grid */}
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-2 rounded-[14px] overflow-hidden">
            <img src={photos[0]} alt="Gallery 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[1]} alt="Gallery 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[2]} alt="Gallery 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[2]} alt="Gallery 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[1]} alt="Gallery 5" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
