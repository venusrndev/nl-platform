import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import AuditForm from '../components/AuditForm';
import Footer from '../components/Footer';

export const FreeAuditPage = () => {
  return (
    <>
      <Helmet>
        <title>Free Missed-Call Audit | Next League Marketing</title>
        <link rel="canonical" href="https://nextleaguemarketing.com/free-audit" />
        <meta
          name="description"
          content="Find out how many calls went to voicemail, and how many messages never got an answer. No pitch, no obligation."
        />
        <meta property="og:title" content="Free Missed-Call Audit | Next League Marketing" />
        <meta
          property="og:description"
          content="Find out how many calls went to voicemail, and how many messages never got an answer. No pitch, no obligation."
        />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com/free-audit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Missed-Call Audit | Next League Marketing" />
        <meta
          name="twitter:description"
          content="Find out how many calls went to voicemail, and how many messages never got an answer. No pitch, no obligation."
        />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <AuditForm showBooking showForm={false} headingAs="h1" />
      </main>
      <Footer />
    </>
  );
};

export default FreeAuditPage;
