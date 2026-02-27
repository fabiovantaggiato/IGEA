import React from 'react';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              La nostra missione in Valsesia
            </h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                IGEA ODV opera capillarmente sul territorio per garantire prevenzione e supporto. Grazie alla collaborazione con l'ASL e medici partner, offriamo visite specialistiche (ginecologia, angiologia, diabetologia, endocrinologia) a Varallo Sesia, Borgosesia, Coggiola e Valduggia.
              </p>
              <p>
                Crediamo nell'educazione come primo passo per la salute: per questo organizziamo conferenze divulgative nelle scuole, negli ospedali e nelle proloco, portando la cultura della prevenzione direttamente tra le persone.
              </p>
              <p>
                Siamo al fianco dei più fragili con un servizio di trasporto sociale dedicato, gestito in collaborazione con l'Unione Montana Valsesia, per assicurare che nessuno sia lasciato solo nel percorso di cura.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-3xl font-black text-primary">4</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Centri visite</div>
              </div>
              <div>
                <div className="text-3xl font-black text-teal-600">2</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Autovetture</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600">100%</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Volontariato</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img 
              src="https://picsum.photos/seed/valsesia/800/600" 
              alt="Paesaggio della Valsesia" 
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <Heart size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Dal 2026</div>
                <div className="text-sm text-slate-500">Al vostro servizio</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
