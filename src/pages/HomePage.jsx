import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import ProblemSolution from '../components/ProblemSolution';
import RevenueMechanics from '../components/RevenueMechanics';
import WhiteLabelFeatures from '../components/WhiteLabelFeatures';
import LiveDemo from '../components/LiveDemo';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Missed-Call Text-Back & Speed-to-Lead Systems | Riverside, CA</title>
        <meta
          name="description"
          content="One in four calls to a local business goes unanswered. We text every missed caller back in 15 seconds so the job doesn't go to whoever picked up. Riverside, CA."
        />
        <meta property="og:title" content="Missed-Call Text-Back & Speed-to-Lead Systems | Riverside, CA" />
        <meta
          property="og:description"
          content="One in four calls to a local business goes unanswered. We text every missed caller back in 15 seconds so the job doesn't go to whoever picked up. Riverside, CA."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Missed-Call Text-Back & Speed-to-Lead Systems | Riverside, CA" />
        <meta
          name="twitter:description"
          content="One in four calls to a local business goes unanswered. We text every missed caller back in 15 seconds so the job doesn't go to whoever picked up. Riverside, CA."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
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
    </>
  );
};

export default HomePage;
