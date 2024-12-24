// MarbleJar.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function MarbleJar() {
  return (
    <Routes>
      <Route path="/marbleJar/" element={<LandingPage />} />
    </Routes>
  )
}

export default MarbleJar