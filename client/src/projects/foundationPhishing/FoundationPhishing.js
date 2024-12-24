// FoundationPhishing.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function FoundationPhishing() {
  return (
    <Routes>
      <Route path="/foundationPhishing/" element={<LandingPage />} />
    </Routes>
  )
}

export default FoundationPhishing