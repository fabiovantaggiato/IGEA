import React from 'react';
import { Car, Phone, Users, Clock, MapPin } from 'lucide-react';

export default function TransportService() {
  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Servizio Trasporti</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          In cammino con IGEA: supporto alla mobilità per i pazienti fragili del nostro territorio.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Un aiuto concreto per chi ha bisogno</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Il servizio di trasporto per pazienti fragili è una delle attività cardine di IGEA ODV, realizzata in stretta collaborazione con l'<strong>Unione Montana Valsesia</strong>. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Mettiamo a disposizione <strong>2 autovetture</strong> dedicate esclusivamente al territorio per accompagnare chi non ha mezzi propri o familiari disponibili presso i presidi ospedalieri e i centri di cura.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/20">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Come richiedere il servizio</h3>
                    <p className="text-slate-600 mb-4">
                      È attivo un numero dedicato per prenotare il trasporto. Vi risponderà la nostra coordinatrice <strong>Lorella</strong>.
                    </p>
                    <a 
                      href="tel:3703219062" 
                      className="inline-flex items-center gap-2 text-2xl font-black text-primary hover:text-primary/80 transition-all"
                      aria-label="Chiama Lorella per prenotare il trasporto al numero 370 321 9062"
                    >
                      370 321 9062
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-primary mb-4"><Car size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">2 Autovetture</h4>
                <p className="text-slate-600 text-sm">Mezzi moderni e sicuri per garantire viaggi confortevoli ai nostri pazienti.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-teal-600 mb-4"><Users size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Pazienti Fragili</h4>
                <p className="text-slate-600 text-sm">Servizio rivolto ad anziani e persone in condizioni di fragilità sociale.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-emerald-600 mb-4"><MapPin size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Territorio</h4>
                <p className="text-slate-600 text-sm">Copertura di tutta la Valsesia e Valsessera.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-amber-500 mb-4"><Clock size={40} /></div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Prenotazione</h4>
                <p className="text-slate-600 text-sm">Si consiglia di chiamare con almeno 48 ore di anticipo per organizzare al meglio il viaggio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">In collaborazione con</h3>
          <div className="flex justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="font-bold text-xl text-slate-400">Unione Montana Valsesia</div>
          </div>
        </div>
      </section>
    </main>
  );
}
