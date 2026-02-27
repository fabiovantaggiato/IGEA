import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function SupportOverview() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Fai la differenza oggi
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Che sia attraverso una donazione, il 5x1000 o dedicando il tuo tempo come volontario, il tuo aiuto è prezioso per la nostra comunità.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={24} className="text-accent" />
                <span>Sostieni i progetti sanitari locali</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={24} className="text-accent" />
                <span>Aiuta le famiglie in difficoltà</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={24} className="text-accent" />
                <span>Contribuisci all'acquisto di macchinari medici</span>
              </li>
            </ul>
            <Link to="/sostienici" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 font-bold py-4 px-8 rounded-xl transition-colors text-lg" aria-label="Scopri come aiutarci con donazioni o volontariato">
              Scopri come aiutarci
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="bg-white/10 p-12 rounded-3xl border border-white/20 backdrop-blur-sm text-center">
            <div className="text-5xl font-black mb-4">5x1000</div>
            <p className="text-xl text-white/90 mb-6">Dona il tuo 5x1000 all'Associazione IGEA ODV</p>
            <div className="bg-white text-primary font-mono text-2xl py-4 px-6 rounded-xl inline-block">
              C.F. 91012345678
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
