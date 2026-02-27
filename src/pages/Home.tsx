import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Projects from '../components/Projects';
import SupportOverview from '../components/SupportOverview';

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <SupportOverview />
    </main>
  );
}
