import React from 'react';
import { HeartHandshake, Target } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 p-10 rounded-3xl">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <HeartHandshake size={24} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Le Nostre Attività</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>Visite di prevenzione:</strong> Offriamo visite ginecologiche, angiologiche, diabetologiche ed endocrinologiche grazie a medici partner e alla collaborazione con l'ASL presso Villa Barbara (Varallo), l'Ospedale di Borgosesia, la Casa della Salute di Coggiola e Valduggia.
              </p>
              <p>
                <strong>Educazione e Salute:</strong> Organizziamo conferenze di divulgazione su temi della prevenzione presso proloco, ospedali e scuole del territorio.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl">
            <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <Target size={24} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Supporto al Territorio</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>Servizio Trasporti:</strong> In collaborazione con l'Unione Montana Valsesia, garantiamo il trasporto di pazienti fragili con 2 autovetture dedicate. Per richieste: <a href="tel:3703219062" className="text-primary font-bold" aria-label="Chiama Lorella per il servizio trasporti al numero 370 321 9062">370 321 9062</a> (Lorella).
              </p>
              <p>
                <strong>Beni Strumentali:</strong> Rispondiamo alle necessità dell'ASL di Vercelli acquistando beni strumentali e attrezzature mediche necessarie per il miglioramento delle cure locali.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
