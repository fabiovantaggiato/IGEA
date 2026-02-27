import React from 'react';
import { Heart, Gift, Share2, Calendar, CheckCircle2 } from 'lucide-react';

export default function Support() {
  const waysToHelp = [
    {
      icon: <Heart size={24} className="text-rose-500" />,
      bg: "bg-rose-100",
      title: "Diventa Volontario",
      description: "Unisciti al nostro team di volontari e contribuisci direttamente alle nostre attività di prevenzione e assistenza.",
      primaryAction: "Contattaci",
      secondaryAction: "Scopri di più"
    },
    {
      icon: <Gift size={24} className="text-blue-500" />,
      bg: "bg-blue-100",
      title: "Dona il 5 per Mille",
      description: "Una donazione che non ti costa nulla ma che può fare la differenza per la nostra comunità.",
      primaryAction: "Dona Ora",
      secondaryAction: "Scopri come"
    },
    {
      icon: <span className="text-emerald-500 font-bold text-xl">€</span>,
      bg: "bg-emerald-100",
      title: "Donazione Diretta",
      description: "Sostieni i nostri progetti con una donazione diretta tramite bonifico bancario.",
      primaryAction: "Dona Ora",
      secondaryAction: "Info Bonifico"
    },
    {
      icon: <Share2 size={24} className="text-purple-500" />,
      bg: "bg-purple-100",
      title: "Diffondi la Parola",
      description: "Aiutaci a far conoscere la nostra missione condividendo le nostre iniziative sui social media.",
      primaryAction: "Seguici",
      secondaryAction: "Condividi"
    },
    {
      icon: <Calendar size={24} className="text-orange-500" />,
      bg: "bg-orange-100",
      title: "Partecipa agli Eventi",
      description: "Unisciti ai nostri eventi di sensibilizzazione e raccolta fondi nella comunità.",
      primaryAction: "Prossimi Eventi",
      secondaryAction: "Organizza Evento"
    },
    {
      icon: <div className="w-6 h-6 rounded bg-teal-500"></div>,
      bg: "bg-teal-100",
      title: "Collaborazioni",
      description: "Se rappresenti un'azienda o un'organizzazione, esplora le opportunità di partnership.",
      primaryAction: "Proponi Collaborazione",
      secondaryAction: "Partnership"
    }
  ];

  return (
    <section id="support" className="py-20 bg-slate-50">
      
      {/* Hero CTA */}
      <div className="relative bg-slate-900 py-24 mb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/volunteers/1920/1080" 
            alt="Volontari" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Come Puoi Aiutarci</h2>
          <p className="text-xl text-slate-300 mb-10">
            Ogni gesto conta. Scopri come puoi contribuire alla nostra missione di solidarietà e prevenzione sanitaria in Valsesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Dona Ora
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Diventa Volontario
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Impact Stats */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Il Nostro Impatto</h3>
          <p className="text-slate-600">Grazie al supporto della comunità, stiamo facendo la differenza ogni giorno.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "500+", label: "Persone Aiutate", color: "text-teal-600", bg: "bg-teal-50" },
            { value: "50+", label: "Volontari Attivi", color: "text-primary", bg: "bg-primary/5" },
            { value: "25+", label: "Eventi Organizzati", color: "text-emerald-600", bg: "bg-emerald-50" },
            { value: "€15.000", label: "Fondi Raccolti", color: "text-indigo-600", bg: "bg-indigo-50" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
              <div className={`w-12 h-12 mx-auto rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                <Heart size={20} />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Ways to Help Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Modi per Aiutarci</h3>
          <p className="text-slate-600">Scegli il modo che più si adatta alle tue possibilità e passioni.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {waysToHelp.map((way, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${way.bg} flex items-center justify-center mb-6`}>
                {way.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{way.title}</h4>
              <p className="text-slate-600 mb-8 h-20">{way.description}</p>
              <div className="flex gap-3">
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  {way.primaryAction}
                </button>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  {way.secondaryAction}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Opportunities */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Opportunità di Volontariato</h3>
            <p className="text-slate-600">Trova il ruolo che fa per te e inizia a fare la differenza nella tua comunità.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Assistenza Sanitaria</h4>
              <p className="text-slate-600 mb-6">Supporto nelle attività di prevenzione e assistenza medica di base.</p>
              <div className="space-y-3">
                <div className="font-semibold text-slate-900">Requisiti:</div>
                <ul className="space-y-2">
                  {['Formazione sanitaria', 'Disponibilità weekend', 'Empatia e pazienza'].map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Supporto Amministrativo</h4>
              <p className="text-slate-600 mb-6">Gestione pratiche, organizzazione eventi e comunicazione.</p>
              <div className="space-y-3">
                <div className="font-semibold text-slate-900">Requisiti:</div>
                <ul className="space-y-2">
                  {['Competenze informatiche', 'Organizzazione', 'Comunicazione'].map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
