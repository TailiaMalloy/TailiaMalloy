// NReasons.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function NReasons() {
  return (
    <Routes>
      <Route path="/nReasons/" element={<LandingPage />} />
    </Routes>
  )
}

export default NReasons