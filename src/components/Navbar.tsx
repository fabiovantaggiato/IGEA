import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Progetti', href: '/progetti' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" aria-label="Torna alla Home Page">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Heart size={24} aria-hidden="true" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">IGEA ODV</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`${isActive(link.href) ? 'text-primary font-bold' : 'text-slate-600 font-medium'} hover:text-primary transition-colors`}
                aria-label={`Vai alla pagina ${link.name}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/sostienici" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-medium transition-colors"
              aria-label="Sostieni l'associazione con una donazione o volontariato"
            >
              Sostienici
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 ${isActive(link.href) ? 'text-primary font-bold bg-primary/5' : 'text-slate-600 font-medium'} hover:text-primary hover:bg-slate-50 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/sostienici" className="block w-full text-center mt-4 bg-primary text-white px-5 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Sostienici
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
