// AgentSelection.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function AgentSelection() {
  return (
    <Routes>
      <Route path="/agentSelection/" element={<LandingPage />} />
    </Routes>
  )
}

export default AgentSelection