import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Heart size={24} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">IGEA ODV</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Associazione di volontariato dedicata alla prevenzione sanitaria, solidarietà e assistenza a Borgosesia e in Valsesia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors" aria-label="Vai alla Home Page">Home</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors" aria-label="Scopri chi siamo">Chi Siamo</Link></li>
              <li><Link to="/progetti" className="hover:text-white transition-colors" aria-label="Vedi i nostri progetti">Progetti</Link></li>
              <li><Link to="/servizio-trasporti" className="hover:text-white transition-colors" aria-label="Informazioni sul servizio trasporti">Servizio Trasporti</Link></li>
              <li><Link to="/sostienici" className="hover:text-white transition-colors" aria-label="Sostieni l'associazione">Sostienici</Link></li>
              <li><Link to="/contributi" className="hover:text-white transition-colors" aria-label="Consulta i contributi ricevuti">Contributi</Link></li>
              <li><Link to="/bilanci" className="hover:text-white transition-colors" aria-label="Consulta i bilanci dell'associazione">Bilanci</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Progetti</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/progetti/defibrillatori" className="hover:text-white transition-colors">Donazione Defibrillatori</Link></li>
              <li><Link to="/progetti/colonna-laparoscopica" className="hover:text-white transition-colors">Operazione 3D</Link></li>
              <li><Link to="/progetti/ti-aiuto-io" className="hover:text-white transition-colors">Trasporto Malati</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Note Legali</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors" aria-label="Leggi la Privacy Policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors" aria-label="Leggi la Cookie Policy">Cookie Policy</Link></li>
              <li><Link to="/statuto" className="hover:text-white transition-colors" aria-label="Leggi lo Statuto dell'Associazione">Statuto dell'Associazione</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} IGEA Prevenzione Salute e Vita ODV. Tutti i diritti riservati.
          </div>
          <div>
            C.F. 91012345678 | Iscritta al RUNTS
          </div>
        </div>
      </div>
    </footer>
  );
}
