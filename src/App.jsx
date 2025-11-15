import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Mainpage from './pages/main page/Mainpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>
  )
}

export default App
