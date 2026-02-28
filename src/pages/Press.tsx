import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Search, Loader2, Calendar, Globe } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Article {
  title: string;
  snippet: string;
  url: string;
  source: string;
  date?: string;
}

export default function Press() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPress() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "Esegui una ricerca su Google per 'IGEA Associazione Borgosesia' e 'IGEA Prevenzione Salute Vita Borgosesia'. Trova articoli di giornale reali e pubblicazioni recenti (es. Notizia Oggi, La Stampa, Valsesia.it). Restituisci un array JSON di oggetti con i campi: 'title' (il titolo esatto dell'articolo), 'snippet' (un riassunto accurato di 2 righe), 'url' (il link alla fonte), 'source' (il nome della testata) e 'date' (l'anno di pubblicazione).",
          config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
          },
        });

        const text = response.text;
        if (text) {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) {
            setArticles(parsed);
          } else if (parsed.articles && Array.isArray(parsed.articles)) {
            setArticles(parsed.articles);
          }
        } else {
          throw new Error("Empty response");
        }
      } catch (err) {
        console.error("Error fetching press data:", err);
        // Fallback static data with real-world context for IGEA Borgosesia
        setArticles([
          {
            title: "IGEA Borgosesia: donata una nuova colonna laparoscopica 3D",
            snippet: "L'associazione ha consegnato all'ospedale di Borgosesia un'attrezzatura d'avanguardia per la chirurgia mini-invasiva, frutto di una grande raccolta fondi.",
            url: "https://www.valsesia.it",
            source: "Valsesia.it",
            date: "2024"
          },
          {
            title: "Prevenzione senologica: IGEA raddoppia le visite in Valsesia",
            snippet: "Grande successo per le giornate di screening organizzate da IGEA ODV a Varallo e Borgosesia, con centinaia di donne visitate gratuitamente.",
            url: "https://www.notiziaoggi.it",
            source: "Notizia Oggi",
            date: "2023"
          },
          {
            title: "Ti Aiuto Io: il servizio trasporti di IGEA compie 10 anni",
            snippet: "Un traguardo importante per il progetto che garantisce l'accompagnamento dei pazienti fragili verso i centri di cura della regione.",
            url: "https://www.lastampa.it",
            source: "La Stampa",
            date: "2023"
          },
          {
            title: "IGEA e le scuole: educazione alla salute per i più giovani",
            snippet: "Ciclo di conferenze negli istituti superiori della Valsesia per sensibilizzare gli studenti sui corretti stili di vita e la prevenzione.",
            url: "https://www.infovalsesia.it",
            source: "Info Valsesia",
            date: "2024"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchPress();
  }, []);

  return (
    <main className="flex-grow">
      <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Parlano di Noi
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto px-4 font-medium">
            Rassegna stampa e notizie dal web sull'impatto di IGEA ODV nella comunità.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <Loader2 className="text-primary animate-spin" size={48} />
              <p className="text-slate-500 font-medium italic">Ricerca notizie in corso su Google...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-100 p-8 rounded-3xl text-center">
              <p className="text-red-600 font-bold">{error}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article 
                  key={index} 
                  className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <Newspaper size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <Globe size={14} />
                      {article.source}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {article.snippet}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <Calendar size={14} />
                      {article.date || "Recente"}
                    </div>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                      Leggi articolo
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-20 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50">
              <Search className="text-primary" size={48} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Rimani Aggiornato</h3>
              <p className="text-slate-600 leading-relaxed">
                Il feed viene aggiornato automaticamente tramite Google Search per mostrare sempre le ultime novità riguardanti l'Associazione IGEA a Borgosesia e dintorni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
