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
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Collaborazioni Strategiche
            </h2>
            <p className="text-lg text-slate-600">
              L'efficacia della nostra azione è legata alla capacità di operare in rete con partner istituzionali e filantropici.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">ASL Vercelli</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Collaboriamo strettamente con l'Azienda Sanitaria Locale per integrare le nostre iniziative con i piani sanitari territoriali, garantendo screening e visite specialistiche di alta qualità.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fondazione Valsesia</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Il nostro partner principale per la raccolta fondi e la realizzazione di grandi progetti infrastrutturali, come l'allestimento del reparto di oculistica dell'Ospedale di Borgosesia.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">CTV Vercelli Biella</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Il Centro Territoriale Volontariato ci fornisce supporto burocratico, formativo e logistico, facilitando l'adeguamento alle normative del Terzo Settore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </main>
  );
}
