import React from 'react';
import Hero from '../components/Hero';
import PreventionVisits from '../components/PreventionVisits';
import HealthEducation from '../components/HealthEducation';
import MedicalEquipment from '../components/MedicalEquipment';
import TransportServiceSection from '../components/TransportServiceSection';
import Projects from '../components/Projects';
import SupportOverview from '../components/SupportOverview';

export default function Home() {
  return (
    <main>
      <Hero />
      <PreventionVisits />
      <TransportServiceSection />
      <MedicalEquipment />
      <HealthEducation />
      <Projects />
      <SupportOverview />
    </main>
  );
}
