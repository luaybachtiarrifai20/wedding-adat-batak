import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { weddingConfig } from "../weddingConfig";
import bgAll from "../assets/25DK702-BG-ALL.jpg";
import ornamentDayak from "../assets/25DK702-DAYAK.png";

interface FrontProps {
  onOpen: () => void;
}

export const Front: React.FC<FrontProps> = ({ onOpen }) => {
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState("Nama Tamu");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuestName = async () => {
      const toParam = searchParams.get("to");
      if (toParam) {
        try {
          const guestsRef = collection(db, "guests");
          // Try to find by invitationLink first
          const q = query(
            guestsRef,
            where("invitationLink", "==", `https://wedding-adat-batak.vercel.app/?to=${toParam}`)
          );
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const guestDoc = querySnapshot.docs[0];
            setGuestName(guestDoc.data().name);
            // console.log("Found guest by invitationLink:", guestDoc.data().name);
          } else {
            // If not found by invitationLink, try to find by name (convert slug back to name)
            const nameFromSlug = toParam.split('-').map((word: string) => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            const q2 = query(guestsRef, where("name", "==", nameFromSlug));
            const querySnapshot2 = await getDocs(q2);
            
            if (!querySnapshot2.empty) {
              const guestDoc = querySnapshot2.docs[0];
              setGuestName(guestDoc.data().name);
              console.log("Found guest by name:", guestDoc.data().name);
            } else {
              console.warn("Guest not found for:", toParam, "or name:", nameFromSlug);
              setGuestName("Tamu Terhormat");
            }
          }
        } catch (error) {
          console.error("Error fetching guest:", error);
          setGuestName("Tamu Terhormat");
        }
      }
      setLoading(false);
    };

    fetchGuestName();
  }, [searchParams]);
  return (
    <div 
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center font-sans overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgAll})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#5F131A'
      }}
    >
      {/* Content wrapper to center things properly */}
      <div className="w-[90%] max-w-[400px] flex flex-col items-center mt-12 relative z-10">
        
        {/* Ornaments - Overlapping the card */}
        <div className="w-full flex justify-center absolute -top-[50px] z-20">
          <img 
            src={ornamentDayak} 
            alt="Ornament" 
            className="w-[43%] object-contain drop-shadow-md"
          />
        </div>

        {/* The Card containing ONLY the couple's photo */}
        <div 
          className="relative w-full rounded-[20px] overflow-hidden shadow-lg border-[2px] border-[#8F313A] mb-8"
          style={{ height: '45vh', minHeight: '350px', maxHeight: '450px' }}
        >
          {/* Photo Background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${weddingConfig.front.photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center'
            }}
          ></div>
          
          {/* Gradient Overlay to fade the bottom of the photo */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(97,34,40,0.02) 39%, #5F131A 100%)'
            }}
          ></div>
        </div>

        {/* Text Section (Outside the card) */}
        <div className="flex flex-col items-center text-center w-full relative z-10">
          <h2 className="font-['Poppins'] text-[13px] tracking-[3px] text-white uppercase mb-2">
            The Wedding Of
          </h2>
          
          <h1 
            className="text-[33px] text-[#F8BB63] mb-6 font-normal drop-shadow-md"
            style={{ fontFamily: '"Philosopher", sans-serif' }}
          >
            {weddingConfig.couple.names}
          </h1>
          
          <div className="flex flex-col items-center gap-1 mb-8">
            <p className="font-['Poppins'] text-[13px] text-white">
              Kepada Yth :
            </p>
            <p className="font-['Poppins'] text-[17px] text-[#F8BB63]">
              {loading ? 'Memuat...' : guestName}
            </p>
          </div>
          
          <button 
            onClick={onOpen}
            className="flex items-center gap-2 font-['Poppins'] text-[12px] font-medium text-black px-[20px] py-[11px] rounded-[27px] hover:opacity-90 transition-opacity"
            style={{ backgroundImage: 'linear-gradient(180deg, #F8BB63 0%, #D08B27 100%)' }}
          >
            <svg 
              className="w-4 h-4 text-black" 
              viewBox="0 0 512 512" 
              fill="currentColor"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            Buka Undangan
          </button>
        </div>
        
      </div>
      
    </div>
  );
};