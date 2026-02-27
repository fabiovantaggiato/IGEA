import React from 'react';

export default function CookiePolicy() {
  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Cookie Policy</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          Informativa estesa sull'uso dei cookie per il sito IGEA ODV.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
            <p>
              La presente Cookie Policy ha lo scopo di illustrare i tipi e le modalità di utilizzo dei cookie, nonché di fornire indicazioni su come rifiutare o eliminare i cookie presenti sul sito web.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Cosa sono i cookie?</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Nel corso della navigazione su un sito, l'utente può ricevere sul suo terminale anche cookie di siti o di web server diversi (c.d. cookie di "terze parti"); ciò accade perché sul sito web visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Tipologie di cookie utilizzati</h2>
              <p>
                Il nostro sito utilizza esclusivamente cookie tecnici e analitici anonimizzati che non richiedono il consenso preventivo dell'utente.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Cookie tecnici:</strong> sono quelli utilizzati al solo fine di effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'abbonato o dall'utente a erogare tale servizio.
                </li>
                <li>
                  <strong>Cookie analitici:</strong> utilizzati per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso. Questi cookie sono assimilati ai cookie tecnici in quanto il servizio è anonimizzato.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookie di terze parti</h2>
              <p>
                Visitando un sito web si possono ricevere cookie sia dal sito visitato ("proprietari"), sia da siti gestiti da altre organizzazioni ("terze parti"). Un esempio notevole è rappresentato dalla presenza dei "social plugin" per Facebook, Twitter, Google+ e LinkedIn. Si tratta di parti della pagina visitata generate direttamente dai suddetti siti ed integrati nella pagina del sito ospitante. L'utilizzo più comune dei social plugin è finalizzato alla condivisione dei contenuti sui social network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Come gestire i cookie</h2>
              <p>
                L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione dei cookie "terze parti" non pregiudica in alcun modo la navigabilità. L'impostazione può essere definita in modo specifico per i diversi siti e applicazioni web. Inoltre i migliori browser consentono di definire impostazioni diverse per i cookie "proprietari" e per quelli di "terze parti".
              </p>
              <p className="mt-4">
                Per maggiori informazioni su come gestire i cookie nei principali browser, è possibile consultare i seguenti link:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Internet Explorer / Edge</li>
                <li>Safari</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                Ultimo aggiornamento: Febbraio 2026
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
