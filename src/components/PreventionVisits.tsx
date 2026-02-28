import React from 'react';
import { Heart, MapPin, Stethoscope } from 'lucide-react';

export default function PreventionVisits() {
  const locations = [
    {
      city: "Varallo Sesia",
      place: "Villa Barbara",
      details: "Ambulatori dedicati per visite specialistiche."
    },
    {
      city: "Borgosesia",
      place: "Ospedale",
      details: "In collaborazione con ASL Vercelli."
    },
    {
      city: "Coggiola",
      place: "Casa della Salute",
      details: "In collaborazione con ASL Vercelli."
    },
    {
      city: "Valduggia",
      place: "Presidio Locale",
      details: "In collaborazione con ASL Vercelli."
    }
  ];

  const specialties = [
    "Ginecologia", "Angiologia", "Diabetologia", "Endocrinologia"
  ];

  return (
    <section id="visite-prevenzione" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
            <Heart size={16} />
            Prevenzione Gratuita
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Visite di Prevenzione</h2>
          <p className="text-lg text-slate-600">
            Offriamo visite specialistiche a <strong>offerta libera</strong> per garantire a tutti l'accesso a controlli di qualità. Grazie ai nostri medici partner e alla collaborazione con l'ASL, siamo presenti capillarmente sul territorio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Stethoscope className="text-primary" />
                Specializzazioni Disponibili
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-semibold text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-3xl shadow-xl shadow-primary/20">
              <h3 className="text-xl font-bold mb-4">Medici Partner</h3>
              <p className="leading-relaxed opacity-90">
                Le nostre visite sono effettuate da medici specialisti partner di IGEA o medici dell'ASL che mettono a disposizione la loro professionalità per la nostra missione di prevenzione.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4"><MapPin size={24} /></div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{loc.city}</h4>
                <div className="text-primary font-medium text-sm mb-3">{loc.place}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{loc.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
