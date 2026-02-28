import React from 'react';
import { Car, Phone, MapPin, Clock, Users } from 'lucide-react';

export default function TransportServiceSection() {
  return (
    <section id="servizio-trasporti" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-4">
                <Car size={16} />
                Supporto alla Mobilità
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Servizio Trasporti</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In collaborazione con l'<strong>Unione Montana Valsesia</strong>, garantiamo il trasporto sociale per pazienti fragili e anziani che necessitano di raggiungere ospedali o centri di cura.
              </p>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <MapPin className="text-primary" />
                Copertura: Valsesia e Valsessera
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/20">
                  <Phone size={32} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Prenota il Trasporto</h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    Contatta la nostra coordinatrice <strong>Lorella</strong> per organizzare il tuo viaggio. Si consiglia un preavviso di almeno 48 ore.
                  </p>
                  <a 
                    href="tel:3703219062" 
                    className="text-2xl font-black text-primary hover:text-primary/80 transition-all"
                    aria-label="Chiama Lorella per il servizio trasporti al numero 370 321 9062"
                  >
                    370 321 9062
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl mb-6">
                <Car size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2 Autovetture</h4>
              <p className="text-slate-500 text-sm">Mezzi dedicati esclusivamente al servizio del territorio.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl mb-6">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Pazienti Fragili</h4>
              <p className="text-slate-500 text-sm">Supporto concreto per anziani e persone in difficoltà.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl mb-6">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Territorio</h4>
              <p className="text-slate-500 text-sm">Servizio attivo in tutta la Valsesia e Valsessera.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-purple-50 text-purple-600 p-4 rounded-2xl mb-6">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">48h Preavviso</h4>
              <p className="text-slate-500 text-sm">Per garantire la migliore organizzazione possibile.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
