/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Support from './pages/Support';
import Contributi from './pages/Contributi';
import Bilanci from './pages/Bilanci';
import Privacy from './pages/Privacy';
import Statuto from './pages/Statuto';
import CookiePolicy from './pages/CookiePolicy';
import CookieConsent from './components/CookieConsent';
import Press from './pages/Press';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/progetti" element={<Projects />} />
            <Route path="/progetti/:id" element={<ProjectDetail />} />
            <Route path="/sostienici" element={<Support />} />
            <Route path="/contributi" element={<Contributi />} />
            <Route path="/bilanci" element={<Bilanci />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/statuto" element={<Statuto />} />
            <Route path="/parlano-di-noi" element={<Press />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}
