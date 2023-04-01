import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Signin from './pages/Signin';









function App() {
  return (
    <Router>
    <div className="bg bg-black h-screen">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path = "/" element = {<Home/>} />
        <Route path = "/account" element = {<Account/>} />
        <Route path = "/signin" element = {<Signin/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
