import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const RiversidePage = () => {
  return (
    <>
      <Helmet>
        <title>Local Marketing & Lead Recovery Systems in Riverside, CA</title>
        <link rel="canonical" href="https://nextleaguemarketing.com/riverside" />
        <meta
          name="description"
          content="AI phone answering and missed-call text-back for Riverside and Inland Empire contractors, set up and run for you locally. No setup fee, no contract."
        />
        <meta property="og:title" content="Local Marketing & Lead Recovery Systems in Riverside, CA" />
        <meta
          property="og:description"
          content="AI phone answering and missed-call text-back for Riverside and Inland Empire contractors, set up and run for you locally. No setup fee, no contract."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com/riverside" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Marketing & Lead Recovery Systems in Riverside, CA" />
        <meta
          name="twitter:description"
          content="AI phone answering and missed-call text-back for Riverside and Inland Empire contractors, set up and run for you locally. No setup fee, no contract."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default RiversidePage;
