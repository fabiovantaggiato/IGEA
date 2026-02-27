import React from 'react';
import { FileText, Download, PieChart } from 'lucide-react';

export default function Bilanci() {
  const bilanci = [
    { anno: "2023", titolo: "Bilancio d'Esercizio 2023", data: "31/12/2023", size: "1.2 MB" },
    { anno: "2022", titolo: "Bilancio d'Esercizio 2022", data: "31/12/2022", size: "1.1 MB" },
    { anno: "2021", titolo: "Bilancio d'Esercizio 2021", data: "31/12/2021", size: "1.0 MB" },
    { anno: "2020", titolo: "Bilancio d'Esercizio 2020", data: "31/12/2020", size: "950 KB" },
  ];

  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">I Bilanci</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          Documentazione finanziaria e trasparenza sulla gestione dei fondi dell'Associazione.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {bilanci.map((bilancio, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{bilancio.titolo}</h3>
                    <p className="text-sm text-slate-500">Chiusura al {bilancio.data} • {bilancio.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-white hover:bg-primary hover:text-white text-primary border border-primary px-4 py-2 rounded-xl font-semibold transition-all">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <PieChart className="text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Destinazione dei Fondi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Oltre il 90% dei fondi raccolti viene destinato direttamente ai progetti sul territorio, minimizzando le spese amministrative grazie all'impegno gratuito dei nostri volontari.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Trasparenza Totale</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                I nostri bilanci sono approvati annualmente dall'Assemblea dei Soci e sono a disposizione di chiunque desideri approfondire la gestione economica dell'Associazione.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
