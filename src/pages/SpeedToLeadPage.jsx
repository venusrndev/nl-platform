import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import RevenueMechanics from '../components/RevenueMechanics';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const SpeedToLeadPage = () => {
  return (
    <>
      <Helmet>
        <title>Speed-to-Lead Automation & Lead Recovery | Riverside, CA</title>
        <meta
          name="description"
          content="Stop losing leads to slow response times. Automated instant SMS and email responses for Riverside County service businesses."
        />
        <meta property="og:title" content="Speed-to-Lead Automation & Lead Recovery | Riverside, CA" />
        <meta
          property="og:description"
          content="Stop losing leads to slow response times. Automated instant SMS and email responses for Riverside County service businesses."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speed-to-Lead Automation & Lead Recovery | Riverside, CA" />
        <meta
          name="twitter:description"
          content="Stop losing leads to slow response times. Automated instant SMS and email responses for Riverside County service businesses."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <RevenueMechanics />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default SpeedToLeadPage;
