import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';

export default function MedicalEquipment() {
  return (
    <section id="beni-strumentali" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Building2 size={200} className="text-white" />
          </div>
          
          <div className="relative z-10 p-12 md:p-20 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-6">
                <Building2 size={16} />
                Sostegno Sanitario
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                Beni Strumentali per l'ASL Vercelli
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Rispondiamo concretamente alle necessità del sistema sanitario locale acquistando attrezzature mediche all'avanguardia su richiesta specifica dell'ASL di Vercelli.
              </p>
              <div className="space-y-4">
                {[
                  "Miglioramento delle cure locali",
                  "Supporto tecnologico agli ospedali",
                  "Risposta rapida alle esigenze mediche"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-white mb-2">10+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Grandi Donazioni</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 mt-8">
                <div className="text-4xl font-black text-emerald-500 mb-2">ASL</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Partner Diretto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
