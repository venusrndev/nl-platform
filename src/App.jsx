import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import ProblemSolution from './components/ProblemSolution';
import RevenueMechanics from './components/RevenueMechanics';
import WhiteLabelFeatures from './components/WhiteLabelFeatures';
import LiveDemo from './components/LiveDemo';
import AuditForm from './components/AuditForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f3f4f6] font-ui selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TickerBar />
        <ProblemSolution />
        <RevenueMechanics />
        <WhiteLabelFeatures />
        <LiveDemo />
        <AuditForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
