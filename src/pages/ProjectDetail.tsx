import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { projectsData } from './Projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/progetti" replace />;
  }

  return (
    <main>
      <div className="bg-primary py-24 text-center relative">
        <Link to="/progetti" className="absolute top-8 left-4 md:left-8 text-white/70 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft size={20} />
          Torna ai progetti
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto px-4">{project.title}</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          {project.description}
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-primary/5 text-primary p-6 rounded-2xl flex items-center gap-4 text-lg font-medium">
                <CheckCircle2 size={24} className="text-primary shrink-0" />
                {project.stat}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Il Progetto</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Obiettivi</h3>
                <ul className="space-y-4">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-1" />
                      <span className="text-lg">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vuoi sostenere questo progetto?</h3>
                <p className="text-slate-600 mb-6">
                  Il tuo contributo è fondamentale per permetterci di continuare a portare avanti queste iniziative.
                </p>
                <Link to="/sostienici" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-colors">
                  Scopri come donare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
