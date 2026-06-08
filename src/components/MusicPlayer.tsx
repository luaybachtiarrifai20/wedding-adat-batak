import React, { useState, useEffect, useRef } from 'react';
import bgMusic from '../assets/SapeDayak.mp3';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play on mount
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Auto-play prevented by browser:', error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{
          backgroundImage: 'linear-gradient(180deg, #F8BB63 0%, #D08B27 100%)',
          border: '2px solid #8F313A',
        }}
      >
        {isPlaying ? (
          // Pause icon
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          // Play icon
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
};
