import React, { useState } from 'react';
import { FileText, Download, Filter, Euro, Building, Gift } from 'lucide-react';

type ContributoType = 'diretto' | 'vantaggio' | '5xmille';

interface Contributo {
  data: string;
  ente: string;
  descrizione: string;
  anno: string;
  importo: string;
  tipo: ContributoType;
}

export default function Contributi() {
  const [selectedYear, setSelectedYear] = useState<string>('Tutti');

  const contributi: Contributo[] = [
    // 2024
    { data: "27/12/2024", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2022 e 2023", anno: "2024", importo: "€ 10.573,74", tipo: '5xmille' },
    { data: "31/10/2024", ente: "Comune di Sostegno", descrizione: "Contributo liberale anno 2024", anno: "2024", importo: "€ 100,00", tipo: 'diretto' },
    { data: "14/10/2024", ente: "Regione Piemonte", descrizione: "Bando 7 Terzo Scorrimento Liquidazione acconto (CUP J69123000460001)", anno: "2024", importo: "€ 21.552,00", tipo: 'diretto' },
    { data: "09/10/2024", ente: "Comune di Borgosesia", descrizione: "Contributo ad associazioni 2024", anno: "2024", importo: "€ 250,00", tipo: 'diretto' },
    { data: "21/08/2024", ente: "Ministero Lavoro e politiche sociali", descrizione: "Contributo beni strumentali 2021", anno: "2024", importo: "€ 3.429,98", tipo: 'diretto' },
    { data: "11/07/2024", ente: "Comune di Valduggia", descrizione: "Contributo anno 2024", anno: "2024", importo: "€ 300,00", tipo: 'diretto' },
    { data: "Gennaio 2024", ente: "Comune di Quarona", descrizione: "Contributo per stelle di Natale", anno: "2024", importo: "€ 250,00", tipo: 'diretto' },
    { data: "2024", ente: "Comune di Borgosesia", descrizione: "Concessione locale via Santa Antida/via A.Giordano (piano 2)", anno: "2024", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2024", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale primo piano - Palazzo Castellani", anno: "2024", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2024", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2024", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2024", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano terra - Villa Barbara", anno: "2024", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2023
    { data: "12/12/2023", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2021 e 2022", anno: "2023", importo: "€ 8.803,49", tipo: '5xmille' },
    { data: "03/11/2023", ente: "Comune di Borgosesia", descrizione: "Contributo straordinario 'Color Run 2023'", anno: "2023", importo: "€ 3.200,00", tipo: 'diretto' },
    { data: "02/11/2023", ente: "Comune di Coggiola", descrizione: "Concessione contributo", anno: "2023", importo: "€ 200,00", tipo: 'diretto' },
    { data: "01/08/2023", ente: "Comune di Sostegno", descrizione: "Liquidazione", anno: "2023", importo: "€ 100,00", tipo: 'diretto' },
    { data: "18/07/2023", ente: "Comune di Borgosesia", descrizione: "Progetto 'Vediamoci meglio'", anno: "2023", importo: "€ 250,00", tipo: 'diretto' },
    { data: "01/06/2023", ente: "Comune di Borgosesia", descrizione: "Contributo per azalee festa della mamma", anno: "2023", importo: "€ 250,00", tipo: 'diretto' },
    { data: "2023", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2023", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "Dal 20/12/23", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale primo piano - Palazzo Castellani", anno: "2023", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2023", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2023", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2023", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano terra - Villa Barbara", anno: "2023", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2022
    { data: "16/12/2022", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2020 e 2021", anno: "2022", importo: "€ 4.132,67", tipo: '5xmille' },
    { data: "22/12/2022", ente: "Comune di Sostegno", descrizione: "Contributo per Operazione oculistica Ospedale Borgosesia", anno: "2022", importo: "€ 350,00", tipo: 'diretto' },
    { data: "07/12/2022", ente: "Comune di Postua", descrizione: "Contributo per attività di utilità sociale", anno: "2022", importo: "€ 100,00", tipo: 'diretto' },
    { data: "18/11/22", ente: "Comune di Roasio", descrizione: "Contributo per Operazione oculistica Ospedale Borgosesia", anno: "2022", importo: "€ 500,00", tipo: 'diretto' },
    { data: "29/08/22", ente: "Comune di Sostegno", descrizione: "Contributo liberale anno 2022", anno: "2022", importo: "€ 100,00", tipo: 'diretto' },
    { data: "01/06/22", ente: "Comine di Quarona", descrizione: "Liquidazione contributi", anno: "2022", importo: "€ 500,00", tipo: 'diretto' },
    { data: "24/05/22", ente: "Comune di Borgosesia", descrizione: "Liquidazione contributi 2022", anno: "2022", importo: "€ 1.500,00", tipo: 'diretto' },
    { data: "16/05/22", ente: "Comune di Borgosesia", descrizione: "Liquidazione contributo", anno: "2022", importo: "€ 1.700,00", tipo: 'diretto' },
    { data: "2022", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2022", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2022", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2022", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "Dal 21/11/22", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano terra - Villa Barbara", anno: "2022", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2021
    { data: "29/10/2021", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2019 e 2022", anno: "2021", importo: "€ 3.617,71", tipo: '5xmille' },
    { data: "10/09/21", ente: "Comune di Sostegno", descrizione: "Contributo liberale anno 2021", anno: "2021", importo: "€ 100,00", tipo: 'diretto' },
    { data: "05/03/21", ente: "ASL VC", descrizione: "Rimborso per copertura assicurativa volontari", anno: "2021", importo: "€ 232,20", tipo: 'diretto' },
    { data: "04/02/21", ente: "Comune di Borgosesia", descrizione: "Liquidazione contributo - programmazione evento per beneficienza", anno: "2021", importo: "€ 500,00", tipo: 'diretto' },
    { data: "2021", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2021", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2021", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2021", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2020
    { data: "06/10/2020", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2018 e 2019", anno: "2020", importo: "€ 3.414,25", tipo: '5xmille' },
    { data: "30/07/2020", ente: "Agenzia delle Entrate", descrizione: "Quota 5Xmille 2017 e 2018", anno: "2020", importo: "€ 2.096,37", tipo: '5xmille' },
    { data: "02/11/20", ente: "Comune di Postua", descrizione: "Eregazione contributo liberale", anno: "2020", importo: "€ 300,00", tipo: 'diretto' },
    { data: "28/08/20", ente: "Comune di Sostegno", descrizione: "Erogazione liberale anno 2020", anno: "2020", importo: "€ 100,00", tipo: 'diretto' },
    { data: "15/06/20", ente: "ASL VC", descrizione: "Contributo per copertura assicurativa volontari anno 2019", anno: "2020", importo: "€ 233,70", tipo: 'diretto' },
    { data: "12/05/20", ente: "Comune di Pella", descrizione: "Contributo", anno: "2020", importo: "€ 600,00", tipo: 'diretto' },
    { data: "2020", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2020", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "2020", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2020", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2019
    { data: "24/12/19", ente: "Comune di Borgosesia", descrizione: "Contributi ad associazioni anno 2019", anno: "2019", importo: "€ 2.000,00", tipo: 'diretto' },
    { data: "28/11/19", ente: "Comune di Postua", descrizione: "Contributo liberale", anno: "2019", importo: "€ 200,00", tipo: 'diretto' },
    { data: "03/09/19", ente: "Comune di Sostegno", descrizione: "Contributo anno 2019", anno: "2019", importo: "€ 100,00", tipo: 'diretto' },
    { data: "25/07/19", ente: "Comune di Borgosesia", descrizione: "Contributi ad enti ed associazioni anno 2019", anno: "2019", importo: "€ 500,00", tipo: 'diretto' },
    { data: "14/06/19", ente: "Azienda sanitaria locale VC", descrizione: "Rimborso spese copertura assicurativa volontari anno 2018", anno: "2019", importo: "€ 212,00", tipo: 'diretto' },
    { data: "02/05/19", ente: "Comune di Villa del Bosco", descrizione: "Contributo progetto 'Ti aiuto io - insieme in viaggio anno 2019'", anno: "2019", importo: "€ 50,00", tipo: 'diretto' },
    { data: "30/04/19", ente: "Comune di Crevacuore", descrizione: "Contributo liberale", anno: "2019", importo: "€ 200,00", tipo: 'diretto' },
    { data: "02/04/19", ente: "Comune di Varallo", descrizione: "Contributo liberale", anno: "2019", importo: "€ 500,00", tipo: 'diretto' },
    { data: "2019", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2019", importo: "Comodato gratuito", tipo: 'vantaggio' },
    { data: "Dal 27/11/19", ente: "Comune di Varallo", descrizione: "Comodato d'uso locale piano 2 - Villa Barbara", anno: "2019", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2018
    { data: "17/12/18", ente: "Comune di Gattinara", descrizione: "Contributo liberale", anno: "2018", importo: "€ 400,00", tipo: 'diretto' },
    { data: "06/12/18", ente: "Comune di Postua", descrizione: "Contributo liberale", anno: "2018", importo: "€ 250,00", tipo: 'diretto' },
    { data: "14/05/18", ente: "Comune di Borgosesia", descrizione: "Contributo liberale", anno: "2018", importo: "€ 500,00", tipo: 'diretto' },
    { data: "11/05/18", ente: "Azienda sanitaria locale VC", descrizione: "Rimborso copertura assicurativa volontari anno 2017", anno: "2018", importo: "€ 103,20", tipo: 'diretto' },
    { data: "05/02/18", ente: "Comune di Borgosesia", descrizione: "Contributo liberale", anno: "2018", importo: "€ 500,00", tipo: 'diretto' },
    { data: "05/02/18", ente: "Comune di Borgosesia", descrizione: "Contributo liberale", anno: "2018", importo: "€ 250,00", tipo: 'diretto' },
    { data: "Dal 25/10/2016", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2018", importo: "Comodato gratuito", tipo: 'vantaggio' },

    // 2017
    { data: "2017", ente: "Comune di Borgosesia", descrizione: "Comodato d'uso locale via Santa Antida/via A.Giordano (piano 2)", anno: "2017", importo: "Comodato gratuito", tipo: 'vantaggio' },
  ];

  const years = ['Tutti', ...Array.from(new Set(contributi.map(c => c.anno))).sort((a, b) => b.localeCompare(a))];

  const filteredContributi = selectedYear === 'Tutti' 
    ? contributi 
    : contributi.filter(c => c.anno === selectedYear);

  const getIcon = (tipo: ContributoType) => {
    switch (tipo) {
      case 'diretto': return <Euro className="text-emerald-600" size={20} />;
      case '5xmille': return <Gift className="text-amber-600" size={20} />;
      case 'vantaggio': return <Building className="text-blue-600" size={20} />;
    }
  };

  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Trasparenza Contributi</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          Pubblicazione dei vantaggi economici ricevuti da Pubbliche Amministrazioni (L. 124/2017).
        </p>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-500 mr-2">
              <Filter size={20} />
              <span className="font-medium">Filtra per anno:</span>
            </div>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedYear === year 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-1.5 rounded-lg"><Euro className="text-emerald-600" size={16} /></div>
              <span className="text-slate-600 font-medium">Contributi Diretti</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-amber-100 p-1.5 rounded-lg"><Gift className="text-amber-600" size={16} /></div>
              <span className="text-slate-600 font-medium">5 per Mille</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-lg"><Building className="text-blue-600" size={16} /></div>
              <span className="text-slate-600 font-medium">Altri Vantaggi (Comodati)</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 font-bold text-slate-900">Data/Periodo</th>
                    <th className="p-6 font-bold text-slate-900">Ente Erogatore</th>
                    <th className="p-6 font-bold text-slate-900">Descrizione/Destinazione</th>
                    <th className="p-6 font-bold text-slate-900 text-right">Importo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredContributi.length > 0 ? (
                    filteredContributi.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="p-6 text-slate-500 text-sm">{item.data}</td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl group-hover:scale-110 transition-transform ${
                              item.tipo === 'diretto' ? 'bg-emerald-50' : 
                              item.tipo === '5xmille' ? 'bg-amber-50' : 'bg-blue-50'
                            }`}>
                              {getIcon(item.tipo)}
                            </div>
                            <span className="font-bold text-slate-900">{item.ente}</span>
                          </div>
                        </td>
                        <td className="p-6 text-slate-600 text-sm leading-relaxed max-w-md">
                          {item.descrizione}
                        </td>
                        <td className="p-6 text-right">
                          <span className={`font-black text-lg ${
                            item.tipo === 'diretto' ? 'text-emerald-600' : 
                            item.tipo === '5xmille' ? 'text-amber-600' : 'text-blue-600'
                          }`}>
                            {item.importo}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-20 text-center text-slate-400 italic">
                        Nessun dato disponibile per l'anno selezionato.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText size={120} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" />
                Nota Informativa
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                In ottemperanza a quanto previsto dall'art. 1, commi 125-129 della Legge n. 124/2017, l'Associazione IGEA ODV pubblica i dati relativi a sovvenzioni, sussidi, vantaggi, contributi o aiuti, in denaro o in natura, non aventi carattere generale e privi di natura corrispettiva, retributiva o risarcitoria, effettivamente erogati dalle pubbliche amministrazioni.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="block text-primary font-bold mb-1">C.F. Associazione:</span>
                  94038650027
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="block text-primary font-bold mb-1">Sede Legale:</span>
                  Via A. Giordano, 36 - Borgosesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
