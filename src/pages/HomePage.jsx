import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TryIt from '../components/TryIt';
import WhoItsFor from '../components/WhoItsFor';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import A2PCompliance from '../components/A2PCompliance';
import FounderLine from '../components/FounderLine';
import Faq from '../components/Faq';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

// Meta copy is final (brief, 28 Sep 2026). index.html carries the same strings
// in its static <head>, which is what crawlers see — keep the two in step.
const TITLE = 'Every Call Answered | AI Phone Answering & Missed-Call Text-Back | Riverside, CA';
const DESCRIPTION =
  "When you can't pick up, we answer. AI phone answering and missed-call text-back for HVAC, plumbing, electrical, and roofing contractors, set up and run for you from Riverside, CA. No setup fee, no contract.";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href="https://nextleaguemarketing.com/" />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="HVAC marketing Riverside, plumber marketing Riverside CA, contractor lead generation, missed call text back, GoHighLevel for contractors, A2P compliance contractors, Riverside CA"
        />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TryIt />
        <WhoItsFor />
        <ProblemSolution />
        <HowItWorks />
        <Pricing />
        <A2PCompliance />
        <FounderLine />
        <Faq />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
