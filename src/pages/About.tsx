import React from 'react';
import AboutSection from '../components/About';
import History from '../components/History';
import Team from '../components/Team';

export default function About() {
  return (
    <main>
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Chi Siamo</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
          La storia, i valori e le persone che ogni giorno rendono possibile la nostra missione in Valsesia.
        </p>
      </div>
      <AboutSection />
      <History />
      <Team />
    </main>
  );
}
