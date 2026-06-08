import React, { useState, useEffect, useRef } from 'react';
import bgMusic from '../assets/SapeDayak.mp3';

let globalAudio: HTMLAudioElement | null = null;

export const playBackgroundMusic = async () => {
  try {
    if (globalAudio) {
      await globalAudio.play();
    }
  } catch (err) {
    console.error('Failed to play music:', err);
  }
};

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      globalAudio = audioRef.current;

      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
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
        className="fixed bottom-6 right-6 z-50 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </>
  );
};
