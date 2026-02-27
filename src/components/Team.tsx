import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Maria Filippa Di Biase",
      role: "Presidente",
      image: "https://picsum.photos/seed/maria/400/400",
      bio: "Presidente dell'associazione, dedicata alla prevenzione e al benessere della comunità valsesiana.",
      email: "presidente@igeaodv.it"
    },
    {
      name: "Santina Baratti",
      role: "Segretaria",
      image: "https://picsum.photos/seed/santina/400/400",
      bio: "Segretaria dell'associazione, coordina le attività amministrative e organizzative.",
      email: "segreteria@igeaodv.it"
    },
    {
      name: "Laura Bianchi",
      role: "Vice Presidente",
      image: "https://picsum.photos/seed/laura/400/400",
      bio: "Medico chirurgo, coordina i progetti di screening visivo nelle scuole.",
      email: "vicepresidente@igeaodv.it"
    },
    {
      name: "Giuseppe Verdi",
      role: "Tesoriere",
      image: "https://picsum.photos/seed/giuseppe/400/400",
      bio: "Esperto in gestione amministrativa, si occupa della trasparenza dei fondi raccolti.",
      email: "tesoriere@igeaodv.it"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Le Persone Dietro IGEA
          </h2>
          <p className="text-lg text-slate-600">
            Un team di professionisti e volontari dedicati, uniti dalla stessa passione per il benessere della comunità.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-slate-600 text-sm mb-6 h-16">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={`mailto:${member.email}`} className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white p-2 rounded-full transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white p-2 rounded-full transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
