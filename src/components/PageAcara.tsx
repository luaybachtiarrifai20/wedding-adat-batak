import React, { useEffect, useState } from "react";
import bgPanjang from "../assets/25DK702-BG-ALL.jpg";
import ornamentDayak from "../assets/25DK702-DAYAK.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

interface TimeLeft {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
}

const useCountdown = (target: Date): TimeLeft => {
  const calc = (): TimeLeft => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { hari: 0, jam: 0, menit: 0, detik: 0 };
    return {
      hari: Math.floor(diff / 86400000),
      jam: Math.floor((diff % 86400000) / 3600000),
      menit: Math.floor((diff % 3600000) / 60000),
      detik: Math.floor((diff % 60000) / 1000),
    };
  };
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, []);
  return timeLeft;
};

const EventCard: React.FC<{
  title: string;
  date: string;
  time: string;
  location: string;
  mapsUrl: string;
}> = ({ title, date, time, location, mapsUrl }) => (
  <div
    className="reveal w-full flex flex-col items-center text-center rounded-[20px] py-6 px-5"
    style={{
      backgroundColor: "rgba(87,11,16,0.8)",
      border: "4px double #F8BB63",
      boxShadow: "0 0 10px 6px rgba(0,0,0,0.2) inset",
    }}
  >
    <h2
      className="text-[#F8BB63] text-[30px] font-normal mb-3"
      style={{ fontFamily: "Philosopher, sans-serif" }}
    >
      {title}
    </h2>

    {/* Calendar divider */}
    <div className="flex items-center w-1/2 gap-2 mb-3">
      <div className="flex-1 h-[1px] bg-[#F8BB63]"></div>
      <svg viewBox="0 0 448 512" fill="#F8BB63" className="w-5 h-5 shrink-0">
        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
      </svg>
      <div className="flex-1 h-[1px] bg-[#F8BB63]"></div>
    </div>

    <p className="text-[#E0E0E0] text-[13px] mb-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>Hari dan Tanggal</p>
    <p className="text-[#E0E0E0] text-[16px] font-semibold uppercase mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{date}</p>
    <p className="text-[#E0E0E0] text-[13px] mb-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>Pukul</p>
    <p className="text-[#E0E0E0] text-[15px] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>{time}</p>

    {/* Location divider */}
    <div className="flex items-center w-1/2 gap-2 mb-3">
      <div className="flex-1 h-[1px] bg-[#F8BB63]"></div>
      <svg viewBox="0 0 576 512" fill="#F8BB63" className="w-5 h-5 shrink-0">
        <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z" />
      </svg>
      <div className="flex-1 h-[1px] bg-[#F8BB63]"></div>
    </div>

    <p className="text-[#E0E0E0] text-[13px] mb-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>Lokasi</p>
    <p className="text-[#E0E0E0] text-[15px] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>{location}</p>

    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-black text-[12px] font-medium px-5 py-2 rounded-[10px] hover:opacity-90 transition-opacity"
      style={{
        backgroundImage: "linear-gradient(180deg, #F8BB63 0%, #D48E28 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
      Lokasi Acara
    </a>
  </div>
);

export const PageAcara: React.FC = () => {
  const { weddingDate, akadNikah, resepsi } = weddingConfig.acara;
  const { hari, jam, menit, detik } = useCountdown(weddingDate);
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgPanjang})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "#621419",
      }}
    >
      <div className="w-full flex flex-col items-center px-5 pt-10 pb-12 gap-6">
        <img src={ornamentDayak} alt="Ornament" className="reveal w-[50%] max-w-[200px]" />

        <h2
          className="reveal text-[#F8BB63] text-[36px] font-normal"
          style={{ fontFamily: "Imperial Script, cursive" }}
        >
          Menuju Hari Bahagia
        </h2>

        {/* Countdown boxes */}
        <div className="reveal flex gap-2 w-full justify-center">
          {[
            { val: hari, label: "Hari" },
            { val: jam, label: "Jam" },
            { val: menit, label: "Menit" },
            { val: detik, label: "Detik" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[10px] px-3 py-2 min-w-[58px]"
              style={{ backgroundColor: "#F8BB63" }}
            >
              <span className="text-[#5A2024] text-[20px] font-normal leading-[23px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {String(val).padStart(2, "0")}
              </span>
              <span className="text-[#5A2024] text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal text-white text-[13px] text-center leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
          Dengan mengucap puji dan syukur kepada Allah SWT, kami bermaksud mengundang Anda untuk dapat menghadiri acara pernikahan kami yang akan dilaksanakan pada:
        </p>

        <EventCard
          title={akadNikah.title}
          date={akadNikah.date}
          time={akadNikah.time}
          location={akadNikah.location}
          mapsUrl={akadNikah.mapsUrl}
        />
        <EventCard
          title={resepsi.title}
          date={resepsi.date}
          time={resepsi.time}
          location={resepsi.location}
          mapsUrl={resepsi.mapsUrl}
        />
      </div>
    </section>
  );
};
