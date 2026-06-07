import { useState } from 'react';
import { Front } from './components/Front';
import { PageCouple } from './components/PageCouple';
import { PageMempelai } from './components/PageMempelai';
import { PageAcara } from './components/PageAcara';
import { PageGaleri } from './components/PageGaleri';
import { PageGift } from './components/PageGift';
import { PageUcapan } from './components/PageUcapan';
import { PagePenutup } from './components/PagePenutup';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Scroll ke atas konten setelah animasi masuk
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div
        className="relative w-full max-w-[414px] shadow-2xl"
        style={{ backgroundColor: '#5F131A', minHeight: '100dvh' }}
      >
        {!isOpen ? (
          /* ===== HALAMAN COVER ===== */
          <div className="w-full h-screen">
            <Front onOpen={handleOpen} />
          </div>
        ) : (
          /* ===== HALAMAN KONTEN (slide-in dari bawah) ===== */
          <div className="w-full animate-slideIn">
            <PageCouple />
            <PageMempelai />
            <PageAcara />
            <PageGaleri />
            <PageGift />
            <PageUcapan />
            <PagePenutup />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
