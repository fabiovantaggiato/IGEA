import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Building2, Car } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Vicini alle persone, sempre
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-16">
          L'Associazione IGEA ODV nasce dal cuore della Valsesia per portare salute, prevenzione e dignità a ogni persona del nostro territorio. La nostra missione è semplice ma profonda: essere vicini a chi ha bisogno.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
              <Heart size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Visite di Prevenzione</h3>
            <p className="text-slate-600">Visite specialistiche a offerta libera con medici partner e ASL a Varallo, Borgosesia, Coggiola e Valduggia.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-teal-100 text-teal-600 p-4 rounded-full mb-6">
              <Users size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Educazione alla Salute</h3>
            <p className="text-slate-600">Conferenze di divulgazione e prevenzione nelle scuole, ospedali e proloco del territorio.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-6">
              <Building2 size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Beni Strumentali</h3>
            <p className="text-slate-600">Acquisto di attrezzature mediche all'avanguardia su richiesta specifica dell'ASL di Vercelli.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-amber-100 text-amber-600 p-4 rounded-full mb-6">
              <Car size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Servizio Trasporti</h3>
            <p className="text-slate-600 mb-4">Trasporto sociale per pazienti fragili in collaborazione con Unione Montana Valsesia.</p>
            <Link 
              to="/servizio-trasporti" 
              className="text-primary font-semibold hover:underline mt-auto"
              aria-label="Scopri di più sul servizio trasporti per pazienti fragili"
            >
              Scopri il servizio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
