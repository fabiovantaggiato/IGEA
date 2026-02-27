import React from 'react';
import { MapPin, Mail, Phone, AlertCircle, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contattaci
          </h2>
          <p className="text-lg text-slate-600">
            Siamo a tua disposizione per informazioni, supporto o per accogliere nuovi volontari.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Invia un Messaggio</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-slate-700 mb-2">Nome *</label>
                  <input type="text" id="nome" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Il tuo nome" required />
                </div>
                <div>
                  <label htmlFor="cognome" className="block text-sm font-semibold text-slate-700 mb-2">Cognome *</label>
                  <input type="text" id="cognome" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Il tuo cognome" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="la-tua-email@esempio.it" required />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-2">Telefono</label>
                  <input type="tel" id="telefono" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+39 123 456 7890" />
                </div>
              </div>

              <div>
                <label htmlFor="oggetto" className="block text-sm font-semibold text-slate-700 mb-2">Oggetto *</label>
                <select id="oggetto" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white" required>
                  <option value="">Seleziona un oggetto</option>
                  <option value="informazioni">Richiesta Informazioni</option>
                  <option value="volontariato">Diventare Volontario</option>
                  <option value="donazioni">Donazioni</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-semibold text-slate-700 mb-2">Messaggio *</label>
                <textarea id="messaggio" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Scrivi qui il tuo messaggio..." required></textarea>
                <div className="text-xs text-slate-500 mt-2 text-right">0/500 caratteri</div>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Send size={20} />
                Invia Messaggio
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Informazioni di Contatto</h3>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Sede Legale</div>
                    <div className="text-slate-600">Via A. Giordano, 36<br/>13011 Borgosesia (VC)<br/>Italia</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Sede Operativa</div>
                    <div className="text-slate-600">Via Prof. Calderini, 19<br/>13011 Borgosesia (VC)<br/>Italia</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Email</div>
                    <a href="mailto:assigeaborgosesia@gmail.com" className="text-slate-600 hover:text-primary transition-colors">assigeaborgosesia@gmail.com</a>
                    <div className="font-bold text-slate-900 mt-3 mb-1">PEC</div>
                    <a href="mailto:assigeaborgosesia@pec.it" className="text-slate-600 hover:text-primary transition-colors">assigeaborgosesia@pec.it</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Telefono Sede</div>
                    <a href="tel:016324870" className="text-slate-600 hover:text-primary transition-colors">0163 24870</a>
                    <div className="font-bold text-slate-900 mt-3 mb-1">Servizio Trasporti (Lorella)</div>
                    <a href="tel:3703219062" className="text-primary font-bold hover:text-primary/80 transition-colors">370 321 9062</a>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Seguici sui Social</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-colors" aria-label="Seguici su Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-sky-500 text-white p-3 rounded-xl hover:bg-sky-600 transition-colors" aria-label="Seguici su Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="bg-pink-600 text-white p-3 rounded-xl hover:bg-pink-700 transition-colors" aria-label="Seguici su Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-colors" aria-label="Seguici su Youtube">
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertCircle size={24} className="text-red-600" />
                Hai Bisogno di Aiuto Urgente?
              </h3>
              <p className="text-red-800 mb-6">
                Per emergenze sanitarie o situazioni che richiedono intervento immediato, contatta i servizi di emergenza locali.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-red-900 font-bold">
                  <Phone size={20} className="text-red-600" />
                  Emergenze: 112
                </div>
                <div className="flex items-center gap-3 text-red-900 font-bold">
                  <Phone size={20} className="text-red-600" />
                  Guardia Medica: 116117
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Dove Siamo</h3>
          <p className="text-slate-600">
            La nostra associazione ha sede a Borgosesia, nel cuore della Valsesia, e opera in tutto il territorio piemontese.
          </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-[400px] bg-slate-100 relative">
          {/* Placeholder for Map */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
            <MapPin size={48} />
            <span className="font-medium">Mappa Interattiva di Borgosesia</span>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22222.222222222223!2d8.277777777777779!3d45.71666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786111111111111%3A0x1111111111111111!2sBorgosesia%20VC!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            className="absolute inset-0"
            title="Mappa Borgosesia"
          ></iframe>
        </div>
        <div className="text-center mt-4 text-sm text-slate-500">
          <span className="font-bold text-slate-700">Sede Operativa:</span> Via Prof. Calderini, 19 - 13011 Borgosesia (VC)
        </div>

      </div>
    </section>
  );
}
