import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Informativa sui Cookie</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Navigando su questo sito, accetti l'uso dei cookie in conformità con la nostra{' '}
              <Link to="/cookie-policy" className="text-primary hover:underline font-medium">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20"
              aria-label="Accetta tutti i cookie"
            >
              Accetto
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Chiudi informativa cookie"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
