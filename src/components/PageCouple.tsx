import React from "react";
import bgAll from "../assets/25DK702-BG-ALL.jpg";
import ornamentAB from "../assets/25DK702-ORNAMEN-AB-scaled-e1765876061184.png";
import framePro from "../assets/25DK702-FRAME-PRO.png";
import { weddingConfig } from "../weddingConfig";

export const PageCouple: React.FC = () => {
  const { names, date, photo } = weddingConfig.couple;
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${bgAll})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundColor: "#5F131A",
      }}
    >
      {/* Top ornament border strip */}
      <div className="w-full absolute top-0 left-0 z-10">
        <img src={ornamentAB} alt="Ornament Top" className="w-full h-auto" />
      </div>

      {/* Oval photo with decorative gold frame */}
      <div className="relative mt-20 w-[75%] max-w-[290px] z-10 animate-fadeInDown">
        {/* The actual photo clipped to oval */}
        <div
          className="w-full overflow-hidden"
          style={{
            aspectRatio: "3 / 3.8",
            borderRadius: "50%",
            // Inset slightly so frame overlaps
            margin: "8% 10%",
            width: "80%",
          }}
        >
          <img
            src={photo}
            alt={names}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Gold decorative frame overlaid on top */}
        <img
          src={framePro}
          alt="Frame"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          style={{ top: 0, left: 0 }}
        />
      </div>

      {/* Text section */}
      <div className="z-10 flex flex-col items-center text-center mt-6 px-6 pb-24 animate-fadeInUp">
        <p
          className="text-white text-[11px] tracking-[3px] uppercase mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          The Wedding Of
        </p>
        <h1
          className="text-[#F8BB63] text-[40px] font-normal mb-3"
          style={{ fontFamily: "Philosopher, sans-serif" }}
        >
          {names}
        </h1>
        <p
          className="text-white text-[12px] uppercase tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {date}
        </p>
      </div>

      {/* Bottom ornament strip (flipped) */}
      <div className="w-full absolute bottom-0 left-0 z-10" style={{ transform: "scaleY(-1)" }}>
        <img src={ornamentAB} alt="Ornament Bottom" className="w-full h-auto" />
      </div>
    </section>
  );
};
