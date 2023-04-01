import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
    </Router>
  )
}

export default App
