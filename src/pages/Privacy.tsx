import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          Informativa sul trattamento dei dati personali ai sensi del Regolamento UE n. 2016/679 (GDPR).
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
              <ShieldCheck className="text-primary" size={40} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Informativa Privacy</h2>
                <p className="text-slate-500">Ultimo aggiornamento: Febbraio 2024</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
              <p>
                Ai sensi dell’art. 13 del Regolamento UE n. 2016/679 e della normativa vigente in materia di tutela e trattamento dei dati personali, desideriamo informarLa che i dati personali da Lei forniti formeranno oggetto di trattamento nel rispetto della normativa sopra richiamata e degli obblighi di riservatezza cui è tenuta il Titolare del Trattamento, come infra individuato.
              </p>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Titolare e responsabile del trattamento</h3>
                <p>
                  Titolare del trattamento dei dati è l’<strong>Associazione IGEA-ODV</strong>, in persona del legale rappresentante pro tempore, con sede in Borgosesia (VC), Piazza Mazzini n.19, Codice Fiscale 94038650027 (e-mail: assigeaborgosesia@gmail.com – pec: assigeaborgosesia@pec.it – tel. 016324870 - tel. 333 8022282), di seguito anche Titolare del trattamento.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Finalità del trattamento e base giuridica</h3>
                <p>
                  I Suoi dati personali saranno trattati per costituire e gestire il Suo rapporto di fornitura di beni o servizi al Titolare del trattamento nell’esclusivo ambito del perseguimento dell’oggetto sociale della Associazione IGEA-ODV.
                  I dati saranno trattati anche al fine di adempiere agli eventuali obblighi previsti in ambito fiscale e contabile eventualmente esistenti in capo al Titolare del trattamento.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Modalità di trattamento</h3>
                <p>
                  Il trattamento dei dati avverrà sia con mezzi informatici sia con supporti cartacei e verrà gestito direttamente dal Titolare del trattamento o soggetti da quest’ultimo istruiti ed incaricati, eventualmente con l’ausilio di responsabili esterni o collaboratori a ciò specificatamente incaricati ed istruiti ai sensi dell’art. 29 GDPR.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Categorie particolari di dati personali</h3>
                <p>
                  Il trattamento dei Suoi dati non riguarda i dati appartenenti a “categorie particolari di dati personali” (c.d. “particolari”), cioè dati idonei a rivelare, a mero titolo di esempio, il suo stato di salute. Il trattamento comprenderà, nel rispetto dei limiti e delle condizioni posti dalla normativa comunitaria e nazionale, tutte le operazioni o complesso di operazioni necessarie al trattamento in questione.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Destinatari dei dati</h3>
                <p>
                  I dati potranno essere comunicati a dirigenti, volontari o fornitori del Titolare del trattamento.
                  I dati potrebbero essere altresì comunicati a soggetti terzi rispetto alla struttura organizzativa del Titolare del Trattamento, quali professionisti ed Enti Pubblici (INPS, INAIL, Agenzie delle Entrate) solo nel caso in cui la comunicazione sia necessaria per il corretto adempimento delle finalità di cui al punto 2.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Trasferimento dei dati</h3>
                <p>
                  È possibile che alcuni fornitori del Titolare del Trattamento posseggano archivi ubicati negli Stati Uniti d’America, così determinando il trasferimento dei Suoi dati in tale Stato.
                  A tal proposito Le segnaliamo la liceità di tale trasferimento in virtù della decisione di adeguatezza della Commissione Europea adottata il 10.07.2023 in relazione al Trans-Atlantic Data Privacy Framework, che ha accertato l’avvenuta introduzione, nel quadro giuridico statunitense, dei concetti di necessità e proporzionalità nella raccolta e nell’utilizzo dei dati personali.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">7. Periodo di conservazione</h3>
                <p>
                  I Suoi dati verranno conservati per il periodo necessario all’espletamento delle finalità di cui al punto 2 e comunque per un tempo non superiore a dieci anni dalla cessazione del rapporto contrattuale (come sopra individuato) con il Titolare del trattamento.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">8. Rifiuto di conferimento dei dati</h3>
                <p>
                  Il conferimento dei dati personali non è obbligatorio, ma in suo difetto non sarà possibile dare seguito alla gestione del rapporto con il Titolare del Trattamento, come sopra individuato.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">9. Diritto di accesso ai dati personali e altri diritti</h3>
                <p>
                  Al fine di assicurare un trattamento corretto e trasparente dei Suoi dati, La informiamo inoltre che in qualsiasi momento Lei potrà esercitare il diritto:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>di chiedere l'accesso ai Suoi dati personali, la rettifica, la cancellazione degli stessi o la limitazione del trattamento che La riguardano;</li>
                  <li>di opporsi al trattamento dei Suoi dati salvo che essi siano ancora necessari rispetto alle finalità per le quali sono stati raccolti;</li>
                  <li>di ottenere l’attestazione che le operazioni di cui sopra sono state portate a conoscenza di coloro ai quali i dati sono stati comunicati;</li>
                  <li>di proporre reclamo al Garante per la Protezione dei Dati Personali, con sede in Roma.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
