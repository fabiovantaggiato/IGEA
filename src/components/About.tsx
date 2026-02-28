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
                L'Associazione IGEA Prevenzione Salute Vita OdV è un attore fondamentale nel garantire il diritto alla salute e la prossimità delle cure nel territorio valsesiano. Fondata con una missione chiara legata alla prevenzione e al supporto socio-sanitario, IGEA ha costruito una rete di collaborazioni che coinvolge istituzioni pubbliche, fondazioni e realtà locali.
              </p>
              <p>
                Il nome "Igea" richiama la dea greca della salute e dell'igiene, sottolineando una vocazione che va oltre la semplice cura, abbracciando il concetto di benessere e prevenzione primaria. Operiamo per garantire che la prevenzione sanitaria raggiunga anche i borghi più isolati della valle.
              </p>
              <p>
                Siamo iscritti nel Registro Unico Nazionale del Terzo Settore (RUNTS) e operiamo con la massima trasparenza, collaborando strettamente con l'ASL di Vercelli e le amministrazioni comunali per rispondere alle sfide della sanità moderna in un territorio demograficamente complesso.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Dati Identificativi</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><span className="font-bold">Sede Legale:</span> Via A. Giordano 36, Borgosesia</li>
                  <li><span className="font-bold">Sede Operativa:</span> Via Prof. Calderini 19, Borgosesia</li>
                  <li><span className="font-bold">Codice Fiscale:</span> 94038650027</li>
                  <li><span className="font-bold">Iscrizione:</span> RUNTS (Terzo Settore)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Governance e Trasparenza</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Operiamo con un bilancio trasparente, finanziato da donazioni private, 5x1000 e contributi di fondazioni come Fondazione Valsesia e Fondazione Cariplo. Ogni risorsa è destinata all'acquisto di strumentazione e all'erogazione di servizi gratuiti per la comunità.
                </p>
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
                <div className="font-bold text-slate-900">Dal 2016</div>
                <div className="text-sm text-slate-500">Al vostro servizio</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
