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
        <meta
          name="description"
          content="Bespoke web architectures, missed-call text-back, and automated lead capture for local service businesses in Riverside, CA."
        />
        <meta property="og:title" content="Local Marketing & Lead Recovery Systems in Riverside, CA" />
        <meta
          property="og:description"
          content="Bespoke web architectures, missed-call text-back, and automated lead capture for local service businesses in Riverside, CA."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Marketing & Lead Recovery Systems in Riverside, CA" />
        <meta
          name="twitter:description"
          content="Bespoke web architectures, missed-call text-back, and automated lead capture for local service businesses in Riverside, CA."
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
