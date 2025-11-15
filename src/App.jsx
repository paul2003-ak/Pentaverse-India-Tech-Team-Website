import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Ayanpage from './ayanpage/ayanpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ayanpage />} />
    </Routes>
  )
}

export default App
