import React from 'react';

export default function History() {
  const milestones = [
    {
      year: "2026",
      title: "Costituzione di IGEA ODV",
      description: "Il 24 maggio 2026 viene ufficialmente costituita l'associazione a Borgosesia, unendo volontari dedicati alla prevenzione e all'assistenza sanitaria.",
      color: "bg-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Le Nostre Radici a Borgosesia
          </h2>
          <p className="text-lg text-slate-600">
            Una storia che nasce dall'esperienza condivisa di volontari uniti dalla passione per il servizio sociale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Dall'esperienza nasce la solidarietà</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                IGEA ODV nasce dall'unione di numerosi soci, ciascuno proveniente da esperienze che li hanno visti impegnati in diversi settori in ambito sociale. È stato questo comune operare nel sociale a favore di chi si trova nella condizione di avere più bisogno, che ha spinto i volontari di IGEA a costituirsi in associazione per operare insieme.
              </p>
              <p>
                Il nome IGEA, ispirato alla dea greca della salute, rappresenta la nostra dedizione alla prevenzione e al benessere. La sigla ODV (Organizzazione di Volontariato) sottolinea il nostro impegno gratuito e disinteressato verso la comunità.
              </p>
              <p>
                Con sede a Borgosesia, nel cuore della Valsesia, l'associazione opera per garantire che nessuno rimanga indietro quando si tratta di salute e assistenza sociale, creando una rete di supporto solida e affidabile per tutto il territorio.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/borgosesia/800/600" 
              alt="Panorama di Borgosesia" 
              className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-black text-primary">2026</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Anno di fondazione</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">I Nostri Traguardi</h3>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className={`${milestone.color} text-white w-20 h-20 shrink-0 rounded-full flex items-center justify-center text-xl font-black shadow-lg`}>
                  {milestone.year}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h4>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
