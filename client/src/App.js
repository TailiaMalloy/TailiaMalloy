// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AgentSelection from './projects/agentSelection/AgentSelection'
import ContextualBandit from './projects/contextualBandit/ContextualBandit'
import FoundationPhishing from './projects/foundationPhishing/FoundationPhishing'
import MarbleJar from './projects/marbleJar/MarbleJar'
import NReasons from './projects/nReasons/NReasons'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/agentSelection" element={<AgentSelection />} />
          <Route path="/projects/contextualBandit" element={<ContextualBandit />} />
          <Route path="/projects/foundationPhishing" element={<FoundationPhishing />} />
          <Route path="/projects/marbleJar" element={<MarbleJar />} />
          <Route path="/projects/nReasons" element={<NReasons />} />
        </Routes>
      </Router>
  );
}

export default App;