import React from 'react';
import { Users, GraduationCap, School, Hospital, Home } from 'lucide-react';

export default function HealthEducation() {
  const venues = [
    { icon: <School size={24} />, name: "Scuole", desc: "Progetti di prevenzione per i più giovani." },
    { icon: <Hospital size={24} />, name: "Ospedali", desc: "Incontri di approfondimento specialistico." },
    { icon: <Home size={24} />, name: "Proloco", desc: "Conferenze aperte a tutta la cittadinanza." }
  ];

  return (
    <section id="educazione-salute" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-4">
            <GraduationCap size={16} />
            Cultura della Prevenzione
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Educazione alla Salute</h2>
          <p className="text-lg text-slate-600">
            La prevenzione inizia dalla conoscenza. Portiamo la cultura della salute direttamente sul territorio attraverso conferenze e incontri di divulgazione.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {venues.map((venue, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-teal-50 text-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                {venue.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{venue.name}</h3>
              <p className="text-slate-600 leading-relaxed">
                {venue.desc} Organizziamo sessioni informative per sensibilizzare la comunità sull'importanza della diagnosi precoce e dei corretti stili di vita.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-teal-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Vuoi organizzare un incontro?</h3>
            <p className="text-teal-50 opacity-90">
              Sei un dirigente scolastico o il responsabile di una proloco? Contattaci per portare i nostri esperti nel tuo comune.
            </p>
          </div>
          <a 
            href="/contatti" 
            className="bg-white text-teal-600 font-bold py-4 px-10 rounded-2xl hover:bg-teal-50 transition-colors shrink-0"
            aria-label="Contattaci per organizzare un incontro di educazione alla salute"
          >
            Contattaci ora
          </a>
        </div>
      </div>
    </section>
  );
}
