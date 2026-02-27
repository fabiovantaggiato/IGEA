import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: "screening-visivi",
      title: "Screening Visivi Gratuiti",
      description: "Visite oculistiche per bambini delle scuole primarie della Valsesia",
      image: "https://picsum.photos/seed/eye-exam/600/400",
      stat: "120 bambini visitati quest'anno"
    },
    {
      id: "apparecchiature-mediche",
      title: "Apparecchiature Mediche",
      description: "Acquisto di strumentazione sanitaria per l'ospedale di Borgosesia",
      image: "https://picsum.photos/seed/medical-equipment/600/400",
      stat: "Ecografo donato nel 2024"
    },
    {
      id: "assistenza-domiciliare",
      title: "Assistenza Domiciliare",
      description: "Supporto quotidiano per anziani e persone fragili del territorio",
      image: "https://picsum.photos/seed/elderly-care/600/400",
      stat: "25 famiglie seguite mensilmente"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            I nostri progetti in azione
          </h2>
          <p className="text-lg text-slate-600">
            Ogni progetto nasce dall'ascolto delle necessità del territorio. Ecco come stiamo facendo la differenza nella vita delle persone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                <div className="bg-primary/5 text-primary px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium mb-6">
                  <CheckCircle2 size={18} className="text-primary" />
                  {project.stat}
                </div>
                <Link 
                  to={`/progetti/${project.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-2 rounded-xl transition-colors"
                  aria-label={`Scopri di più sul progetto ${project.title}`}
                >
                  Scopri di più
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/progetti" 
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            aria-label="Vedi tutti i progetti dell'associazione"
          >
            Vedi tutti i progetti
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
