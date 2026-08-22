import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissedCallTextBackPage from './pages/MissedCallTextBackPage';
import SpeedToLeadPage from './pages/SpeedToLeadPage';
import RiversidePage from './pages/RiversidePage';
import FreeAuditPage from './pages/FreeAuditPage';
import TextUsPage from './pages/TextUsPage';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0c0d10] text-[#f3f4f6] font-ui selection:bg-emerald-500 selection:text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missed-call-text-back" element={<MissedCallTextBackPage />} />
        <Route path="/speed-to-lead" element={<SpeedToLeadPage />} />
        <Route path="/riverside" element={<RiversidePage />} />
        <Route path="/free-audit" element={<FreeAuditPage />} />
        <Route path="/text-us" element={<TextUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
