import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const projectsData = [
  {
    id: "defibrillatori",
    title: "Donazione Defibrillatori",
    description: "Acquisto e donazione di n.ro 4 defibrillatori ai Comuni di Varallo Sesia, Serravalle Sesia, Borgosesia, e Atletica Valsesia.",
    longDescription: "La sicurezza della nostra comunità passa attraverso la prevenzione cardiovascolare. Abbiamo acquistato e donato 4 defibrillatori semiautomatici (DAE) a punti strategici del territorio: i comuni di Varallo, Serravalle e Borgosesia, oltre all'associazione Atletica Valsesia, per garantire un intervento tempestivo in caso di arresto cardiaco.",
    image: "https://picsum.photos/seed/dae/800/600",
    stat: "4 DAE donati",
    goals: ["Aumentare la sicurezza cardio-protetta", "Supportare le attività sportive", "Prevenzione decessi per arresto cardiaco"]
  },
  {
    id: "colonna-laparoscopica",
    title: "Operazione 3D Ospedale",
    description: "Acquisto di una colonna laparoscopica 3D ed annesso software per l'Ospedale di Borgosesia.",
    longDescription: "Nell'ambito del progetto 'Operazione 3D Ospedale di Borgosesia', abbiamo finanziato l'acquisto di una colonna laparoscopica 3D di ultima generazione. Questa tecnologia permette interventi chirurgici più precisi, meno invasivi e con tempi di recupero più rapidi per i pazienti del nostro ospedale.",
    image: "https://picsum.photos/seed/surgery/800/600",
    stat: "Tecnologia 3D all'avanguardia",
    goals: ["Aggiornamento sala operatoria", "Chirurgia mininvasiva", "Miglioramento cure ospedaliere"]
  },
  {
    id: "ecografi-mylab",
    title: "Ecografi MyLab X5",
    description: "Acquisto e donazione di n.ro 2 ecografi 'MyLab X5' per l'Ospedale di Borgosesia.",
    longDescription: "Abbiamo donato due nuovi ecografi modello MyLab X5 all'Ospedale di Borgosesia. Questi strumenti sono fondamentali per la diagnostica quotidiana in diversi reparti, permettendo esami rapidi e ad alta risoluzione direttamente al letto del paziente.",
    image: "https://picsum.photos/seed/ultrasound/800/600",
    stat: "2 Ecografi donati",
    goals: ["Diagnostica rapida", "Supporto ai reparti", "Alta risoluzione d'immagine"]
  },
  {
    id: "pico-press",
    title: "Strumento Pico Press",
    description: "Acquisto dello strumento 'Pico Press', misuratore pressorio bendaggi angiologici.",
    longDescription: "Per il reparto di angiologia dell'Ospedale di Borgosesia, abbiamo acquistato lo strumento Pico Press. Si tratta di un misuratore di pressione sotto-bendaggio essenziale per la corretta applicazione delle terapie compressive, migliorando l'efficacia del trattamento delle patologie vascolari.",
    image: "https://picsum.photos/seed/angiology/800/600",
    stat: "Supporto Angiologia",
    goals: ["Precisione terapeutica", "Monitoraggio bendaggi", "Efficacia clinica"]
  },
  {
    id: "ti-aiuto-io",
    title: "Progetto Ti Aiuto Io",
    description: "Acquisto di un'autovettura per il trasporto dei pazienti presso i presidi ospedalieri.",
    longDescription: "Il progetto 'Ti Aiuto io: in cammino con IGEA' ha visto l'acquisto di un'autovettura dedicata al trasporto sociale. Il servizio è rivolto ai pazienti che necessitano di recarsi presso presidi ospedalieri territoriali ed extra-territoriali per visite, terapie o esami e non hanno mezzi propri.",
    image: "https://picsum.photos/seed/car-service/800/600",
    stat: "Trasporto sociale attivo",
    goals: ["Mobilità garantita", "Supporto ai pazienti fragili", "Copertura extra-territoriale"]
  },
  {
    id: "vediamoci-meglio",
    title: "Progetto Vediamoci Meglio",
    description: "Acquisto strumento 'Spot Vision Screener' per screening visivi negli asili.",
    longDescription: "Con l'acquisto dello strumento 'Spot Vision Screener', portiamo avanti il progetto 'Vediamoci Meglio'. Eseguiamo screening visivi preventivi presso gli asili della Valsesia e Valsessera, permettendo di individuare precocemente difetti della vista nei bambini in età prescolare.",
    image: "https://picsum.photos/seed/vision-screener/800/600",
    stat: "Screening asili",
    goals: ["Prevenzione pediatrica", "Diagnosi precoce", "Copertura Valsesia e Valsessera"]
  },
  {
    id: "sollevatore-santanna",
    title: "Sollevatore Casa di Riposo",
    description: "Acquisto e donazione di un sollevatore per la Casa di Riposo Sant'Anna di Borgosesia.",
    longDescription: "Abbiamo donato un sollevatore meccanico alla Casa di Riposo Sant'Anna di Borgosesia per facilitare la movimentazione degli ospiti non autosufficienti, garantendo loro maggiore comfort e sicurezza e supportando il lavoro quotidiano degli operatori.",
    image: "https://picsum.photos/seed/lift/800/600",
    stat: "Supporto anziani",
    goals: ["Comfort degli ospiti", "Sicurezza movimentazione", "Supporto operatori"]
  },
  {
    id: "microscopio-oculistica",
    title: "Operazione Oculistica",
    description: "Donazione di € 60.000 per l'acquisto di un microscopio per il reparto di oculistica.",
    longDescription: "Nell'ambito del progetto '#OPERAZIONE OCULISTICA OSPEDALE DI BORGOSESIA GUARDIAMO INSIEME IL DOMANI', abbiamo donato 60.000 euro per l'acquisto di un microscopio operatorio di altissima precisione destinato al reparto di oculistica dell'Ospedale di Borgosesia.",
    image: "https://picsum.photos/seed/microscope/800/600",
    stat: "€ 60.000 donati",
    goals: ["Chirurgia oculistica avanzata", "Miglioramento prestazioni", "Aggiornamento tecnologico"]
  },
  {
    id: "ecografo-nefrologia",
    title: "Ecografo Nefrologia",
    description: "Acquisto e donazione di un ecografo wireless destinato al reparto di nefrologia.",
    longDescription: "Abbiamo dotato il reparto di nefrologia di un innovativo ecografo wireless. La portabilità e la facilità d'uso di questo strumento permettono ai medici di effettuare diagnosi rapide direttamente durante le sedute di dialisi o le visite in reparto.",
    image: "https://picsum.photos/seed/nephrology/800/600",
    stat: "Tecnologia Wireless",
    goals: ["Diagnostica in reparto", "Supporto pazienti nefrologici", "Innovazione tecnologica"]
  },
  {
    id: "lucas-cardiologia",
    title: "Massaggiatore Cardiaco LUCAS",
    description: "Acquisto e donazione di un massaggiatore cardiaco 'LUCAS 3.1' per la cardiologia.",
    longDescription: "Il massaggiatore cardiaco automatico LUCAS 3.1 è uno strumento salvavita che garantisce compressioni toraciche costanti e di alta qualità durante le manovre di rianimazione. Lo abbiamo donato al reparto di cardiologia per potenziare la gestione delle emergenze cardiache.",
    image: "https://picsum.photos/seed/lucas/800/600",
    stat: "LUCAS 3.1 donato",
    goals: ["Rianimazione avanzata", "Supporto emergenze", "Costanza delle compressioni"]
  },
  {
    id: "aiuti-territorio",
    title: "Sostegno al Territorio",
    description: "Progetti vari a sostegno di richieste d'aiuto giunte dal territorio (tute, libri, occhiali, borse di studio).",
    longDescription: "IGEA non è solo grandi macchinari, ma anche vicinanza alle piccole necessità quotidiane. Abbiamo finanziato l'acquisto di tute per Atletica Valsesia, testi scolastici per una studentessa di Grignasco, latte speciale per lo svezzamento, occhiali per una bambina e due borse di studio per studenti dell'Istituto Alberghiero di Varallo.",
    image: "https://picsum.photos/seed/community-help/800/600",
    stat: "Molteplici aiuti diretti",
    goals: ["Supporto allo studio", "Aiuto alle famiglie", "Sostegno allo sport"]
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">I Nostri Progetti</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
          Scopri nel dettaglio le iniziative che portiamo avanti per il benessere della nostra comunità.
        </p>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                  <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium mb-6">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    {project.stat}
                  </div>
                  <Link 
                    to={`/progetti/${project.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 rounded-xl transition-colors"
                    aria-label={`Scopri di più sul progetto ${project.title}`}
                  >
                    Scopri di più
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
