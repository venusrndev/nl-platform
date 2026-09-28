import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import ProblemSolution from '../components/ProblemSolution';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const MissedCallTextBackPage = () => {
  return (
    <>
      <Helmet>
        <title>Missed-Call Text-Back for Service Businesses | Riverside, CA</title>
        <link rel="canonical" href="https://nextleaguemarketing.com/missed-call-text-back" />
        <meta
          name="description"
          content="Turn unanswered calls into booked jobs instantly. Next League Marketing automatically texts missed callers within seconds."
        />
        <meta property="og:title" content="Missed-Call Text-Back for Service Businesses | Riverside, CA" />
        <meta
          property="og:description"
          content="Turn unanswered calls into booked jobs instantly. Next League Marketing automatically texts missed callers within seconds."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com/missed-call-text-back" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Missed-Call Text-Back for Service Businesses | Riverside, CA" />
        <meta
          name="twitter:description"
          content="Turn unanswered calls into booked jobs instantly. Next League Marketing automatically texts missed callers within seconds."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <ProblemSolution />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default MissedCallTextBackPage;
