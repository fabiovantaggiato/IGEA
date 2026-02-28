import React from 'react';

export default function History() {
  const milestones = [
    {
      year: "2016",
      title: "Genesi e Fondazione",
      description: "L'atto costitutivo risale al 24 maggio 2016. IGEA nasce dall'esigenza di un gruppo di volontari di creare una struttura organizzata per interfacciarsi con l'ASL di Vercelli.",
      color: "bg-teal-600"
    },
    {
      year: "2018",
      title: "Progetto 'Vediamoci meglio'",
      description: "Lancio dello screening visivo pediatrico in collaborazione con il Soroptimist Club Valsesia per l'individuazione tempestiva di difetti visivi nei bambini.",
      color: "bg-purple-600"
    },
    {
      year: "2020",
      title: "Resilienza COVID-19",
      description: "Durante la pandemia, i volontari convertono le attività nel confezionamento di mascherine e cuffie per il personale sanitario, supportando l'emergenza territoriale.",
      color: "bg-blue-600"
    },
    {
      year: "2022",
      title: "Operazione Oculistica",
      description: "Lancio della campagna per potenziare il reparto di oculistica dell'Ospedale di Borgosesia con un microscopio ottico ad alta precisione.",
      color: "bg-primary"
    },
    {
      year: "2023",
      title: "Sanità di Prossimità",
      description: "Conclusione dell'Operazione Oculistica e apertura dell'ambulatorio prelievi a Valduggia e Cellio per servire la popolazione più anziana.",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            La Nostra Storia in Valsesia
          </h2>
          <p className="text-lg text-slate-600">
            Un percorso di crescita costante per garantire il diritto alla salute e la prossimità delle cure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Dall'esperienza nasce la solidarietà</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                L'Associazione IGEA ha stabilito il proprio centro a Borgosesia, baricentro dei servizi per l'intera Valsesia. Con sede legale in Via A. Giordano 36 e sede operativa in Via Prof. Calderini 19, siamo un punto di riferimento per il volontariato socio-sanitario.
              </p>
              <p>
                Il nostro operato si inserisce in un panorama associativo vivace, dove collaboriamo con le Unioni Montane e le amministrazioni locali per portare la prevenzione anche nei borghi più isolati.
              </p>
              <p>
                Siamo un partner strategico per il sistema sanitario pubblico, capace di catalizzare risorse per il potenziamento delle strutture locali, come dimostrato dall'importante investimento tecnologico per l'Ospedale di Borgosesia.
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
              <div className="text-3xl font-black text-primary">2016</div>
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
