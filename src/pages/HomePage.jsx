import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import TradesBand from '../components/TradesBand';
import ProblemSolution from '../components/ProblemSolution';
import RevenueMechanics from '../components/RevenueMechanics';
import Reactivation from '../components/Reactivation';
import WhiteLabelFeatures from '../components/WhiteLabelFeatures';
import LiveDemo from '../components/LiveDemo';
import A2PCompliance from '../components/A2PCompliance';
import FounderLine from '../components/FounderLine';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Lead Recovery for HVAC &amp; Plumbing Contractors | Riverside, CA | Next League Marketing</title>
        <meta
          name="description"
          content="We stop Riverside contractors from losing jobs to missed calls. Automated 15-second text-back, instant lead response, review generation and dormant-customer reactivation for HVAC, plumbing, electrical and roofing companies."
        />
        <meta
          name="keywords"
          content="HVAC marketing Riverside, plumber marketing Riverside CA, contractor lead generation, missed call text back, GoHighLevel for contractors, A2P compliance contractors, Riverside CA"
        />
        <meta property="og:title" content="Lead Recovery for HVAC & Plumbing Contractors | Riverside, CA | Next League Marketing" />
        <meta
          property="og:description"
          content="We stop Riverside contractors from losing jobs to missed calls. Automated 15-second text-back, instant lead response, review generation and dormant-customer reactivation for HVAC, plumbing, electrical and roofing companies."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead Recovery for HVAC & Plumbing Contractors | Riverside, CA | Next League Marketing" />
        <meta
          name="twitter:description"
          content="We stop Riverside contractors from losing jobs to missed calls. Automated 15-second text-back, instant lead response, review generation and dormant-customer reactivation for HVAC, plumbing, electrical and roofing companies."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TickerBar />
        <TradesBand />
        <ProblemSolution />
        <RevenueMechanics />
        <Reactivation />
        <WhiteLabelFeatures />
        <LiveDemo />
        <A2PCompliance />
        <FounderLine />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
