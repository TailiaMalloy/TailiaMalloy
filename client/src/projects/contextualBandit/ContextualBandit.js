// ContextualBandit.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function ContextualBandit() {
  return (
    <Routes>
      <Route path="/contextualBandit/" element={<LandingPage />} />
    </Routes>
  )
}

export default ContextualBandit