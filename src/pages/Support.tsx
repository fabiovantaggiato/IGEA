import React from 'react';
import SupportSection from '../components/Support';
import Contact from '../components/Contact';

export default function Support() {
  return (
    <main>
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Sostienici e Contatti</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
          Scopri come puoi contribuire alla nostra missione e mettiti in contatto con noi.
        </p>
      </div>
      <SupportSection />
      <Contact />
    </main>
  );
}
