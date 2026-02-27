import React from 'react';
import { FileText } from 'lucide-react';

export default function Statuto() {
  return (
    <main className="flex-grow">
      <div className="bg-primary py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Statuto dell'Associazione</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
          Statuto dell'Organizzazione di Volontariato "IGEA Prevenzione Salute Vita ODV"
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
              <FileText className="text-primary" size={40} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Statuto Sociale</h2>
                <p className="text-slate-500">Documento Ufficiale</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed whitespace-pre-line">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Statuto dell'Organizzazione di Volontariato "IGEA Prevenzione Salute Vita ODV"</h2>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 1 - Costituzione, denominazione e sede</h3>
                <p>
                  E' costituita conformemente alla Carta Costituzionale e al D.Lgs. n. 117 del 3 luglio 2017 e s.m.i., l'Organizzazione di Volontariato "IGEA Prevenzione Salute Vita Odv".
                  {"\n\n"}
                  La denominazione dell'Associazione sarà automaticamente integrata dall'acronimo ETS (Ente del Terzo settore) solo successivamente e per effetto dell'iscrizione dell'associazione al RUNTS.
                  {"\n\n"}
                  L'Associazione ha sede legale nel Comune di Borgosesia via A. Giordano, 36. Il trasferimento della sede legale non comporta modifica statutaria, se avviene all'interno dello stesso Comune e deve essere comunicata entro 30 giorni dal verificarsi dell'evento agli enti gestori di pubblici Registri presso i quali l'organizzazione è iscritta.
                  {"\n\n"}
                  La durata dell'ODV non è predeterminata ed essa può essere sciolta con delibera dell'Assemblea straordinaria con la maggioranza prevista all'art. 18.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 2 - Scopi e finalità</h3>
                <p>
                  L'ODV è apartitica, aconfessionale, a struttura democratica e senza scopo di lucro e, ispirandosi a finalità civiche, solidaristiche e di utilità sociale si prefigge lo scopo di solidarietà soprattutto nel campo dell'assistenza sociale e socio sanitaria a favore di chiunque ne abbisogni. L'Associazione ha come scopo principale quello di organizzare ed effettuare gratuitamente visite specialistiche in diverse discipline e di favorire la promozione, la cura e l'assistenza, ivi compresa quella domiciliare.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 3 - Attività</h3>
                <p>
                  Per la realizzazione dello scopo di cui all'art. 2 e nell'intento di agire a favore di tutta la collettività, l'ODV si propone, ai sensi dell'art. 5 del D.lgs 117/2017 e s.m.i, di svolgere in via esclusiva o principale le seguenti attività di interesse generale:
                  {"\n\n"}
                  a) interventi e prestazioni sanitarie;
                  {"\n\n"}
                  b) prestazioni socio-sanitarie di cui al decreto del Presidente del Consiglio dei ministri 14 febbraio 2001, pubblicato nella Gazzetta Ufficiale n. 129 del 6 giugno 2001, e successive modifiche;
                  {"\n\n"}
                  c) educazione, istruzione e formazione, ai sensi della legge 28 marzo 2003, n. 53, e successive modificazioni, nonché le attività culturali di interesse sociale con finalità educativa;
                  {"\n\n"}
                  d) organizzazione e gestione di attività culturali, artistiche o ricreative sociale, incluse attività, anche editoriali, di promozione e diffusione della cultura e della pratica del volontariato e delle attività di interesse generale di cui al presente articolo;
                  {"\n\n"}
                  e) beneficenza, sostegno a distanza, cessione gratuita di alimenti o prodotti di cui alla legge 19 agosto 2016, n. 166, e successive modificazioni, o erogazioni di denaro, beni o servizi a sostegno di persone svantaggiate o di attività di interesse generale a norma del presente articolo.
                  {"\n\n"}
                  Nello specifico, a titolo esemplificativo L'ODV intende favorire tramite iniziative varie e concerti la raccolta fondi per aiutare i cittadini della Valsesia-Valsessera, visite gratuite di prevenzione, informazione sanitaria tramite conferenze e progetti vari nelle scuole e sul territorio, trasporti di ammalati presso vari presidi ospedalieri, ecc..
                  {"\n\n"}
                  2) Le attività di cui al comma precedente sono svolte dall'ODV, prevalentemente a favore di terzi e tramite le prestazioni fornite dai propri aderenti in modo personale, spontaneo e gratuito.
                  {"\n\n"}
                  3) L'ODV, inoltre, può esercitare attività diverse, strumentali e secondarie rispetto alle attività di interesse generale, ai sensi e nei limiti previsti dall'art. 6 del D.lgs 117/2017 e s.m.i. La loro individuazione può essere operata su proposta del Consiglio Direttivo ed approvata in Assemblea dei Soci. Nel caso l'Associazione eserciti attività diverse, il Consiglio Direttivo ne attesta il carattere secondario e strumentale delle stesse nei documenti di bilancio ai sensi dell'art. 13 comma 6 D.lgs 117/2017 e s.m.i..
                  {"\n\n"}
                  4) L'attività del volontario non può essere retribuita in alcun modo nemmeno da eventuali diretti beneficiari. Al volontario possono solo essere rimborsate dall'Organizzazione di volontariato le spese vive effettivamente sostenute per l'attività prestata, previa documentazione ed entro limiti preventivamente stabiliti dall'Assemblea dei soci. Le spese sostenute dal volontario possono essere rimborsate anche a fronte di una autocertificazione resa ai sensi dell'articolo 46 del decreto del Presidente della Repubblica 28 dicembre 2000, n. 445, purché non superino l'importo stabilito dall'organo sociale competente il quale delibera sulle tipologie di spese e sulle attività di volontariato per le quali è ammessa questa modalità di rimborso (ai sensi dell'art. 17 D.lgs 117/2017 e s.m.i). Ogni forma di rapporto economico con l'ODV derivante da lavoro dipendente o autonomo, è incompatibile con la qualità di volontario.
                  {"\n\n"}
                  5) L'ODV ha l'obbligo di assicurare i propri volontari ai sensi dell'art. 18 D.lgs 117/2017 e s.m.i.
                  {"\n\n"}
                  6) L'ODV può avvalersi di prestazioni di lavoro autonomo o dipendente esclusivamente entro i limiti necessari per assicurare il regolare funzionamento o per specializzare l'attività da essa svolta. In ogni caso, il numero dei lavoratori impiegati nell'attività non può essere superiore al cinquanta per cento del numero dei volontari.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 4 - Patrimonio e risorse economiche</h3>
                <p>
                  Il patrimonio dell'ODV durante la vita della stessa è indivisibile, ed è costituito da:
                  {"\n\n"}
                  a. Beni mobili ed immobili che sono o diverranno di proprietà dell'ODV;
                  {"\n\n"}
                  b. Eventuali erogazioni, donazioni o lasciti pervenuti all'ODV;
                  {"\n\n"}
                  c. Eventuali fondi di riserva costituiti con le eccedenze del bilancio.
                  {"\n\n"}
                  L'ODV trae le risorse economiche per il suo funzionamento e lo svolgimento delle proprie attività da:
                  {"\n\n"}
                  a. Quote associative e contributi degli aderenti;
                  {"\n\n"}
                  b. Contributi pubblici e privati;
                  {"\n\n"}
                  c. Donazioni e lasciti testamentari;
                  {"\n\n"}
                  d. Rendite patrimoniali;
                  {"\n\n"}
                  e. Attività di raccolta fondi (ai sensi dell'art. 7 117/2017 e s.m.i);
                  {"\n\n"}
                  f. Ogni altra entrata o provento compatibile con le finalità dell'associazione e riconducibile alle disposizioni del d.lgs 117/2017 e s.m.i.;
                  {"\n\n"}
                  g. Attività "diverse" di cui all'art. 6 del D.lgs 117/2017 e s.m.i (purché lo statuto lo consenta e siano secondarie e strumentali).
                  {"\n\n"}
                  L'esercizio sociale dell'ODV ha inizio e termine rispettivamente il 1° Gennaio ed il 31 Dicembre di ogni anno. Al termine di ogni esercizio il Consiglio Direttivo redige il bilancio ai sensi degli art. 13 e 14 del D.lgs 117/2017 e s.m.i e lo sottopone per l'approvazione all'Assemblea dei soci entro il mese di Aprile. Il bilancio consuntivo è depositato presso la sede dell'ODV, almeno sette giorni prima dell'assemblea e può essere consultato da ogni associato.
                  {"\n\n"}
                  4) E' fatto obbligo di reinvestire l'eventuale avanzo di gestione a favore di attività istituzionali statutariamente previste ai fini dell'esclusivo perseguimento di finalità civiche, solidaristiche e di utilità sociale.
                  {"\n\n"}
                  5) E' fatto divieto di dividere anche in forme indirette, gli eventuali utili ed avanzi di gestione, fondi e riserve comunque denominate dell'ODV a fondatori, associati, lavoratori e collaboratori, amministratori ed altri componenti degli organi sociali, anche nel caso di recesso o di ogni altra ipotesi di scioglimento individuale del rapporto associativo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 5 - Soci</h3>
                <p>
                  Ai sensi dell'art. 32 D.lgs 117/2017 e s.m.i il numero dei soci è illimitato. Possono fare parte dell'ODV tutte le persone fisiche in numero non inferiore a sette che condividono gli scopi e le finalità dell'organizzazione e si impegnano spontaneamente per la loro attuazione.
                  {"\n\n"}
                  L'adesione all'ODV è a tempo indeterminato, fatto salvo il diritto di recesso di cui all'art. 6.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 6 - Criteri di ammissione ed esclusione</h3>
                <p>
                  L'ammissione di un nuovo socio è regolata in base a criteri non discriminatori, coerenti con le finalità perseguite e l'attività d'interesse generale svolta. Viene deliberata dal Consiglio Direttivo ed è subordinata alla presentazione di apposita domanda scritta da parte dell'interessato, con la quale l'interessato stesso si impegna a rispettare lo Statuto e ad osservare gli eventuali regolamenti e le deliberazioni adottate dagli organi dell'ODV.
                  {"\n\n"}
                  Avverso l'eventuale rigetto dell'istanza, che deve essere sempre motivata e comunicata all'interessato entro 60 giorni è ammesso ricorso all'assemblea dei soci.
                  {"\n\n"}
                  Il ricorso all'assemblea dei soci è ammesso entro 60 giorni dal ricevimento della relativa comunicazione.
                  {"\n\n"}
                  Il Consiglio direttivo comunica l'ammissione agli interessati e cura l'annotazione dei nuovi aderenti nel libro soci dopo che gli stessi avranno versato la quota stabilita dall'Assemblea. La qualità di socio è intrasmissibile.
                  {"\n\n"}
                  La qualità di Socio si perde:
                  {"\n\n"}
                  a. per recesso, che deve essere comunicato per iscritto all'ODV;
                  {"\n\n"}
                  b. per esclusione conseguente a comportamento contrastante con gli scopi dell'ODV;
                  {"\n\n"}
                  c. per morosità rispetto al mancato pagamento della quota annuale, trascorsi trenta giorni dall'eventuale sollecito scritto.
                  {"\n\n"}
                  L'esclusione o la decadenza dei soci è deliberata dall'Assemblea su proposta del Consiglio Direttivo. In ogni caso, prima di procedere all'esclusione di un Associato, devono essergli contestati per iscritto gli addebiti che gli vengono mossi, consentendogli facoltà di replica.
                  {"\n\n"}
                  La perdita della qualifica di associato comporta la decadenza automatica da qualsiasi carica ricoperta sia all'interno dell'ODV sia all'esterno per designazione o delega.
                  {"\n\n"}
                  In tutti i casi di scioglimento del rapporto associativo limitatamente ad un associato, questi o i suoi eredi non hanno diritto al rimborso delle quote annualmente versate, né hanno alcun diritto sul patrimonio dell'ODV.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 7 - Diritti e Doveri dei soci</h3>
                <p>
                  Tutti i soci godono degli stessi diritti e doveri di partecipazione alla vita dell'ODV ed alla sua attività. In modo particolare:
                  {"\n\n"}
                  a) I soci hanno diritto:
                  {"\n"}
                  di partecipare a tutte le attività promosse dall'ODV, ricevendone informazioni e avendo facoltà di verifica nei limiti stabiliti dalla legislazione vigente, dal presente Statuto e dagli eventuali regolamenti dell'ODV;
                  {"\n"}
                  di eleggere gli organi sociali e di essere eletti negli stessi;
                  {"\n"}
                  di esprimere il proprio voto in ordine all'approvazione delle deliberazioni degli organi associativi, degli eventuali regolamenti e di modifiche allo statuto;
                  {"\n"}
                  di consultare i libri sociali presentando richiesta scritta al Consiglio direttivo.
                  {"\n\n"}
                  b) I soci sono obbligati:
                  {"\n"}
                  all'osservanza dello Statuto, del Regolamento e delle deliberazioni assunte dagli organi sociali;
                  {"\n"}
                  a mantenere sempre un comportamento degno nei confronti dell'ODV;
                  {"\n"}
                  al pagamento nei termini della quota associativa, qualora annualmente stabilita dall'Assemblea dei soci. La quota associativa è intrasmissibile e non rivalutabile e in nessun caso può essere restituita.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 8 - Organi dell'ODV</h3>
                <p>
                  Sono organi dell'ODV:
                  {"\n\n"}
                  a. L'Assemblea dei soci;
                  {"\n\n"}
                  b. Il Consiglio direttivo;
                  {"\n\n"}
                  c. Il Presidente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 9 - Assemblea dei Soci</h3>
                <p>
                  1) L'Assemblea dei soci è l'organo sovrano dell'ODV, regola l'attività della stessa ed è composta da tutti i soci.
                  {"\n"}
                  2) Hanno diritto di intervenire in Assemblea esercitando il diritto di voto tutti gli associati in regola con il pagamento della quota associativa annuale e che non abbiano avuto o non abbiano in corso provvedimenti disciplinari.
                  {"\n"}
                  3) Ciascun associato dispone del voto singolo e può farsi rappresentare da un altro associato, conferendo allo stesso delega scritta anche in calce all'avviso di convocazione. Nessun associato può rappresentare più di 3 associati nelle Associazioni con meno di 500 soci e più di 5 associati nelle Associazioni con più di 500 soci.
                  {"\n"}
                  4) L'Assemblea è presieduta dal Presidente del Consiglio Direttivo o da altro socio appositamente eletto in sede assembleare. In caso di necessità l'Assemblea può eleggere un segretario.
                  {"\n"}
                  5) L'Assemblea si riunisce su convocazione del Presidente. Inoltre, deve essere convocata quando il Consiglio Direttivo ne ravvisa la necessità oppure quando ne è fatta richiesta motivata da almeno 1/10 (un decimo) degli associati aventi diritto di voto.
                  {"\n"}
                  6) La convocazione è inoltrata per iscritto, anche in forma elettronica/telematica con comprovata ricezione, con 7 (sette) giorni di anticipo e deve contenere l'ordine del giorno, il luogo la data e l'orario della prima convocazione e della seconda convocazione. Quest'ultima deve avere luogo in data diversa dalla prima.
                  {"\n"}
                  7) In difetto di convocazione formale o di mancato rispetto dei termini di preavviso sono ugualmente valide le adunanze cui partecipano di persona o per delega tutti i soci.
                  {"\n"}
                  8) Le delibere assunte dall'assemblea vincolano tutti i soci anche assenti o dissenzienti. Le discussioni e le deliberazioni dell'Assemblea sono riportate in un verbale redatto da un componente dell'Assemblea appositamente eletto e sottoscritto dallo stesso e dal Presidente.
                  {"\n"}
                  9) L'assemblea può essere ordinaria o straordinaria. E' straordinaria l'assemblea convocata per la modifica dello Statuto oppure per lo scioglimento dell'ODV. E' ordinaria in tutti gli altri casi.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 10 - Assemblea ordinaria dei Soci</h3>
                <p>
                  L'assemblea ordinaria è valida in prima convocazione se è presente la maggioranza degli iscritti aventi diritto di voto ; in seconda convocazione, qualunque sia il numero degli associati intervenuti o rappresentati. Nelle deliberazioni di approvazione del bilancio e in quelle che riguardano la loro responsabilità gli amministratori non votano.
                  {"\n\n"}
                  Le deliberazioni dell'Assemblea sono valide quando vengono approvate dalla maggioranza degli associati presenti o rappresentati.
                  {"\n\n"}
                  L'Assemblea ordinaria deve essere convocata almeno una volta l'anno per l'approvazione del bilancio, entro 4 mesi dalla chiusura dell'esercizio finanziario.
                  {"\n\n"}
                  L'Assemblea ordinaria:
                  {"\n"}
                  a. approva il bilancio e la relazione di missione ai sensi dell'art. 13 del D. Lgs 117/2017;
                  {"\n"}
                  b. discute ed approva i programmi di attività;
                  {"\n"}
                  c. elegge tra i soci i componenti del Consiglio Direttivo approvandone preventivamente il numero e li revoca;
                  {"\n"}
                  d. nomina e revoca il soggetto incaricato della revisione legale dei conti, stabilendone l'eventuale compenso nel caso che i revisori siano esterni all'ODV (se previsto);
                  {"\n"}
                  e. nomina e revoca l'organo di controllo (se previsto);
                  {"\n"}
                  f. elegge e revoca i membri del Collegio dei Probiviri (se previsto);
                  {"\n"}
                  g. delibera sulla responsabilità dei componenti degli organi sociali e promuove azione di responsabilità nei loro confronti;
                  {"\n"}
                  h. approva l'eventuale regolamento dei lavori assembleari;
                  {"\n"}
                  i. ratifica la sostituzione dei membri del Consiglio Direttivo dimissionari, decaduti o deceduti deliberata dal Consiglio Direttivo attingendo dalla graduatoria dei non eletti;
                  {"\n"}
                  j. approva l'eventuale regolamento e le sue variazioni;
                  {"\n"}
                  k. delibera sulla quota associativa annuale e sugli eventuali contributi straordinari;
                  {"\n"}
                  l. delibera sull'esclusione dei soci;
                  {"\n"}
                  m. delibera su tutti gli altri oggetti sottoposti al suo esame dal Consiglio Direttivo ed attribuiti dalla legge, dall'atto costitutivo o dallo statuto alla sua competenza;
                  {"\n"}
                  n. delibera sui ricorsi in caso di reiezione di domanda di ammissione di nuovi associati;
                  {"\n"}
                  o. delega il Consiglio Direttivo a compiere tutte le azioni necessarie a realizzare gli obiettivi definiti dall'ODV stesso;
                  {"\n"}
                  p. determina i limiti di spesa e approva i rimborsi massimi previsti per gli associati che prestano attività di volontariato. Tali spese devono essere opportunamente documentate, nelle modalità previste dall'art. 3 comma 4 dello Statuto;
                  {"\n"}
                  q. approva l'ammontare dei compensi per le eventuali prestazioni retribuite che si rendano necessarie ai fini del regolare funzionamento delle attività dell'ODV;
                  {"\n"}
                  r. delibera sull'esercizio e sull'individuazione di eventuali attività diverse ai sensi dell'art. 3 comma del presente Statuto.
                  {"\n\n"}
                  Le deliberazioni assembleari devono essere rese note agli associati ed inserite nel libro verbale delle riunioni e deliberazioni dell'Assemblea tenuto a cura del Consiglio direttivo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 11 - Assemblea straordinaria dei Soci</h3>
                <p>
                  La convocazione dell'Assemblea straordinaria si effettua con le modalità previste dall'art. 9.
                  {"\n\n"}
                  Per deliberare lo scioglimento dell'ODV e la devoluzione del patrimonio occorre il voto favorevole di almeno tre quarti dei soci.
                  {"\n\n"}
                  L'Assemblea straordinaria dei soci approva eventuali modifiche dell'atto costitutivo o dello statuto con la presenza, in proprio o per delega, di due terzi dei soci e con decisione deliberata a maggioranza dei presenti.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 12 - Consiglio Direttivo</h3>
                <p>
                  Il Consiglio Direttivo è composto da un minimo di 3 fino ad un massimo di 13 consiglieri scelti fra i soci, che durano in carica tre anni e sono rieleggibili fino a un massimo di tre mandati consecutivi, salvo il caso in cui non si presentino nuove candidature per il totale o parziale rinnovo del Direttivo; in questo caso l'Assemblea può rieleggere i componenti uscenti. Si applica l'articolo 2382 del codice civile.
                  {"\n\n"}
                  L'Assemblea che procede alla elezione determina preliminarmente il numero di Consiglieri in seno all'eligendo Consiglio Direttivo.
                  {"\n\n"}
                  Il Consiglio Direttivo elegge tra i suoi membri, a maggioranza assoluta dei voti, il Presidente, il Vicepresidente, il Tesoriere, il Segretario.
                  {"\n\n"}
                  Il Tesoriere cura la riscossione delle entrate ed il pagamento delle spese dell'ODV, ed in genere ogni atto contenente un'attribuzione o una diminuzione del patrimonio dell'ODV ; cura la tenuta del libro cassa e di tutti i documenti che specificatamente riguardano il servizio affidatogli dal Consiglio Direttivo.
                  {"\n\n"}
                  In caso di morte, dimissioni o esclusione di Consiglieri prima della scadenza del mandato, il Consiglio Direttivo provvede alla loro sostituzione utilizzando l'elenco dei non eletti: la sostituzione va ratificata dalla successiva Assemblea ordinaria e dura sino alla scadenza del mandato del Consiglio direttivo. In caso di mancanza od esaurimento dell'elenco dei non eletti, o loro indisponibilità l'assemblea provvede alla surroga mediante elezione.
                  {"\n\n"}
                  Nel caso in cui decada oltre la metà dei membri del Consiglio Direttivo, l'Assemblea provvede tramite elezione al rinnovo dell'intero organo.
                  {"\n\n"}
                  Tutte le cariche associative sono ricoperte a titolo gratuito. Ai Consiglieri possono essere rimborsate le spese effettivamente sostenute e rendicontate allo svolgimento degli incarichi e delle attività per conto dell'ODV, entro il massimo stabilito dall'Assemblea dei soci.
                  {"\n\n"}
                  Il Consiglio Direttivo è responsabile verso l'Assemblea della gestione operativa, attua i mandati e le decisioni dell'Assemblea ed è investito dei più ampi poteri per la gestione ordinaria e straordinaria dell'ODV, fatti salvi quelli che la legge e lo Statuto attribuiscono all'Assemblea. In particolare esso svolge le seguenti attività:
                  {"\n"}
                  a. attua tutte le deliberazioni dell'Assemblea;
                  {"\n"}
                  b. redige e presenta all'Assemblea il bilancio e la relazione di missione ai sensi dell'art. 13 del D.Lgs 117/2017 e s.m.i.;
                  {"\n"}
                  c. delibera sulle domande di nuove adesioni;
                  {"\n"}
                  d. sottopone all'Assemblea le proposte di esclusione dei soci;
                  {"\n"}
                  e. sottopone all'approvazione dell'Assemblea le quote sociali annue per gli associati e gli eventuali contributi straordinari;
                  {"\n"}
                  f. propone l'esercizio e l'individuazione di eventuali attività diverse ai sensi dell'art. 3 comma 3 del presente Statuto;
                  {"\n"}
                  g. ha facoltà di costituire Comitati, a cui partecipano gli associati o esperti anche non soci, per la definizione e la realizzazione concreta di specifici programmi e progetti.
                  {"\n\n"}
                  Il Consiglio Direttivo è presieduto dal Presidente o, in caso di sua assenza, dal Vicepresidente o, in assenza di quest'ultimo, da un membro eletto allo scopo dal Consiglio Direttivo.
                  {"\n\n"}
                  Il Consiglio Direttivo è convocato dal Presidente tre volte l'anno, e tutte le volte nelle quali vi sia materia su cui deliberare, oppure quando ne sia fatta domanda da almeno 1/3 (un terzo) dei componenti.
                  {"\n\n"}
                  La convocazione è inoltrata per iscritto, anche in forma elettronica/telematica, con 7 (sette) giorni di anticipo e deve contenere l'ordine del giorno, il luogo, la data e l'orario della seduta. In difetto di convocazione formale o di mancato rispetto dei termini di preavviso sono ugualmente valide le riunioni cui partecipano tutti i membri del Consiglio Direttivo.
                  {"\n\n"}
                  I verbali delle sedute del Consiglio Direttivo, redatti a cura di un segretario e sottoscritti dallo stesso e da chi ha presieduto la riunione, vengono conservati agli atti.
                  {"\n\n"}
                  Per la validità delle deliberazioni occorre la presenza effettiva della maggioranza dei membri del Consiglio Direttivo. Le deliberazioni sono valide con il voto della maggioranza dei presenti, in caso di parità di voti la deliberazione si considera non approvata.
                  {"\n\n"}
                  Il potere di rappresentanza attribuito agli amministratori è generale. Le limitazioni del potere di rappresentanza non sono opponibili ai terzi se non sono iscritte nel Registro unico nazionale del Terzo settore o se non si provi che i terzi ne erano a conoscenza.
                  {"\n\n"}
                  L'obbligatorietà dell'iscrizione delle limitazioni del potere di rappresentanza di cui al comma 14 avrà efficacia a partire dall'operatività del Registro unico nazionale del Terzo settore.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 13 - Presidente</h3>
                <p>
                  Il Presidente è eletto dal Consiglio Direttivo nel suo seno.
                  {"\n\n"}
                  Il Presidente ha la rappresentanza legale dell'Associazione di fronte a terzi e in giudizio ; cura l'attuazione delle deliberazioni del Consiglio Direttivo; sovrintende a tutte le attività dell'ODV ; ha la facoltà di aprire conti correnti per conto dell'ODV ; convoca e presiede il Consiglio Direttivo, del cui operato è garante di fronte all'Assemblea; convoca l'Assemblea dei soci.
                  {"\n\n"}
                  In caso di assenza o impedimento le sue funzioni spettano al Vicepresidente.
                  {"\n\n"}
                  Il Presidente, in caso di urgenza, assume i poteri del Consiglio Direttivo e adotta i provvedimenti necessari, convocando contestualmente il Consiglio per la loro approvazione: i provvedimenti urgenti del Presidente vengono esaminati obbligatoriamente dal Consiglio Direttivo alla prima riunione utile.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 14 - Organo di controllo</h3>
                <p>
                  Qualora se ne ravvisi la necessità o sia previsto per legge ai sensi dell'art. 30 D.lgs 117/2017 e s.m.i, può essere nominato dall'Assemblea un organo di controllo anche monocratico.
                  {"\n\n"}
                  Nel caso in cui l'organo di controllo sia scelto tra i soci, lo stesso non può essere retribuito.
                  {"\n\n"}
                  L'organo di controllo vigila sull'osservanza della legge e dello statuto e sul rispetto dei principi di corretta amministrazione, anche con riferimento alle disposizioni del decreto legislativo 8 giugno 2001, n. 231, qualora applicabili, nonché sull'adeguatezza dell'assetto organizzativo, amministrativo e contabile e sul suo concreto funzionamento. Esso esercita inoltre il controllo contabile, nel caso in cui non sia nominato un soggetto incaricato della revisione legale dei conti o nel caso in cui un suo componente sia un revisore legale iscritto nell'apposito registro.
                  {"\n\n"}
                  L'organo di controllo esercita inoltre compiti di monitoraggio dell'osservanza delle finalità civiche, solidaristiche e di utilità sociale, avuto particolare riguardo alle disposizioni di cui agli articoli 5, 6, 7 e 8 del D.Lgs. 117/2017, ed attesta che il bilancio sociale, ove previsto per legge, sia stato redatto in conformità alle linee guida di cui all'articolo 14 del D.lgs 117/2017 e s.m.i.. Il bilancio sociale dà atto degli esiti del monitoraggio svolto dai sindaci.
                  {"\n\n"}
                  I componenti dell'organo di controllo possono in qualsiasi momento procedere, anche individualmente, ad atti di ispezione e di controllo, e a tal fine, possono chiedere agli amministratori notizie sull'andamento delle operazioni sociali o su determinati temi.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 15 - Il soggetto incaricato della revisione legale dei conti</h3>
                <p>
                  Qualora se ne ravvisi la necessità o sia previsto per legge ai sensi dell'art. 31 D.lgs 117/2017 e s.m.i, l'Assemblea nomina il soggetto incaricato della revisione legale dei conti, il quale può essere o una persona fisica oppure un collegio.
                  {"\n\n"}
                  Nel caso in cui il soggetto incaricato della revisione legale dei conti sia scelto tra i soci, lo stesso non può essere retribuito. Non possono essere eletti revisori contabili i membri del Consiglio Direttivo.
                  {"\n\n"}
                  Nel caso in cui il soggetto incaricato della revisione legale dei conti sia un Collegio, lo stesso è composto di tre membri effettivi e da due supplenti. Il Presidente del Collegio dei Revisori dei conti è eletto dal Collegio stesso tra i suoi membri effettivi.
                  {"\n\n"}
                  Il soggetto incaricato della revisione legale dei conti dura in carica tre anni e può essere rinominato fino a tre volte consecutive.
                  {"\n\n"}
                  Il soggetto incaricato della revisione legale dei conti controlla l'amministrazione dell'ODV, può assistere alle riunioni dell'Assemblea e del Consiglio Direttivo senza diritto di voto, accerta la regolare tenuta delle scritture contabili e certifica la corrispondenza del bilancio consuntivo alle risultanze delle scritture contabili.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 16 - Il Presidente onorario</h3>
                <p>
                  Il Presidente Onorario può essere nominato dall'Assemblea per eccezionali meriti acquisiti in attività a favore dell'ODV.
                  {"\n\n"}
                  Il Presidente Onorario, se socio, ha tutti i diritti e i doveri degli altri soci dell'ODV.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 17 - Comitati Tecnici</h3>
                <p>
                  Nell'ambito delle attività approvate dell'Assemblea dei soci, il Consiglio Direttivo ha facoltà di costituire Comitati Tecnici cui partecipano gli associati o esperti anche non soci, per la definizione e la realizzazione concreta di specifici programmi e progetti, oppure con funzione consultiva in merito a progetti che l'ODV intende promuovere. Il Consiglio stabilisce gli ambiti di azione e le linee di intervento del Comitato e ne nomina il coordinatore.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 18 - Scioglimento</h3>
                <p>
                  L'Assemblea straordinaria può decidere lo scioglimento dell'ODV con il voto favorevole di almeno tre quarti dei soci aventi diritto di voto. In caso di scioglimento, l'Assemblea nomina uno o più liquidatori e determina le modalità di liquidazione del patrimonio sociale e la sua devoluzione ai sensi dell'art. 9 del D. Lgs n. 117/2017.
                  {"\n\n"}
                  In caso di scioglimento, cessazione ovvero estinzione, dell'ODV, il patrimonio residuo è devoluto, previo parere positivo del competente ufficio afferente al Registro unico nazionale del Terzo settore (di cui all'art. 45, comma 1 del D. Lgs n. 117/2017), e salva diversa destinazione imposta dalla legge, ad altri Enti del terzo settore o in mancanza, alla Fondazione Italia Sociale.
                  {"\n\n"}
                  Il suddetto parere è reso entra trenta giorni dalla data di ricezione della richiesta che l'Ente interessato è tenuto ad inoltrare al predetto ufficio con raccomandata a/r o secondo le disposizioni previste dal decreto legislativo 7 marzo 2005 n. 82, decorsi i quali il parere si intende reso positivamente. Gli atti di devoluzione del patrimonio residuo compiuti in assenza o in difformità dal parere sono nulli.
                  {"\n\n"}
                  L'obbligatorietà del parere vincolante di cui al comma 2 avrà efficacia dall'operatività del Registro unico nazionale del Terzo settore.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Art. 19 - Norme finali</h3>
                <p>
                  Per tutto ciò che non è espressamente contemplato dal presente Statuto valgono le norme del Codice Civile, del D.lgs 117/2017 e s.m.i e relativi decreti attuativi, della normativa nazionale e regionale in materia.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-slate-900 mb-2">La Presidente</p>
                  <p className="italic text-slate-600">Maria Filippa Di Biase</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">La Segretaria</p>
                  <p className="italic text-slate-600">Santina Baratti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
